import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';
import cssCode from './css-code.css?raw';

export const Animations = component$(() => {
  return (
    <>
      <HeadingLink.Root id="animations" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Animations
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        Use <Code.Root size="3">data-state</Code.Root> attribute to provide animations for the{' '}
        <Code.Root size="3">AlertDialog.Content</Code.Root> component when alert dialog it opens/closes.
      </Text.Root>

      <CodeBlock
        type="tabs"
        defaultValue="index.tsx"
        codes={[
          {
            tab: 'index.tsx',
            code: tsxCode,
            language: 'tsx',
            lines: ['11'],
            words: ['class'],
          },
          {
            tab: 'styles.css',
            code: cssCode,
            language: 'css',
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
