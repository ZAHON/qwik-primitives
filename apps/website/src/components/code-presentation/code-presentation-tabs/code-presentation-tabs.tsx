import { component$, useContext, $, Slot } from '@builder.io/qwik';
import { Tabs } from '@/ui/qwik/tabs';
import { codePresentationTabsStyles } from './code-presentation-tabs.styles';
import { CodePresentationContext } from '../code-presentation-context';

export const CodePresentationTabs = component$(() => {
  const { tabsValue } = useContext(CodePresentationContext);

  const handleValueChange$ = $((value: string) => {
    tabsValue.value = value as typeof tabsValue.value;
  });

  return (
    <Tabs.Root value={tabsValue} onValueChange$={handleValueChange$} class={codePresentationTabsStyles()}>
      <Slot />
    </Tabs.Root>
  );
});
