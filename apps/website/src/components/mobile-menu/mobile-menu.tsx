import { component$, useSignal, useTask$, Slot } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import { Dialog } from 'qwik-primitives';
import { MobileMenuTrigger } from './mobile-menu-trigger';
import { MobileMenuContent } from './mobile-menu-content';
import { MobileMenuHeader } from './mobile-menu-header';
import { MobileMenuClose } from './mobile-menu-close';
import { MobileMenuBody } from './mobile-menu-body';

export const MobileMenu = component$(() => {
  const isOpen = useSignal(false);
  const isDesktop = useSignal(false);

  useTask$(({ track, cleanup }) => {
    track(() => isDesktop.value);

    if (isServer) return;

    const closeMobileMenu = () => {
      if (isOpen.value && isDesktop.value) {
        isOpen.value = false;
      }
    };

    closeMobileMenu();

    cleanup(() => {
      closeMobileMenu();
    });
  });

  useTask$(({ track, cleanup }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (isOpen.value) {
      const query = '(min-width: 1024px)';
      const matchMedia = window.matchMedia(query);

      const handleChange = () => {
        isDesktop.value = window.matchMedia(query).matches;
      };

      // Triggered at the first client-side load and if query changes.
      handleChange();

      // Use deprecated `addListener` and `removeListener` to support Safari < 14.
      if (matchMedia.addListener) {
        matchMedia.addListener(handleChange);
      } else {
        matchMedia.addEventListener('change', handleChange);
      }

      cleanup(() => {
        if (matchMedia.removeListener) {
          matchMedia.removeListener(handleChange);
        } else {
          matchMedia.removeEventListener('change', handleChange);
        }
      });
    }
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
      <MobileMenuTrigger />

      <MobileMenuContent>
        <MobileMenuHeader>
          <Slot name="header" />
          <MobileMenuClose />
        </MobileMenuHeader>

        <MobileMenuBody>
          <Slot name="body" />
        </MobileMenuBody>
      </MobileMenuContent>
    </Dialog.Root>
  );
});
