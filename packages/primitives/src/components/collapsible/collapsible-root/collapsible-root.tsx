import type { CollapsibleRootProps } from './collapsible-root.types';
import { component$, useId, useSignal, useTask$, useContextProvider, Slot } from '@builder.io/qwik';
import { useControllableState } from '@/hooks/use-controllable-state';
import { CollapsibleContext } from '../collapsible-context';

export const CollapsibleRoot = component$<CollapsibleRootProps>((props) => {
  const { defaultOpen, open, onOpenChange$, disabled, ...others } = props;

  const id = useId();
  const isOpen = useControllableState({ defaultProp: defaultOpen, prop: open, finalProp: false });
  const isContentHide = useSignal(!isOpen.value);

  useTask$(({ track }) => {
    track(() => isOpen.value);
    if (onOpenChange$) onOpenChange$(isOpen.value);
  });

  const panelId = `collapsible-panel-${id}`;

  useContextProvider(CollapsibleContext, { isOpen, isContentHide, disabled, panelId });

  return (
    <div data-state={isOpen.value ? 'open' : 'closed'} data-disabled={disabled ? '' : undefined} {...others}>
      <Slot />
    </div>
  );
});
