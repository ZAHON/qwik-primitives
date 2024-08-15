import { getTabbableCandidates } from '..';

export const getTabbableEdges = (container: HTMLElement) => {
  const candidates = getTabbableCandidates(container);

  const findVisible = (elements: HTMLElement[], container: HTMLElement) => {
    const isHidden = (node: HTMLElement, { upTo }: { upTo?: HTMLElement }) => {
      if (getComputedStyle(node).visibility === 'hidden') {
        return true;
      }

      while (node) {
        // we stop at `upTo` (excluding it)
        if (upTo !== undefined && node === upTo) return false;
        if (getComputedStyle(node).display === 'none') return true;
        node = node.parentElement as HTMLElement;
      }

      return false;
    };

    for (const element of elements) {
      // we stop checking if it's hidden at the `container` level (excluding)
      if (!isHidden(element, { upTo: container })) {
        return element;
      }
    }
  };

  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);

  return [first, last] as const;
};
