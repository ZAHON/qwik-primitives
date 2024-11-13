import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';
import cssCode from './css-code.css?raw';

export const StyleTheOverlay = component$(() => {
  return (
    <>
      <HeadingLink.Root id="style-the-overlay" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Style the overlay
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        Use the <Code.Root size="3">::backdrop</Code.Root> CSS pseudo-element to style{' '}
        <Code.Root size="3">AlertDialog.Content</Code.Root> component overlay. The overlay can also be animated. Firefox
        currently does not support backdrop animations. The fallback for browsers that do not support animated backdrops
        is the same as a non-animated backdrop.
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
