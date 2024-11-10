import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { Link } from '@/ui/link';
import { ComponentProps } from '@/components/component-props';
import { ComponentsDataAttrs } from '@/components/components-data-attrs';

export const Image = component$(() => {
  return (
    <>
      <HeadingLink.Root id="image" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Image
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        The image to render. By default it will only render when it has loaded. You can use the{' '}
        <Code.Root>onLoadingStatusChange$</Code.Root>
        handler if you need more control. This component is based on the <Code.Root>img</Code.Root> element.
      </Text.Root>

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
            propName: 'onLoadingStatusChange$',
            propDescription: (
              <Text.Root size="2">
                A callback providing information about the loading status of the image. This is useful in case you want
                to control more precisely what to render as the image is loading.
              </Text.Root>
            ),
            typeValue: 'QRL',
            typeDescription: (
              <Code.Root size="2" color="default">
                {`QRL<(status: "idle" | "loading" | "loaded" | "error") => void>`}
              </Code.Root>
            ),
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

      <ComponentsDataAttrs
        data={[
          {
            name: '[data-scope]',
            values: '"avatar"',
          },
          {
            name: '[data-part]',
            values: '"image"',
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
