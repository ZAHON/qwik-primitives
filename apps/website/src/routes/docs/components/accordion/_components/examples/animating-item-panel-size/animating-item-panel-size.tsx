import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';
import cssCode from './css-code.css?raw';

export const AnimatingItemPanelSize = component$(() => {
  return (
    <>
      <HeadingLink.Root id="animating-item-panel-size" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Animating item panel size
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        Use the <Code.Root size="3">grid-template-rows</Code.Root> CSS property with <Code.Root size="3">0fr</Code.Root>{' '}
        or <Code.Root size="3">1fr</Code.Root> value to animate the size of the item panel when it opens/closes.
      </Text.Root>

      <CodeBlock
        type="tabs"
        defaultValue="index.tsx"
        codes={[
          {
            tab: 'index.tsx',
            code: tsxCode,
            language: 'tsx',
            lines: ['14', '23', '32'],
            words: ['class'],
          },
          {
            tab: 'styles.css',
            code: cssCode,
            language: 'css',
            lines: ['11', '14', '20', '23'],
            words: ['grid-template-rows', '0fr', '1fr'],
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
