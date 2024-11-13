import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';

export const InitialFocus = component$(() => {
  return (
    <>
      <HeadingLink.Root id="initial-focus" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Initial focus
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        By default, when the component is opened, focus is programmatically moved to{' '}
        <Code.Root size="3">AlertDialog.Cancel</Code.Root> to anticipate a response to the prompt. When{' '}
        <Code.Root size="3">AlertDialog.Cancel</Code.Root> not exist or is disabled the focus will be move focus on the
        first focusable element. To specify the element that should receive initial focus, add{' '}
        <Code.Root size="3">data-qwik-primitives-auto-focus</Code.Root> attribute on this element.
      </Text.Root>

      <CodeBlock
        type="single"
        code={tsxCode}
        language="tsx"
        lines={['17']}
        words={['data-qwik-primitives-auto-focus']}
        class="mt-6"
      />
    </>
  );
});
