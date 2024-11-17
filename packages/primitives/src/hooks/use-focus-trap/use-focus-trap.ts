import type { Signal } from '@builder.io/qwik';
import type { UseFocusTrapOptions, FocusTrap } from './use-focus-trap.types';
import { useSignal, useStore, $, useOnDocument, useTask$ } from '@builder.io/qwik';
import { isBrowser, isServer, isDev } from '@builder.io/qwik/build';
import {
  createFocusTrapsStack,
  focusElement,
  focusFirstElement,
  getTabbableCandidates,
  findFirstVisibleElement,
} from './utilities';

const focusTrapsStack = createFocusTrapsStack();

/**
 * Traps focus inside given element.
 */
export const useFocusTrap = (ref: Signal<HTMLElement | undefined>, options?: UseFocusTrapOptions) => {
  const { loop, autoFocus, restoreFocus } = { loop: true, autoFocus: true, restoreFocus: true, ...options };

  const isActive = useSignal(false);
  const lastFocusedElementRef = useSignal<HTMLElement | null>(null);

  const focusTrap = useStore<FocusTrap>({
    paused: false,
    pause: $(function (this: FocusTrap) {
      this.paused = true;
    }),
    resume: $(function (this: FocusTrap) {
      this.paused = false;
    }),
  });

  useTask$(({ track, cleanup }) => {
    track(() => isActive.value);

    if (isBrowser && isActive.value && ref.value) {
      focusTrapsStack.add(focusTrap);

      const previouslyFocusedElement = document.activeElement as HTMLElement | null;
      const hasFocusedCandidate = ref.value.contains(previouslyFocusedElement);

      if (!hasFocusedCandidate || ref.value instanceof HTMLDialogElement) {
        if (ref.value instanceof HTMLDialogElement) ref.value.inert = false;

        const tabbableCandidates = getTabbableCandidates(ref.value, { removeLinks: true });

        if (autoFocus) {
          const autofocusElement = tabbableCandidates.find((tabbableCandidate) => {
            return tabbableCandidate.hasAttribute('data-qwik-primitives-auto-focus');
          });

          if (autofocusElement) {
            focusElement(autofocusElement, { select: true });
          } else {
            if (ref.value.hasAttribute('data-qwik-primitives-alert-dialog-content')) {
              const alertDialogCancelElement = tabbableCandidates.find((tabbableCandidate) => {
                return tabbableCandidate.hasAttribute('data-qwik-primitives-alert-dialog-cancel');
              });

              if (alertDialogCancelElement) {
                focusElement(alertDialogCancelElement, { select: true });
              } else {
                setTimeout(() => focusFirstElement(tabbableCandidates, { select: true }));
              }
            } else {
              if (ref.value instanceof HTMLDialogElement) {
                setTimeout(() => focusFirstElement(tabbableCandidates, { select: true }));
              } else {
                focusFirstElement(tabbableCandidates, { select: true });
              }
            }
          }
        }

        if (document.activeElement === previouslyFocusedElement) {
          focusElement(ref.value);
        }
      }

      cleanup(() => {
        // Using `setTimeout` is required,
        // without it the element will not receive focus.
        setTimeout(() => {
          if (restoreFocus) {
            const restoreFocusElement = previouslyFocusedElement ?? document.body;
            focusElement(restoreFocusElement, { select: true });
          }

          focusTrapsStack.remove(focusTrap);
        });
      });
    }
  });

  useTask$(({ track, cleanup }) => {
    track(() => isActive.value);

    if (isBrowser && isActive.value && ref.value) {
      // Takes care of looping focus (when tabbing whilst at the edges)
      const handleKeyDown = (event: KeyboardEvent) => {
        if (focusTrap.paused) return;

        const isTabKey = event.key === 'Tab' && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement as HTMLElement | null;

        if (isTabKey && focusedElement) {
          const container = event.currentTarget as HTMLElement;

          const getTabbableEdges = () => {
            const tabbableCandidates = getTabbableCandidates(container);
            const firstElement = findFirstVisibleElement(tabbableCandidates, container);
            const lastElement = findFirstVisibleElement(tabbableCandidates.reverse(), container);

            return [firstElement, lastElement] as const;
          };

          const [firstElement, lastElement] = getTabbableEdges();
          const hasTabbableElementsInside = firstElement && lastElement;

          // We can only wrap focus if we have tabbable edges.
          if (!hasTabbableElementsInside) {
            if (focusedElement === container) event.preventDefault();
          } else {
            if (!event.shiftKey && focusedElement === lastElement) {
              event.preventDefault();
              if (!loop) focusElement(lastElement, { select: true });
              if (loop && firstElement) focusElement(firstElement, { select: true });
            } else if (event.shiftKey && focusedElement === firstElement) {
              event.preventDefault();
              if (!loop) focusElement(focusedElement, { select: true });
              if (loop && lastElement) focusElement(lastElement, { select: true });
            }
          }
        }
      };

      ref.value.addEventListener('keydown', handleKeyDown);

      cleanup(() => {
        if (ref.value) {
          ref.value.removeEventListener('keydown', handleKeyDown);
        }
      });
    }
  });

  const handleFocusIn$ = $((event: FocusEvent) => {
    if (!isActive.value || focusTrap.paused || !ref.value) return;

    const target = event.target as HTMLElement | null;

    if (ref.value.contains(target)) {
      lastFocusedElementRef.value = target;
    } else {
      // The use of `setTimeout` is required here, because without it, in some cases the browser crashes.
      setTimeout(() => {
        if (lastFocusedElementRef.value) {
          focusElement(lastFocusedElementRef.value, { select: true });
        }
      });
    }
  });

  const handleFocusOut$ = $((event: FocusEvent) => {
    if (!isActive.value || focusTrap.paused || !ref.value) return;

    const relatedTarget = event.relatedTarget as HTMLElement | null;

    // A `focusout` event with a `null` `relatedTarget` will happen in at least two cases:
    //
    // 1. When the user switches app/tabs/windows/the browser itself loses focus.
    // 2. In Google Chrome, when the focused element is removed from the DOM.
    //
    // We let the browser do its thing here because:
    //
    // 1. The browser already keeps a memory of what's focused for when the page gets refocused.
    // 2. In Google Chrome, if we try to focus the deleted focused element (as per below), it
    //    throws the CPU to 100%, so we avoid doing anything for this reason here too.
    if (relatedTarget === null) return;

    // If the focus has moved to an actual legitimate element (`relatedTarget !== null`)
    // that is outside the container, we move focus to the last valid focused element inside.
    if (!ref.value.contains(relatedTarget) && lastFocusedElementRef.value) {
      focusElement(lastFocusedElementRef.value, { select: true });
    }
  });

  useOnDocument('focusin', handleFocusIn$);
  useOnDocument('focusout', handleFocusOut$);

  const active$ = $(() => {
    if (isServer && isDev) {
      throw Error('[qwik-primitives]: useFocusTrap hook focus trap can not be active during SSR');
    }

    if (ref.value) {
      ref.value.tabIndex = -1;

      // By default, after calling the `showModal` method `HTMLDialogElement`, the focus will be moved to the first focusable element.
      // We prevent this behavior because we want to manage the focus ourselves.
      if (ref.value instanceof HTMLDialogElement) ref.value.inert = true;

      isActive.value = true;
    }
  });

  const deactivate$ = $(() => {
    if (isServer && isDev) {
      throw Error('[qwik-primitives]: useFocusTrap hook focus trap can not be deactivate during SSR');
    }

    if (ref.value) {
      isActive.value = false;
    }
  });

  return { active$, deactivate$ };
};
