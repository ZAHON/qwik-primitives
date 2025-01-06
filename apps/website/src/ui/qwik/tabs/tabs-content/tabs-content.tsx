import type { TabsContentProps } from './tabs-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Tabs } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { tabsContentStyles } from './tabs-content.styles';
import { TabsContext } from '../tabs-context';

/**
 * Contains the content associated with each trigger.
 * This component is based on the `div` element.
 */
export const TabsContent = component$<TabsContentProps>((props) => {
  const { class: className, ...others } = props;

  const { color } = useContext(TabsContext);

  return (
    <Tabs.Content class={twm(tabsContentStyles({ color }), className)} {...others}>
      <Slot />
    </Tabs.Content>
  );
});
