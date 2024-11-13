import { component$ } from '@builder.io/qwik';
import { Heading } from '@/ui/heading';
import { Text } from '@/ui/text';
import { CodePresentation } from '@/components/code-presentation';
import { BreadcrumbsDemo } from '@/demos/components/breadcrumbs-demo';
import tsxCode from '@/demos/components/breadcrumbs-demo/breadcrumbs-demo.tsx?raw';
import cssCode from '@/demos/components/breadcrumbs-demo/styles.css?raw';

export const Hero = component$(() => {
  return (
    <>
      <Heading.Root size="8">Breadcrumbs</Heading.Root>
      <Text.Root size="4" highContrast={false} class="mt-2">
        Show hierarchy and navigational context for a user's location within an application.
      </Text.Root>

      <CodePresentation
        component={BreadcrumbsDemo}
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
