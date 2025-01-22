import type { SpoilerRootProps } from './spoiler-root.types';
import { component$, useComputed$, useSignal, useContextProvider, Slot } from '@builder.io/qwik';
import { useControllableState } from '@/hooks/use-controllable-state';
import { SpoilerContext } from '../spoiler-context';

/**
 * Contains all the parts of a spoiler.
 * This component is based on the `div` element.
 */
export const SpoilerRoot = component$<SpoilerRootProps>((props) => {
  const { as, defaultOpen, open, onOpenChange$, disabled, ...others } = props;

  const [isOpen, setIsOpen$] = useControllableState({
    uncontrolledValue: defaultOpen,
    controlledSignal: open,
    finalValue: false,
    onChange$: onOpenChange$,
  });

  const state = useComputed$(() => (isOpen.value ? 'open' : 'closed'));

  const panelId = useSignal<string | undefined>(undefined);
  const contentHeight = useSignal<number | undefined>(undefined);

  useContextProvider(SpoilerContext, { isOpen, setIsOpen$, panelId, contentHeight, disabled });

  const Component = as || 'div';

  return (
    <Component
      data-qwik-primitives-spoiler-root=""
      data-scope="spoiler"
      data-part="root"
      data-state={state.value}
      data-disabled={disabled ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
