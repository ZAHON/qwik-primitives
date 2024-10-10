import { component$, Slot } from '@builder.io/qwik';
import { mobileMenuHeaderStyles } from './mobile-menu-header.styles';

export const MobileMenuHeader = component$(() => {
  return (
    <div class={mobileMenuHeaderStyles()}>
      <Slot />
    </div>
  );
});
