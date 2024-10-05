export const focusFirstTrigger = (candidates: HTMLElement[]) => {
  const previouslyFocusedElement = document.activeElement;

  for (const candidate of candidates) {
    // if focus is already where we want to go, we don't want to keep going through the candidates
    if (candidate === previouslyFocusedElement) return;

    candidate.focus();

    if (document.activeElement !== previouslyFocusedElement) return;
  }
};
