import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';

export const AllowCollapsingAllItems = component$(() => {
  return (
    <>
      <HeadingLink.Root id="allow-collapsing-all-items" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Allow collapsing all items
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        Use the <Code.Root size="3">collapsible</Code.Root> prop to allow all items to close.
      </Text.Root>

      <CodeBlock type="single" code={tsxCode} language="tsx" lines={['6']} words={['collapsible']} class="mt-6" />
    </>
  );
});
