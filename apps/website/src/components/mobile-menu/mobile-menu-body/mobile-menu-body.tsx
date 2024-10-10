import { component$, Slot } from '@builder.io/qwik';
import { mobileMenuBodyStyles } from './mobile-menu-body.styles';

export const MobileMenuBody = component$(() => {
  return (
    <div class={mobileMenuBodyStyles()}>
      <Slot />
    </div>
  );
});
