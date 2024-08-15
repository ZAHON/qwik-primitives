import type { Signal } from '@builder.io/qwik';
import type { UseFocusTrapOptions, FocusTrap } from './use-focus-trap.types';
import { useSignal, useStore, $, useTask$ } from '@builder.io/qwik';
import { isBrowser, isServer, isDev } from '@builder.io/qwik/build';
import {
  createFocusTrapsStack,
  focus,
  focusFirst,
  removeLinks,
  getTabbableCandidates,
  getTabbableEdges,
} from './utilities';

const focusTrapsStack = createFocusTrapsStack();

/**
 * Traps focus inside given element.
 */
export const useFocusTrap = (elementRef: Signal<HTMLElement | undefined>, options: UseFocusTrapOptions) => {
  const { loop } = options;

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

    if (isBrowser && isActive.value) {
      const handleFocusIn = (event: FocusEvent) => {
        if (focusTrap.paused || !elementRef.value) return;

        const target = event.target as HTMLElement | null;

        if (elementRef.value.contains(target)) {
          lastFocusedElementRef.value = target;
        } else {
          focus(lastFocusedElementRef.value, { select: true });
        }
      };

      const handleFocusOut = (event: FocusEvent) => {
        if (focusTrap.paused || !elementRef.value) return;

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
        if (!elementRef.value.contains(relatedTarget)) {
          focus(lastFocusedElementRef.value, { select: true });
        }
      };

      // When the focused element gets removed from the DOM, browsers move focus
      // back to the document.body. In this case, we move focus to the container
      // to keep focus trapped correctly.
      const handleMutations = (mutations: MutationRecord[]) => {
        const focusedElement = document.activeElement as HTMLElement | null;

        if (focusedElement !== document.body) return;

        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus(elementRef.value);
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);

      const mutationObserver = new MutationObserver(handleMutations);

      if (elementRef.value) {
        mutationObserver.observe(elementRef.value, { childList: true, subtree: true });
      }

      cleanup(() => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);

        mutationObserver.disconnect();
      });
    }
  });

  useTask$(({ track, cleanup }) => {
    track(() => isActive.value);

    if (isBrowser && isActive.value && elementRef.value) {
      focusTrapsStack.add(focusTrap);

      const previouslyFocusedElement = document.activeElement as HTMLElement | null;
      const hasFocusedCandidate = elementRef.value.contains(previouslyFocusedElement);

      if (!hasFocusedCandidate) {
        focusFirst(removeLinks(getTabbableCandidates(elementRef.value)), { select: true });

        if (document.activeElement === previouslyFocusedElement) {
          focus(elementRef.value);
        }
      }

      cleanup(() => {
        setTimeout(() => {
          focus(previouslyFocusedElement ?? document.body, { select: true });
          focusTrapsStack.remove(focusTrap);
        });
      });
    }
  });

  useTask$(({ track, cleanup }) => {
    track(() => isActive.value);

    if (isBrowser && isActive.value && elementRef.value) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!loop) return;
        if (focusTrap.paused) return;

        const isTabKey = event.key === 'Tab' && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement as HTMLElement | null;

        if (isTabKey && focusedElement) {
          const container = event.currentTarget as HTMLElement;
          const [first, last] = getTabbableEdges(container);
          const hasTabbableElementsInside = first && last;

          // we can only wrap focus if we have tabbable edges
          if (!hasTabbableElementsInside) {
            if (focusedElement === container) event.preventDefault();
          } else {
            if (!event.shiftKey && focusedElement === last) {
              event.preventDefault();
              if (loop) focus(first, { select: true });
            } else if (event.shiftKey && focusedElement === first) {
              event.preventDefault();
              if (loop) focus(last, { select: true });
            }
          }
        }
      };

      elementRef.value.addEventListener('keydown', handleKeyDown);

      cleanup(() => {
        if (elementRef.value) {
          elementRef.value.removeEventListener('keydown', handleKeyDown);
        }
      });
    }
  });

  const getState$ = $(() => {
    return isActive.value ? 'active' : 'inactive';
  });

  const active$ = $(() => {
    if (isServer && isDev) {
      throw Error('[qwik-primitives]: useFocusTrap hook focus trap can not be active during SSR');
    }

    if (elementRef.value) {
      elementRef.value.tabIndex = -1;
      isActive.value = true;
    }
  });

  const deactivate$ = $(() => {
    if (isServer && isDev) {
      throw Error('[qwik-primitives]: useFocusTrap hook focus trap can not be deactivate during SSR');
    }

    if (elementRef.value) {
      isActive.value = false;
    }
  });

  return { getState$, active$, deactivate$ };
};
