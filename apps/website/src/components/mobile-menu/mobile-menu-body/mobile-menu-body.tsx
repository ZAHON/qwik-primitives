import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { scrollbarStyles } from '@/styles/shared/scrollbar';
import { mobileMenuBodyStyles } from './mobile-menu-body.styles';

export const MobileMenuBody = component$(() => {
  return (
    <div class={twm(mobileMenuBodyStyles(), scrollbarStyles({ size: '1' }))}>
      <Slot />
    </div>
  );
});
