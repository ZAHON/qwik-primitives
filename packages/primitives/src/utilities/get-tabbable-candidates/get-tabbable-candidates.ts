import type { GetTabbableCandidatesOptions } from './get-tabbable-candidates.types';
import { isServer, isDev } from '@builder.io/qwik/build';

/**
 * Function that returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */
export const getTabbableCandidates = (container: HTMLElement, options?: GetTabbableCandidatesOptions) => {
  const { removeLinks } = { removeLinks: false, ...options };

  if (isServer && isDev) {
    throw Error('[qwik-primitives]: getTabbableCandidates function can not be invoke during SSR');
  }

  const nodes: HTMLElement[] = [];

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node: any) => {
      const isHiddenInput = node.tagName === 'INPUT' && node.type === 'hidden';

      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      // `.tabIndex` is not the same as the `tabindex` attribute. It works on the
      // runtime's understanding of tabbability, so this automatically accounts
      // for any kind of element that could be tabbed to.
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    },
  });

  while (walker.nextNode()) nodes.push(walker.currentNode as HTMLElement);

  // We do not take into account the order of nodes with positive `tabIndex` as it
  // hinders accessibility to have tab order different from visual order.
  return removeLinks ? nodes.filter((node) => node.tagName !== 'A') : nodes;
};
