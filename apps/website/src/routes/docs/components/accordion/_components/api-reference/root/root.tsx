import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { Link } from '@/ui/link';
import { ComponentProps } from '@/components/component-props';
import { ComponentsDataAttrs } from '@/components/components-data-attrs';

export const Root = component$(() => {
  return (
    <>
      <HeadingLink.Root id="root" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Root
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        Contains all the parts of an accordion. This component is based on the <Code.Root size="3">div</Code.Root>{' '}
        element.
      </Text.Root>

      <HeadingLink.Root id="root-props" level="4" size="3" class="mt-8 scroll-m-16">
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
            propName: 'type',
            propDescription: (
              <Text.Root size="2">Determines whether one or multiple items can be opened at the same time.</Text.Root>
            ),
            propRequired: true,
            typeValue: 'enum',
            typeDescription: (
              <Code.Root size="2" color="default">
                {'"single" | "multiple"'}
              </Code.Root>
            ),
            defaultValue: '',
          },
          {
            propName: 'defaultValue',
            propDescription: (
              <Text.Root size="2">
                The value of the item to expand when initially rendered and <Code.Root size="2">type</Code.Root> is{' '}
                <Code.Root size="2">"single"</Code.Root>. Use when you do not need to control the state of the items.
              </Text.Root>
            ),
            typeValue: 'string',
            defaultValue: '',
          },
          {
            propName: 'value',
            propDescription: (
              <Text.Root size="2">
                The controlled value of the item to expand when <Code.Root size="2">type</Code.Root> is{' '}
                <Code.Root size="2">"single"</Code.Root>. Must be used in conjunction with{' '}
                <Code.Root size="2">onValueChange$</Code.Root>.
              </Text.Root>
            ),
            typeValue: 'Signal',
            typeDescription: (
              <Code.Root size="2" color="default">
                {'Signal<string>'}
              </Code.Root>
            ),
            defaultValue: '',
          },
          {
            propName: 'onValueChange$	',
            propDescription: (
              <Text.Root size="2">
                Event handler called when the expanded state of an item changes and <Code.Root size="2">type</Code.Root>{' '}
                is <Code.Root size="2">"single"</Code.Root>.
              </Text.Root>
            ),
            typeValue: 'QRL',
            typeDescription: (
              <Code.Root size="2" color="default">
                {'QRL<(value: string) => void>'}
              </Code.Root>
            ),
            defaultValue: '',
          },
          {
            propName: 'defaultValue',
            propDescription: (
              <Text.Root size="2">
                The value of the item to expand when initially rendered and <Code.Root size="2">type</Code.Root> is{' '}
                <Code.Root size="2">"multiple"</Code.Root>. Use when you do not need to control the state of the items.
              </Text.Root>
            ),
            typeValue: 'string[]',
            defaultValue: '',
          },
          {
            propName: 'value',
            propDescription: (
              <Text.Root size="2">
                The controlled value of the item to expand when <Code.Root size="2">type</Code.Root> is{' '}
                <Code.Root size="2">"multiple"</Code.Root>. Must be used in conjunction with{' '}
                <Code.Root size="2">onValueChange$</Code.Root>.
              </Text.Root>
            ),
            typeValue: 'Signal',
            typeDescription: (
              <Code.Root size="2" color="default">
                {'Signal<string[]>'}
              </Code.Root>
            ),
            defaultValue: '',
          },
          {
            propName: 'onValueChange$	',
            propDescription: (
              <Text.Root size="2">
                Event handler called when the expanded state of an item changes and <Code.Root size="2">type</Code.Root>{' '}
                is <Code.Root size="2">"multiple"</Code.Root>.
              </Text.Root>
            ),
            typeValue: 'QRL',
            typeDescription: (
              <Code.Root size="2" color="default">
                {'QRL<(value: string[]) => void>'}
              </Code.Root>
            ),
            defaultValue: '',
          },
          {
            propName: 'collapsible',
            propDescription: (
              <Text.Root size="2">
                When <Code.Root size="2">type</Code.Root> is <Code.Root size="2">"single"</Code.Root>, allows closing
                content when clicking trigger for an open item.
              </Text.Root>
            ),
            typeValue: 'boolean',
            defaultValue: '',
          },
          {
            propName: 'disabled',
            propDescription: (
              <Text.Root size="2">
                When <Code.Root size="2">true</Code.Root>, prevents the user from interacting with the accordion and all
                its items.
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

      <HeadingLink.Root id="root-data-attributes" level="4" size="3" class="mt-8 scroll-m-16">
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
            values: '"root"',
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
