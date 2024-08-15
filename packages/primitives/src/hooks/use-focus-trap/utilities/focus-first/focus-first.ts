import { focus } from '..';

export const focusFirst = (candidates: HTMLElement[], { select = false } = {}) => {
  const previouslyFocusedElement = document.activeElement;

  for (const candidate of candidates) {
    focus(candidate, { select });

    if (document.activeElement !== previouslyFocusedElement) {
      return;
    }
  }
};
