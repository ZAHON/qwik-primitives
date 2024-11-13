import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { Link } from '@/ui/link';
import { ComponentProps } from '@/components/component-props';
import { ComponentsDataAttrs } from '@/components/components-data-attrs';

export const Title = component$(() => {
  return (
    <>
      <HeadingLink.Root id="title" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Title
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        An accessible title to be announced when the alert dialog is opened. This component is based on the{' '}
        <Code.Root size="3">h2</Code.Root> element.
      </Text.Root>

      <HeadingLink.Root id="title-props" level="4" size="3" class="mt-8 scroll-m-16">
        <HeadingLink.Content>
          Props
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <ComponentProps
        data={[
          {
            propName: 'as',
            propDescription: (
              <>
                <Text.Root size="2">
                  Change the default rendered element for the one passed as, merging their props and behavior.
                </Text.Root>
                <Text.Root size="2" class="mt-4">
                  Read our{' '}
                  <Link.Root href="/docs/guides/composition" size="2" openInNewTab={true}>
                    Composition
                  </Link.Root>{' '}
                  guide for more details.
                </Text.Root>
              </>
            ),
            typeValue: 'FunctionComponent',
            defaultValue: '',
          },
          {
            propName: 'level',
            propDescription: (
              <Text.Root size="2">The level of the title, determines which tag will be used (h1-h6).</Text.Root>
            ),
            typeValue: 'enum',
            typeDescription: (
              <Code.Root size="2" color="default">
                "1" | "2" | "3" | "4" | "5" | "6"
              </Code.Root>
            ),
            defaultValue: '"2"',
          },
          {
            propName: 'visuallyHidden',
            propDescription: (
              <Text.Root size="2">
                When <Code.Root size="2">true</Code.Root>, title will be hide from the screen in an accessible way.
              </Text.Root>
            ),
            typeValue: 'boolean',
            defaultValue: '',
          },
          {
            propName: 'style',
            propDescription: <Text.Root size="2">The inline style for the element.</Text.Root>,
            typeValue: 'CSSProperties',
            defaultValue: '',
          },
        ]}
        class="mt-6"
      />

      <HeadingLink.Root id="title-data-attributes" level="4" size="3" class="mt-8 scroll-m-16">
        <HeadingLink.Content>
          Data attributes
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <ComponentsDataAttrs
        data={[
          {
            name: '[data-scope]',
            values: '"alert-dialog"',
          },
          {
            name: '[data-part]',
            values: '"title"',
          },
          {
            name: '[data-level]',
            values: '"1" | "2" | "3" | "4" | "5" | "6"',
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
