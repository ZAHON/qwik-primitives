import { component$ } from '@builder.io/qwik';
import { Heading } from '@/ui/heading';
import { Text } from '@/ui/text';
import { CodePresentation } from '@/components/code-presentation';
import { AlertDialogDemo } from '@/demos/components/alert-dialog-demo';
import tsxCode from '@/demos/components/alert-dialog-demo/alert-dialog-demo.tsx?raw';
import cssCode from '@/demos/components/alert-dialog-demo/styles.css?raw';

export const Hero = component$(() => {
  return (
    <>
      <Heading.Root size="8">Alert Dialog</Heading.Root>
      <Text.Root size="4" highContrast={false} class="mt-2">
        A modal dialog that interrupts the user with important content and expects a response.
      </Text.Root>

      <CodePresentation
        component={AlertDialogDemo}
        type="tabs"
        defaultValue="index.tsx"
        codes={[
          { tab: 'index.tsx', code: tsxCode, language: 'tsx' },
          { tab: 'styles.css', code: cssCode, language: 'css' },
        ]}
        class="mt-10"
      />
    </>
  );
});
