import type { TabsTriggerProps } from './tabs-trigger.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Tabs } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { tabsTriggerStyles } from './tabs-trigger.styles';
import { TabsContext } from '../tabs-context';

/**
 * The button that activates its associated content.
 * This component is based on the `button` element.
 */
export const TabsTrigger = component$<TabsTriggerProps>((props) => {
  const { class: className, ...others } = props;

  const { size, color, highContrast } = useContext(TabsContext);

  return (
    <Tabs.Trigger class={twm(tabsTriggerStyles({ size, color, highContrast }), className)} {...others}>
      <Slot />
    </Tabs.Trigger>
  );
});
