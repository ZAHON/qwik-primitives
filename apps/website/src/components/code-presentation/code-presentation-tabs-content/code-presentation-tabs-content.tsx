import type { CodePresentationTabsContentProps } from './code-presentation-tabs-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { Tabs } from '@/ui/qwik/tabs';

export const CodePresentationTabsContent = component$<CodePresentationTabsContentProps>((props) => {
  return (
    <Tabs.Content tabIndex={undefined} {...props}>
      <Slot />
    </Tabs.Content>
  );
});
