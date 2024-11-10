import { component$ } from '@builder.io/qwik';
import { Heading } from '@/ui/heading';
import { Text } from '@/ui/text';
import { Callout } from '@/ui/callout';
import { Link } from '@/ui/link';
import { Code } from '@/ui/code';
import { ExclamationTriangleIcon } from '@/icons/exclamation-triangle-icon';
import { CodePresentation } from '@/components/code-presentation';
import { AvatarDemo } from '@/demos/components/avatar-demo';
import tsxCode from '@/demos/components/avatar-demo/avatar-demo.tsx?raw';
import cssCode from '@/demos/components/avatar-demo/styles.css?raw';

export const Hero = component$(() => {
  return (
    <>
      <Heading.Root size="8">Avatar</Heading.Root>
      <Text.Root size="4" highContrast={false} class="mt-2">
        An image element with a fallback for representing the user.
      </Text.Root>

      <Callout.Root color="danger" class="mt-6">
        <Callout.Icon>
          <ExclamationTriangleIcon height={14} width={14} />
        </Callout.Icon>
        <Callout.Text>
          This coponent uses the{' '}
          <Link.Root
            href="https://qwik.dev/docs/components/tasks/#usevisibletask"
            external={true}
            openInNewTab={true}
            color="danger"
          >
            <Code.Root size="2" color="danger">
              useVisibleTask$()
            </Code.Root>
          </Link.Root>{' '}
          hook that eagerly executes code on the client by default when the component becomes visible. You can use{' '}
          <Link.Root href="#root" color="danger">
            <Code.Root size="2" color="danger">
              strategy
            </Code.Root>
          </Link.Root>{' '}
          prop to determine when the{' '}
          <Code.Root size="2" color="danger">
            VisibleTask
          </Code.Root>{' '}
          should first execute.
        </Callout.Text>
      </Callout.Root>

      <CodePresentation
        component={AvatarDemo}
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
