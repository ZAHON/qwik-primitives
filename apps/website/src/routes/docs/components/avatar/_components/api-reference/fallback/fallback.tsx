import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { Link } from '@/ui/link';
import { ComponentProps } from '@/components/component-props';
import { ComponentsDataAttrs } from '@/components/components-data-attrs';

export const Fallback = component$(() => {
  return (
    <>
      <HeadingLink.Root id="fallback" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Fallback
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error.
        If you notice a flash during loading, you can provide a <Code.Root size="3">delayMs</Code.Root> prop to delay
        its rendering so it only renders for those with slower connections. For more control, use the{' '}
        <Code.Root size="3">onLoadingStatusChange$</Code.Root> handler on <Code.Root size="3">Avatar.Image</Code.Root>.
        This component is based on the <Code.Root size="3">span</Code.Root> element.
      </Text.Root>

      <HeadingLink.Root id="fallback-props" level="4" size="3" class="mt-8 scroll-m-16">
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
            propName: 'delayMs',
            propDescription: (
              <Text.Root size="2">
                Useful for delaying rendering so it only appears for those with slower connections.
              </Text.Root>
            ),
            typeValue: 'number',
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

      <HeadingLink.Root id="fallback-data-attributes" level="4" size="3" class="mt-8 scroll-m-16">
        <HeadingLink.Content>
          Data attributes
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <ComponentsDataAttrs
        data={[
          {
            name: '[data-scope]',
            values: '"avatar"',
          },
          {
            name: '[data-part]',
            values: '"fallback"',
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
