import type { CollapsibleRootProps } from './collapsible-root.types';
import { component$, useComputed$, useSignal, useContextProvider, Slot } from '@builder.io/qwik';
import { useControllableState } from '@/hooks/use-controllable-state';
import { CollapsibleContext } from '../collapsible-context';

/**
 * Contains all the parts of a collapsible.
 * This component is based on the `div` element.
 */
export const CollapsibleRoot = component$<CollapsibleRootProps>((props) => {
  const { as, defaultOpen, open, onOpenChange$, disabled, ...others } = props;

  const [isOpen, setIsOpen$] = useControllableState({
    uncontrolledValue: defaultOpen,
    controlledSignal: open,
    finalValue: false,
    onChange$: onOpenChange$,
  });

  const state = useComputed$(() => (isOpen.value ? 'open' : 'closed'));
  const isDisabled = useComputed$(() => disabled);

  const isPanelHide = useSignal(!isOpen.value);
  const panelStatus = useSignal<'open' | 'closed' | 'indeterminate'>(isOpen.value ? 'open' : 'closed');
  const panelId = useSignal<string | undefined>(undefined);

  useContextProvider(CollapsibleContext, { isOpen, setIsOpen$, isDisabled, isPanelHide, panelStatus, panelId });

  const Component = as || 'div';

  return (
    <Component
      data-qwik-primitives-collapsible-root=""
      data-scope="collapsible"
      data-part="root"
      data-state={state.value}
      data-disabled={isDisabled.value ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
