import { component$ } from '@builder.io/qwik';
import { Heading } from '@/ui/heading';
import { Text } from '@/ui/text';
import { CodePresentation } from '@/components/code-presentation';
import { AlertDemo } from '@/demos/components/alert-demo';
import tsxCode from '@/demos/components/alert-demo/alert-demo.tsx?raw';
import cssCode from '@/demos/components/alert-demo/styles.css?raw';

export const Hero = component$(() => {
  return (
    <>
      <Heading.Root size="8">Alert</Heading.Root>
      <Text.Root size="4" highContrast={false} class="mt-2">
        Display a brief, important message in a way that attracts the user's attention without interrupting the user's
        task.
      </Text.Root>

      <CodePresentation
        component={AlertDemo}
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
