import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { Link } from '@/ui/link';
import { UnorderedList } from '@/ui/unordered-list';
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
        Contains all the parts of an avatar. This component is based on the <Code.Root size="3">span</Code.Root>{' '}
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
            propName: 'strategy',
            propDescription: (
              <>
                <Text.Root size="2">The strategy to use to determine when the image should load.</Text.Root>
                <UnorderedList.Root size="2" class="mt-3">
                  <UnorderedList.Item>
                    <Code.Root>"intersection-observer"</Code.Root> means that image will load when the element is
                    visible in the viewport.
                  </UnorderedList.Item>
                  <UnorderedList.Item>
                    <Code.Root>"document-ready"</Code.Root> means that image will load when the document is ready.
                  </UnorderedList.Item>
                  <UnorderedList.Item>
                    <Code.Root>"document-idle"</Code.Root> means that image will load when the document is idle.
                  </UnorderedList.Item>
                </UnorderedList.Root>
              </>
            ),
            typeValue: 'enum',
            typeDescription: (
              <Code.Root size="2" color="default">
                "intersection-observer" | "document-ready" | "document-idle"
              </Code.Root>
            ),
            defaultValue: '"intersection-observer"',
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
            values: '"avatar"',
          },
          {
            name: '[data-part]',
            values: '"root"',
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
