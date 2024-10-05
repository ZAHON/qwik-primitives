import type { TabsContentProps } from './tabs-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { Tabs } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { tabsContentStyles } from './tabs-content.styles';

export const TabsContent = component$<TabsContentProps>((props) => {
  const { class: className, ...others } = props;

  return (
    <Tabs.Content class={twm(tabsContentStyles(), className)} {...others}>
      <Slot />
    </Tabs.Content>
  );
});
