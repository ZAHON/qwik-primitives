import { isServer, isDev } from '@builder.io/qwik/build';

/**
 * Function that returns the first visible element in a list.
 * NOTE: Only checks visibility up to the `container`.
 */
export const findFirstVisibleElement = (elements: HTMLElement[], container: HTMLElement) => {
  if (isServer && isDev) {
    throw Error('[qwik-primitives]: findFirstVisibleElement function can not be invoke during SSR');
  }

  const isHidden = (node: HTMLElement) => {
    if (getComputedStyle(node).visibility === 'hidden') return true;

    while (node) {
      // we stop at `upTo` (excluding it)
      if (container !== undefined && node === container) return false;
      if (getComputedStyle(node).display === 'none') return true;

      node = node.parentElement as HTMLElement;
    }

    return false;
  };

  for (const element of elements) {
    // we stop checking if it's hidden at the `container` level (excluding)
    if (!isHidden(element)) return element;
  }
};
