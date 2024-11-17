import type { FocusFirstElementOptions, FocusableTarget } from './focus-first-element.types';
import { isServer, isDev } from '@builder.io/qwik/build';

/**
 * Function that allow sets focus on the first element in a list of candidates.
 */
export const focusFirstElement = (candidates: HTMLElement[], options?: FocusFirstElementOptions) => {
  const { select, preventScroll } = { select: false, preventScroll: true, ...options };

  if (isServer && isDev) {
    throw Error('[qwik-primitives]: focusFirstElement function can not be invoke during SSR');
  }

  const previouslyFocusedElement = document.activeElement;

  for (const candidate of candidates) {
    // Only focus if that element is focusable.
    if (candidate && candidate.focus) {
      const previouslyFocusedElement = document.activeElement;

      candidate.focus({ preventScroll });

      const isSelectableElement = (element: any): element is FocusableTarget & { select: () => void } => {
        return (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) && 'select' in element;
      };

      // Only select if its not the same element, it supports selection and we need to select.
      if (candidate !== previouslyFocusedElement && isSelectableElement(candidate) && select) {
        candidate.select();
      }
    }

    if (document.activeElement !== previouslyFocusedElement) return;
  }
};
