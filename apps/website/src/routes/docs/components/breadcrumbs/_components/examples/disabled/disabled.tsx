import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';

export const Disabled = component$(() => {
  return (
    <>
      <HeadingLink.Root id="disabled" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Disabled
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        Use the <Code.Root size="3">disabled</Code.Root> prop on <Code.Root size="3">Breadcrumbs.Root</Code.Root> to
        disable all links while keeping it accessible for screen readers.
      </Text.Root>

      <CodeBlock type="single" code={tsxCode} language="tsx" lines={['6']} words={['disabled']} class="mt-6" />
    </>
  );
});
