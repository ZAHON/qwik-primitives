import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';

export const Anatomy = component$(() => {
  return (
    <>
      <HeadingLink.Root id="anatomy" level="2" size="6" class="mt-12 scroll-m-16">
        <HeadingLink.Content>
          Anatomy
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">Import the component and piece the parts together.</Text.Root>

      <CodeBlock type="single" code={tsxCode} language="tsx" class="mt-6" />
    </>
  );
});
