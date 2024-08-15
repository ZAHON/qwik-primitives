import type { FocusableTarget } from './focus.types';

export const focus = (element?: FocusableTarget | null, { select = false } = {}) => {
  // only focus if that element is focusable
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;

    // NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
    element.focus({ preventScroll: true });

    // only select if its not the same element, it supports selection and we need to select
    const isSelectableInput = (element: any): element is FocusableTarget & { select: () => void } => {
      return element instanceof HTMLInputElement && 'select' in element;
    };

    if (element !== previouslyFocusedElement && isSelectableInput(element) && select) {
      element.select();
    }
  }
};
