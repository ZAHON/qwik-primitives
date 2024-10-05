import type { TabsRootProps } from './tabs-root.types';
import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { Tabs } from 'qwik-primitives';
import { TabsContext } from '../tabs-context';

export const TabsRoot = component$<TabsRootProps>((props) => {
  const { size = '2', color = 'primary', highContrast = false, ...others } = props;

  useContextProvider(TabsContext, { size, color, highContrast });

  return (
    <Tabs.Root {...others}>
      <Slot />
    </Tabs.Root>
  );
});
