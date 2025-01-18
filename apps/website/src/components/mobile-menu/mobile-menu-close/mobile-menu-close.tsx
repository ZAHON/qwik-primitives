import { component$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { AccessibleIcon } from '@/ui/qwik/accessible-icon';
import { VisuallyHidden } from '@/ui/qwik/visually-hidden';
import { CrossIcon } from '@/ui/qwik/icons/cross-icon';
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
      <AccessibleIcon.Root>
        <CrossIcon height={16} width={16} class="size-4" />
      </AccessibleIcon.Root>

      <VisuallyHidden.Root>Close navigation</VisuallyHidden.Root>
    </Dialog.Close>
  );
});
