import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { Link as UILink } from '@/ui/link';
import { ComponentProps } from '@/components/component-props';
import { ComponentsDataAttrs } from '@/components/components-data-attrs';

export const Link = component$(() => {
  return (
    <>
      <HeadingLink.Root id="link" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Link
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        A breadcrumbs link. Should be nested inside <Code.Root size="3">Breadcrumbs.Item</Code.Root>. This component is
        based on the <Code.Root size="3">a</Code.Root> element.
      </Text.Root>

      <HeadingLink.Root id="link-props" level="4" size="3" class="mt-8 scroll-m-16">
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
                  <UILink.Root href="/docs/guides/composition" size="2" openInNewTab={true}>
                    Composition
                  </UILink.Root>{' '}
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
                Whether the link is disabled. Native navigation will be disabled, and the link will be exposed as
                disabled to assistive technology.
              </Text.Root>
            ),
            typeValue: 'boolean',
            defaultValue: '',
          },
          {
            propName: 'href',
            propDescription: <Text.Root size="2">A URL to link to.</Text.Root>,
            typeValue: 'string',
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

      <HeadingLink.Root id="link-data-attributes" level="4" size="3" class="mt-8 scroll-m-16">
        <HeadingLink.Content>
          Data attributes
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <ComponentsDataAttrs
        data={[
          {
            name: '[data-scope]',
            values: '"breadcrumbs"',
          },
          {
            name: '[data-part]',
            values: '"link"',
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
