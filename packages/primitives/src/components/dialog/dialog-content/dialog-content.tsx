import type { DialogContentProps } from './dialog-content.types';
import { component$, useContext, useId, useSignal, useTask$, sync$, $, Slot } from '@builder.io/qwik';
import { isServer, isBrowser } from '@builder.io/qwik/build';
import { useScrollLock, useFocusTrap } from '@/hooks';
import { composeRefs } from '@/utilities';
import { DialogContext } from '../dialog-context';

/**
 * Contains content to be rendered in the open dialog.
 * This component is based on the `dialog` element.
 */
export const DialogContent = component$<DialogContentProps>((props) => {
  const {
    as,
    ref,
    id,
    preventScroll = true,
    trapFocus = true,
    closeOnEscapeKeyDown = true,
    closeOnClickOutside = true,
    onEscapeKeyDown$,
    onPointerDownOutside$,
    onOpen$,
    onClose$,
    onCancel$,
    onKeyDown$,
    onClick$,
    style,
    ...others
  } = props;

  const { isOpen, setIsOpen$, triggerRef, contentId, titleId, descriptionId } = useContext(DialogContext);

  const autoId = useId();

  const contentRef = useSignal<HTMLDialogElement>();
  const contentHide = useSignal(!isOpen.value);
  const cancelFirstAnimation = useSignal(!isOpen.value);

  const scrollLock = useScrollLock();
  const focusTrap = useFocusTrap(contentRef, { loop: true });

  useTask$(async () => undefined);

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    contentId.value = id || `qwik-primitives-dialog-content-${autoId}`;
  });

  useTask$(({ cleanup }) => {
    cleanup(() => {
      // If a component is unmounted in the browser, its id will also be removed for
      // accessibility reasons so that other DOM elements do not refer to this non-existent element.
      if (isBrowser) contentId.value = undefined;
    });
  });

  useTask$(({ track }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (contentRef.value && cancelFirstAnimation.value) {
      cancelFirstAnimation.value = false;
      contentRef.value.style.removeProperty('animationDuration');
    }
  });

  useTask$(({ track }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (isOpen.value) {
      if (contentRef.value) {
        if (titleId.value) contentRef.value.setAttribute('aria-labelledby', titleId.value);
        if (descriptionId.value) contentRef.value.setAttribute('aria-describedby', descriptionId.value);

        if (preventScroll) scrollLock.lock$();
        if (trapFocus) focusTrap.active$();

        contentHide.value = false;
        contentRef.value.showModal();
      }

      setTimeout(() => {
        if (contentRef.value) {
          const { animationName } = getComputedStyle(contentRef.value);

          if (animationName !== 'none') {
            let currentAnimationName: string | undefined = undefined;

            contentRef.value.addEventListener(
              'animationstart',
              (event) => (currentAnimationName = event.animationName),
              { once: true }
            );

            contentRef.value.addEventListener(
              'animationend',
              (event) => {
                if (currentAnimationName === event.animationName) onOpen$?.();
              },
              { once: true }
            );
          } else {
            onOpen$?.();
          }
        }
      });
    }
  });

  useTask$(({ track }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (!isOpen.value) {
      const closeContent = () => {
        if (!isOpen.value && contentRef.value) {
          contentRef.value.removeAttribute('aria-labelledby');
          contentRef.value.removeAttribute('aria-describedby');

          if (preventScroll) scrollLock.unlock$();
          if (trapFocus) focusTrap.deactivate$();

          contentRef.value.close();
          contentHide.value = true;

          triggerRef.value?.focus();

          onClose$?.();
        }
      };

      if (contentRef.value) {
        // In Firefox, there is a strange error that occurs when animating the closing of a component.
        // At the moment, its cause is unknown, it is possible that it is an implementation error or maybe
        // it is just a specific error that occurs only in this browser.
        // The solution below solves this problem by disabling the ability to animate the closing of a component in Firefox.
        // In the near future, I will try to solve this problem by enabling the animation of the closing of a component in this browser as well.
        // However, considering the global use of this browser by Internet users, this problem has a low priority.
        const isFirefox = 'MozAppearance' in contentRef.value.style;

        if (isFirefox) {
          closeContent();
          return;
        }
      }

      setTimeout(() => {
        if (contentRef.value) {
          const { animationName } = getComputedStyle(contentRef.value);

          if (animationName !== 'none') {
            let currentAnimationName: string | undefined = undefined;

            contentRef.value.addEventListener(
              'animationstart',
              (event) => (currentAnimationName = event.animationName),
              { once: true }
            );

            contentRef.value.addEventListener(
              'animationend',
              (event) => {
                if (currentAnimationName === event.animationName) {
                  closeContent();
                }
              },
              { once: true }
            );
          } else {
            closeContent();
          }
        }
      });
    }
  });

  const handleCancelSync$ = sync$((event: Event) => {
    event.preventDefault();
  });

  const handleKeyDownSync$ = sync$((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  const handleKeyDown$ = $((event: KeyboardEvent) => {
    if (event.key === 'Escape' && closeOnEscapeKeyDown) {
      setIsOpen$(false);
      onEscapeKeyDown$?.();
    }
  });

  const handleClickSync$ = sync$((event: PointerEvent) => {
    event.stopPropagation();
  });

  const handleClick$ = $((event: PointerEvent, currentTarget: HTMLDialogElement) => {
    if (closeOnClickOutside) {
      const rect = currentTarget.getBoundingClientRect();

      const isPointerDownOutside =
        rect.left > event.clientX ||
        rect.right < event.clientX ||
        rect.top > event.clientY ||
        rect.bottom < event.clientY;

      if (isPointerDownOutside && event.pointerId !== -1 && isOpen.value) {
        setIsOpen$(false);
        onPointerDownOutside$?.();
      }
    }
  });

  const Component = as || 'dialog';

  return (
    <Component
      ref={composeRefs([ref, contentRef])}
      role="dialog"
      id={contentId.value}
      tabIndex={trapFocus ? -1 : undefined}
      data-qwik-primitives-dialog-content=""
      data-state={isOpen.value ? 'open' : 'closed'}
      onCancel$={[onCancel$, handleCancelSync$]}
      onKeyDown$={[onKeyDown$, handleKeyDownSync$, handleKeyDown$]}
      onClick$={[onClick$, handleClickSync$, handleClick$]}
      style={{
        opacity: contentHide.value ? 0 : 1,
        animationName: cancelFirstAnimation.value ? 'none' : undefined,
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
