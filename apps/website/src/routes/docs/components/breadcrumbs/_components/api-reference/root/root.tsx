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
        Contains all the parts of a breadcrumbs. This component is based on the <Code.Root size="3">nav</Code.Root>{' '}
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
            propName: 'aria-label',
            propDescription: <Text.Root size="2">The label of the breadcrumbs.</Text.Root>,
            typeValue: 'string',
            defaultValue: '"Breadcrumbs"',
          },
          {
            propName: 'disabled',
            propDescription: <Text.Root size="2">Whether the breadcrumbs are disabled.</Text.Root>,
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
            values: '"breadcrumbs"',
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