import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';

export const AvoidFlashDuringLoading = component$(() => {
  return (
    <>
      <HeadingLink.Root id="avoid-flash-during-loading" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Avoid flash during loading
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        By default <Code.Root size="3">Avatar.Fallback</Code.Root> will render when the image hasn't loaded. This means
        whilst it's loading, or if there was an error.
      </Text.Root>
      <Text.Root class="mt-4">
        If you notice a flash during loading, use the <Code.Root size="3">delayMs</Code.Root> prop to delay its
        rendering, so it only renders for those with slower internet connections.
      </Text.Root>

      <CodeBlock type="single" code={tsxCode} language="tsx" lines={['11']} words={['delayMs']} class="mt-6" />
    </>
  );
});
