import { component$, useContext } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { HamburgerMenuIcon } from '@/ui/qwik/icons/hamburger-menu-icon';
import { buttonStyles } from '@/styles/button';
import { mobileMenuTriggerStyles } from './mobile-menu-trigger.styles';
import { MobileMenuContext } from '../mobile-menu-context';

const iconButtonStyles = buttonStyles({
  size: '2',
  shape: 'icon',
  variant: 'ghost',
  color: 'default',
  highContrast: false,
});

export const MobileMenuTrigger = component$(() => {
  const { name } = useContext(MobileMenuContext);

  return (
    <Dialog.Trigger class={twm(iconButtonStyles, mobileMenuTriggerStyles())}>
      <HamburgerMenuIcon height={16} width={16} />
      <span class="sr-only">Open {name} navigation</span>
    </Dialog.Trigger>
  );
});
