import type { PopoverRootProps } from './popover-root.types';
import { component$, useId, useSignal, useTask$, useContextProvider, Slot } from '@builder.io/qwik';
import { isServer, isDev } from '@builder.io/qwik/build';
import { useControllableState } from '@/hooks';
import { PopoverContext } from '../popover-context';

/**
 * Contains all the parts of a popover.
 */
export const PopoverRoot = component$<PopoverRootProps>((props) => {
  const { defaultOpen, open, onOpenChange$ } = props;

  const [isOpen, setIsOpen$] = useControllableState({
    uncontrolledValue: defaultOpen,
    controlledSignal: open,
    finalValue: false,
    onChange$: onOpenChange$,
  });

  const topLayerId = useId();

  const triggerRef = useSignal<HTMLElement | undefined>(undefined);
  const anchorRef = useSignal<HTMLElement | undefined>(undefined);
  const contentId = useSignal<string | undefined>(undefined);
  const titleId = useSignal<string | undefined>(undefined);
  const descriptionId = useSignal<string | undefined>(undefined);

  useTask$(() => {
    if (isServer && isDev && isOpen.value) {
      throw Error('[qwik-primitives]: Popover component can not be open during SSR');
    }
  });

  useContextProvider(PopoverContext, {
    isOpen,
    setIsOpen$,
    topLayerId,
    triggerRef,
    anchorRef,
    contentId,
    titleId,
    descriptionId,
  });

  return (
    <>
      <Slot />
    </>
  );
});
