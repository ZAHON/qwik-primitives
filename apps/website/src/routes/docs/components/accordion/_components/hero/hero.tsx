import { component$ } from '@builder.io/qwik';
import { Heading } from '@/ui/heading';
import { Text } from '@/ui/text';
import { CodePresentation } from '@/components/code-presentation';
import { AccordionDemo } from '@/demos/components/accordion-demo';
import tsxCode from '@/demos/components/accordion-demo/accordion-demo.tsx?raw';
import cssCode from '@/demos/components/accordion-demo/styles.css?raw';

export const Hero = component$(() => {
  return (
    <>
      <Heading.Root size="8">Accordion</Heading.Root>
      <Text.Root size="4" highContrast={false} class="mt-2">
        A vertically stacked set of interactive headings that each reveal an associated section of content.
      </Text.Root>

      <CodePresentation
        component={AccordionDemo}
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
