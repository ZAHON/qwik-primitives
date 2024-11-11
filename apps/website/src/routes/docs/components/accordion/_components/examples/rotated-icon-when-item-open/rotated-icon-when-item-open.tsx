import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';
import cssCode from './css-code.css?raw';

export const RotatedIconWhenItemOpen = component$(() => {
  return (
    <>
      <HeadingLink.Root id="rotated-icon-when-item-open" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Rotated icon when item open
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        You can nest inside of an <Code.Root size="3">Accordion.ItemIndicator</Code.Root> extra decorative elements,
        such as chevrons, and rotate it when the item is open.
      </Text.Root>

      <CodeBlock
        type="tabs"
        defaultValue="index.tsx"
        codes={[
          {
            tab: 'index.tsx',
            code: tsxCode,
            language: 'tsx',
            lines: ['37-39', '51-53', '65-67'],
            words: ['class'],
          },
          { tab: 'styles.css', code: cssCode, language: 'css' },
        ]}
        class="mt-6"
      />
    </>
  );
});
