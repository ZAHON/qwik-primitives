import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';

export const ExpandedByDefault = component$(() => {
  return (
    <>
      <HeadingLink.Root id="expanded-by-default" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Expanded by default
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        Use the <Code.Root size="3">defaultValue</Code.Root> prop to define the open item by default.
      </Text.Root>

      <CodeBlock type="single" code={tsxCode} language="tsx" lines={['6']} words={['defaultValue']} class="mt-6" />
    </>
  );
});
