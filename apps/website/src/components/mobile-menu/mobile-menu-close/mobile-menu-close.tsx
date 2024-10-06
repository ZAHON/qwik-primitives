import { component$, useContext } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { CrossIcon } from '@/ui/qwik/icons/cross-icon';
import { buttonStyles } from '@/styles/button';
import { MobileMenuContext } from '../mobile-menu-context';

const iconButtonStyles = buttonStyles({
  size: '2',
  shape: 'icon',
  variant: 'ghost',
  color: 'default',
  highContrast: false,
});

export const MobileMenuClose = component$(() => {
  const { name } = useContext(MobileMenuContext);

  return (
    <Dialog.Close data-qwik-primitives-auto-focus="" class={twm(iconButtonStyles)}>
      <CrossIcon height={16} width={16} />
      <span class="sr-only">Close {name} navigation</span>
    </Dialog.Close>
  );
});
