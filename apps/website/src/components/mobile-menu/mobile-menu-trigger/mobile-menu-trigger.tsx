import { component$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { HamburgerMenuIcon } from '@/icons/hamburger-menu-icon';
import { buttonStyles } from '@/styles/shared/button';
import { mobileMenuTriggerStyles } from './mobile-menu-trigger.styles';

const iconButtonStyles = buttonStyles({
  size: '2',
  shape: 'icon',
  variant: 'ghost',
  color: 'default',
  highContrast: false,
});

export const MobileMenuTrigger = component$(() => {
  return (
    <Dialog.Trigger class={twm(iconButtonStyles, mobileMenuTriggerStyles())}>
      <HamburgerMenuIcon height={16} width={16} />
      <span class="sr-only">Open docs navigation</span>
    </Dialog.Trigger>
  );
});
