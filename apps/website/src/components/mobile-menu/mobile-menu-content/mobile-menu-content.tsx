import { component$, Slot } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';
import { mobileMenuContentStyles } from './mobile-menu-content.styles';

export const MobileMenuContent = component$(() => {
  return (
    <Dialog.Content class={mobileMenuContentStyles()}>
      <Slot />
    </Dialog.Content>
  );
});
