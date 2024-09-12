import type { AlertDialogRootProps } from './alert-dialog-root.types';
import { component$, useSignal, useTask$, useContextProvider, Slot } from '@builder.io/qwik';
import { isServer, isDev } from '@builder.io/qwik/build';
import { useControllableState } from '@/hooks';
import { AlertDialogContext } from '../alert-dialog-context';

/**
 * Contains all the parts of an alert dialog.
 */
export const AlertDialogRoot = component$<AlertDialogRootProps>((props) => {
  const { defaultOpen, open, onOpenChange$ } = props;

  const [isOpen, setIsOpen$] = useControllableState({
    uncontrolledValue: defaultOpen,
    controlledSignal: open,
    finalValue: false,
    onChange$: onOpenChange$,
  });

  const triggerRef = useSignal<HTMLElement | undefined>(undefined);
  const contentId = useSignal<string | undefined>(undefined);
  const titleId = useSignal<string | undefined>(undefined);
  const descriptionId = useSignal<string | undefined>(undefined);

  useTask$(() => {
    if (isServer && isDev && isOpen.value) {
      throw Error('[qwik-primitives]: AlertDialog component can not be open during SSR');
    }
  });

  useContextProvider(AlertDialogContext, { isOpen, setIsOpen$, triggerRef, contentId, titleId, descriptionId });

  return (
    <>
      <Slot />
    </>
  );
});
