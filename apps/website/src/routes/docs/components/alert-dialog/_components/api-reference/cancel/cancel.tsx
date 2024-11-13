import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { Link } from '@/ui/link';
import { ComponentProps } from '@/components/component-props';
import { ComponentsDataAttrs } from '@/components/components-data-attrs';

export const Cancel = component$(() => {
  return (
    <>
      <HeadingLink.Root id="cancel" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Cancel
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        A button that closes the alert dialog. This button should be distinguished visually from{' '}
        <Code.Root size="3">AlertDialog.Action</Code.Root> buttons. This component is based on the{' '}
        <Code.Root size="3">button</Code.Root> element.
      </Text.Root>

      <HeadingLink.Root id="cancel-props" level="4" size="3" class="mt-8 scroll-m-16">
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
            propName: 'disabled',
            propDescription: (
              <Text.Root size="2">
                When <Code.Root size="2">true</Code.Root>, prevents the user from interacting with the component.
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

      <HeadingLink.Root id="cancel-data-attributes" level="4" size="3" class="mt-8 scroll-m-16">
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
            values: '"cancel"',
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
