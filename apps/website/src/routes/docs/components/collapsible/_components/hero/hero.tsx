import { component$ } from '@builder.io/qwik';
import { Heading } from '@/ui/heading';
import { Text } from '@/ui/text';
import { CodePresentation } from '@/components/code-presentation';
import { CollapsibleDemo } from '@/demos/components/collapsible-demo';
import tsxCode from '@/demos/components/collapsible-demo/collapsible-demo.tsx?raw';
import cssCode from '@/demos/components/collapsible-demo/styles.css?raw';

const CodePresentationComponent = component$(() => {
  return (
    <div class="-py-24 relative min-h-[13.75rem] w-[18.75rem]">
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <CollapsibleDemo />
      </div>
    </div>
  );
});

export const Hero = component$(() => {
  return (
    <>
      <Heading.Root size="8">Collapsible</Heading.Root>
      <Text.Root size="4" highContrast={false} class="mt-2">
        An interactive component which expands/collapses a panel.
      </Text.Root>

      <CodePresentation
        component={CodePresentationComponent}
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
