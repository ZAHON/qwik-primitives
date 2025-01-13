import { component$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { AccessibleIcon } from '@/ui/qwik/accessible-icon';
import { VisuallyHidden } from '@/ui/qwik/visually-hidden';
import { HamburgerMenuIcon } from '@/ui/qwik/icons/hamburger-menu-icon';
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
      <AccessibleIcon.Root>
        <HamburgerMenuIcon height={16} width={16} />
      </AccessibleIcon.Root>

      <VisuallyHidden.Root>Open navigation</VisuallyHidden.Root>
    </Dialog.Trigger>
  );
});
