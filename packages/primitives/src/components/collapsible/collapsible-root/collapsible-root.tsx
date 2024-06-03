import type { CollapsibleRootProps } from './collapsible-root.types';
import { component$, useId, useSignal, useTask$, useContextProvider, Slot } from '@builder.io/qwik';
import { useControllableState } from '@/hooks/use-controllable-state';
import { CollapsibleContext } from '../collapsible-context';

/**
 * Contains all the parts of a collapsible.
 * This component is based on the `div` element.
 */
export const CollapsibleRoot = component$<CollapsibleRootProps>((props) => {
  const { defaultOpen, open, onOpenChange$, disabled, ...others } = props;

  const id = useId();
  const isOpen = useControllableState({ uncontrolledValue: defaultOpen, controlledSignal: open, finalValue: false });
  const isPanelHide = useSignal(!isOpen.value);

  useTask$(({ track }) => {
    track(() => isOpen.value);
    if (onOpenChange$) onOpenChange$(isOpen.value);
  });

  const panelId = `collapsible-panel-${id}`;

  useContextProvider(CollapsibleContext, { isOpen, isPanelHide, panelId, disabled });

  return (
    <div data-state={isOpen.value ? 'open' : 'closed'} data-disabled={disabled ? '' : undefined} {...others}>
      <Slot />
    </div>
  );
});
