import type { CodePresentationTabsTriggerProps } from './code-presentation-tabs-trigger.types';
import { component$, Slot } from '@builder.io/qwik';
import { Tabs } from '@/ui/qwik/tabs';

export const CodePresentationTabsTrigger = component$<CodePresentationTabsTriggerProps>((props) => {
  return (
    <Tabs.Trigger {...props}>
      <Tabs.TriggerContent>
        <Slot />
      </Tabs.TriggerContent>
    </Tabs.Trigger>
  );
});
