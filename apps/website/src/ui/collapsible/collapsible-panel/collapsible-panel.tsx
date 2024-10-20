import type { CollapsiblePanelProps } from './collapsible-panel.types';
import { component$, Slot } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { collapsiblePanelStyles } from './collapsible-panel.styles';

/**
 * The panel that expands/collapses.
 * This component is based on the `div` element.
 */
export const CollapsiblePanel = component$<CollapsiblePanelProps>((props) => {
  const { class: className, ...others } = props;

  return (
    <Collapsible.Panel class={twm(collapsiblePanelStyles(), className)} {...others}>
      <Slot />
    </Collapsible.Panel>
  );
});
