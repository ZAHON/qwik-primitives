import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';

export const InitiallyOpen = component$(() => {
  return (
    <>
      <HeadingLink.Root id="initially-open" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Initially open
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        The <Code.Root size="3">AlertDialog.Content</Code.Root> component is based on HTML{' '}
        <Code.Root size="3">dialog</Code.Root> element. Opening or closing this component is only possible in the
        browser. There is no way to do it on the server side. For this reason, to get the effect of an initially opened
        Alert dialog, you need to use <Code.Root size="3">useVisibleTask$</Code.Root>.
      </Text.Root>

      <CodeBlock type="single" code={tsxCode} language="tsx" lines={['5', '8-13', '16']} class="mt-6" />
    </>
  );
});
