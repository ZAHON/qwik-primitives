import type { CollapsibleRootProps } from './collapsible-root.types';
import { component$, useId, useSignal, useTask$, useContextProvider, Slot } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import { useControllableState } from '@/hooks/use-controllable-state';
import { CollapsibleContext } from '../collapsible-context';

/**
 * Contains all the parts of a collapsible.
 * This component is based on the `div` element.
 */
export const CollapsibleRoot = component$<CollapsibleRootProps>((props) => {
  const { as, defaultOpen, open, onOpenChange$, disabled, ...others } = props;

  const id = useId();
  const isOpen = useControllableState({ uncontrolledValue: defaultOpen, controlledSignal: open, finalValue: false });
  const isPanelHide = useSignal(!isOpen.value);
  const panelStatus = useSignal<'open' | 'closed' | 'indeterminate'>(isOpen.value ? 'open' : 'closed');

  useTask$(({ track }) => {
    track(() => isOpen.value);
    if (isServer) return;
    if (onOpenChange$) onOpenChange$(isOpen.value);
  });

  const panelId = `collapsible-panel-${id}`;

  useContextProvider(CollapsibleContext, { isOpen, isPanelHide, panelStatus, panelId, disabled });

  const Component = as || 'div';

  return (
    <Component data-state={isOpen.value ? 'open' : 'closed'} data-disabled={disabled ? '' : undefined} {...others}>
      <Slot />
    </Component>
  );
});
