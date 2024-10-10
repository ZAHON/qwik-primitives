import { component$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { CrossIcon } from '@/icons/cross-icon';
import { buttonStyles } from '@/styles/shared/button';

const iconButtonStyles = buttonStyles({
  size: '2',
  shape: 'icon',
  variant: 'ghost',
  color: 'default',
  highContrast: false,
});

export const MobileMenuClose = component$(() => {
  return (
    <Dialog.Close data-qwik-primitives-auto-focus="" class={twm(iconButtonStyles)}>
      <CrossIcon height={16} width={16} />
      <span class="sr-only">Close docs navigation</span>
    </Dialog.Close>
  );
});
