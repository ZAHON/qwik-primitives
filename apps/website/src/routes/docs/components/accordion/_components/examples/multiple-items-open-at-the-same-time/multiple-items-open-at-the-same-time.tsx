import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';

export const MultipleItemsOpenAtTheSameTime = component$(() => {
  return (
    <>
      <HeadingLink.Root id="multiple-items-open-at-the-same-time" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Multiple items open at the same time
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        Set the <Code.Root size="3">type</Code.Root> prop to <Code.Root size="3">"multiple"</Code.Root> to enable
        opening multiple items at once.
      </Text.Root>

      <CodeBlock type="single" code={tsxCode} language="tsx" lines={['6']} words={['type']} class="mt-6" />
    </>
  );
});
