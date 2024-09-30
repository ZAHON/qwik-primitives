import { component$, useContext } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';
import { HamburgerMenuIcon } from '@/ui/qwik/icons/hamburger-menu-icon';
import { mobileMenuTriggerStyles } from './mobile-menu-trigger.styles';
import { MobileMenuContext } from '../mobile-menu-context';

export const MobileMenuTrigger = component$(() => {
  const { name } = useContext(MobileMenuContext);

  return (
    <Dialog.Trigger class={mobileMenuTriggerStyles()}>
      <HamburgerMenuIcon height={16} width={16} />
      <span class="sr-only">Open {name} navigation</span>
    </Dialog.Trigger>
  );
});
