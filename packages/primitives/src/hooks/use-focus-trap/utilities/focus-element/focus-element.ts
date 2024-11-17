import type { FocusableTarget, FocusElementOptions } from './focus-element.types';
import { isServer, isDev } from '@builder.io/qwik/build';

/**
 * Function that allow sets focus on the specified element.
 */
export const focusElement = (element: FocusableTarget, options?: FocusElementOptions) => {
  const { select, preventScroll } = { select: false, preventScroll: true, ...options };

  if (isServer && isDev) {
    throw Error('[qwik-primitives]: focusElement function can not be invoke during SSR');
  }

  // Only focus if that element is focusable.
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;

    element.focus({ preventScroll });

    const isSelectableElement = (element: any): element is FocusableTarget & { select: () => void } => {
      return (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) && 'select' in element;
    };

    // Only select if its not the same element, it supports selection and we need to select.
    if (element !== previouslyFocusedElement && isSelectableElement(element) && select) {
      element.select();
    }
  }
};
