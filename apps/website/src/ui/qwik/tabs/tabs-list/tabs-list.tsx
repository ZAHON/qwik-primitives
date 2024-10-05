import type { TabsListProps } from './tabs-list.types';
import { component$, Slot } from '@builder.io/qwik';
import { Tabs } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { tabsListStyles } from './tabs-list.styles';

export const TabsList = component$<TabsListProps>((props) => {
  const { class: className, ...others } = props;

  return (
    <Tabs.List class={twm(tabsListStyles(), className)} {...others}>
      <Slot />
    </Tabs.List>
  );
});
