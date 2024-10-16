import type { TabsListProps } from './tabs-list.types';
import { component$, Slot } from '@builder.io/qwik';
import { Tabs } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { tabsListStyles } from './tabs-list.styles';

/**
 * Contains the triggers that are aligned along the edge of the active content.
 * This component is based on the `div` element.
 */
export const TabsList = component$<TabsListProps>((props) => {
  const { justify = 'start', class: className, ...others } = props;

  return (
    <Tabs.List class={twm(tabsListStyles({ justify }), className)} {...others}>
      <Slot />
    </Tabs.List>
  );
});
