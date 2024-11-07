import type { CodeBlockTabsProps } from './code-block-tabs.types';
import { component$ } from '@builder.io/qwik';
import { Tabs } from '@/ui/tabs';
import { SyntaxHighlighter } from '@/components/syntax-highlighter';

export const CodeBlockTabs = component$<CodeBlockTabsProps>((props) => {
  const { defaultValue, codes } = props;

  const tabs = codes.map(({ tab }) => tab);

  return (
    <>
      <Tabs.Root defaultValue={defaultValue}>
        <Tabs.List class="bg-default-alpha-2">
          {tabs.map((tab) => (
            <Tabs.Trigger key={tab} value={tab}>
              <Tabs.TriggerContent>{tab}</Tabs.TriggerContent>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {codes.map(({ tab, code, withCopyButton = true, ...others }) => (
          <Tabs.Content key={tab} value={tab} tabIndex={undefined}>
            <SyntaxHighlighter code={code} withCopyButton={withCopyButton} {...others} />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </>
  );
});
