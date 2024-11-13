import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { CodeBlock } from '@/components/code-block';
import tsxCode from './tsx-code.tsx?raw';

export const RestoreFocus = component$(() => {
  return (
    <>
      <HeadingLink.Root id="restore-focus" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Restore focus
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        By default, focus will be restore back to the <Code.Root size="3">AlertDialog.Trigger</Code.Root> when the alert
        dialog is closed. To specify the element that should receive focus after close alert dialog pass{' '}
        <Code.Root size="3">{`restoreFocus={false}`}</Code.Root> on <Code.Root size="3">AlertDialog.Content</Code.Root>{' '}
        component. You must also implement how you want and witch element should recive focus after deativate. Below you
        have example implementation.
      </Text.Root>

      <CodeBlock
        type="single"
        code={tsxCode}
        lines={['24']}
        words={['restoreFocus={false}']}
        language="tsx"
        class="mt-6"
      />
    </>
  );
});
