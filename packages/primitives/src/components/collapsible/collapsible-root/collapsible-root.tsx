import type { CollapsibleRootProps } from './collapsible-root.types';
import { component$, useSignal, useContextProvider, Slot } from '@builder.io/qwik';
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

  const isPanelHide = useSignal(!isOpen.value);
  const panelStatus = useSignal<'open' | 'closed' | 'indeterminate'>(isOpen.value ? 'open' : 'closed');
  const panelId = useSignal<string | undefined>(undefined);

  useContextProvider(CollapsibleContext, { isOpen, setIsOpen$, isPanelHide, panelStatus, panelId, disabled });

  const Component = as || 'div';

  return (
    <Component
      data-qwik-primitives-collapsible-root=""
      data-scope="collapsible"
      data-part="root"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={disabled ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
