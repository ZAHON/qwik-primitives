import { component$, useContext } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';
import { CrossIcon } from '@/ui/qwik/icons/cross-icon';
import { mobileMenuCloseStyles } from './mobile-menu-close.styles';
import { MobileMenuContext } from '../mobile-menu-context';

export const MobileMenuClose = component$(() => {
  const { name } = useContext(MobileMenuContext);

  return (
    <Dialog.Close data-qwik-primitives-auto-focus="" class={mobileMenuCloseStyles()}>
      <CrossIcon height={16} width={16} />
      <span class="sr-only">Close {name} navigation</span>
    </Dialog.Close>
  );
});
