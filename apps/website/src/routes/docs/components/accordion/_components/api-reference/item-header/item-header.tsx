import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { Link } from '@/ui/link';
import { ComponentProps } from '@/components/component-props';
import { ComponentsDataAttrs } from '@/components/components-data-attrs';

export const ItemHeader = component$(() => {
  return (
    <>
      <HeadingLink.Root id="item-header" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          ItemHeader
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        Wraps an <Code.Root size="3">Accordion.ItemTrigger</Code.Root>. Use the <Code.Root size="3">level</Code.Root>{' '}
        prop to update it to the appropriate heading level for your page. This component is based on the{' '}
        <Code.Root size="3">h3</Code.Root> element.
      </Text.Root>

      <HeadingLink.Root id="item-header-props" level="4" size="3" class="mt-8 scroll-m-16">
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
              <Text.Root size="2">The level of the heading, determines which tag will be used (h1-h6).</Text.Root>
            ),
            typeValue: 'enum',
            typeDescription: (
              <Code.Root size="2" color="default">
                {`"1" | "2" | "3" | "4" | "5" | "6"`}
              </Code.Root>
            ),
            defaultValue: '"3"',
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

      <HeadingLink.Root id="item-header-data-attributes" level="4" size="3" class="mt-8 scroll-m-16">
        <HeadingLink.Content>
          Data attributes
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <ComponentsDataAttrs
        data={[
          {
            name: '[data-scope]',
            values: '"accordion"',
          },
          {
            name: '[data-part]',
            values: '"item-header"',
          },
          {
            name: '[data-state]',
            values: '"open" | "closed"',
          },
          {
            name: '[data-level]',
            values: '"1" | "2" | "3" | "4" | "5" | "6"',
          },
          {
            name: '[data-disabled]',
            values: <Text.Root size="2">Present when disabled</Text.Root>,
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
