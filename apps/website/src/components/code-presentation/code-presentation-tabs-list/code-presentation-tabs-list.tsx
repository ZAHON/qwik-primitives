import { component$, Slot } from '@builder.io/qwik';
import { Tabs } from '@/ui/qwik/tabs';
import { codePresentationTabsListStyles } from './code-presentation-tabs-list.styles';

export const CodePresentationTabsList = component$(() => {
  return (
    <Tabs.List class={codePresentationTabsListStyles()}>
      <Slot />
    </Tabs.List>
  );
});
