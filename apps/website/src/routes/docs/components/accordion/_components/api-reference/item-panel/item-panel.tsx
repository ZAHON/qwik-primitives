import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { Link } from '@/ui/link';
import { ComponentProps } from '@/components/component-props';
import { ComponentsDataAttrs } from '@/components/components-data-attrs';

export const ItemPanel = component$(() => {
  return (
    <>
      <HeadingLink.Root id="item-panel" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          ItemPanel
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        The panel that expands/collapses. This component is based on the <Code.Root size="3">div</Code.Root> element.
      </Text.Root>

      <HeadingLink.Root id="item-panel-props" level="4" size="3" class="mt-8 scroll-m-16">
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
            propName: 'onOpen$',
            propDescription: (
              <Text.Root size="2">
                Event handler called when the panel is fully open. If you animate the size of the panel when it opens
                this event handler was call after animation end.
              </Text.Root>
            ),
            typeValue: 'QRL',
            typeDescription: (
              <Code.Root size="2" color="default">
                {`QRL<() => void>	`}
              </Code.Root>
            ),
            defaultValue: '',
          },
          {
            propName: 'onClose$',
            propDescription: (
              <Text.Root size="2">
                Event handler called when the panel is fully close. If you animate the size of the panel when it closes
                this event handler was call after animation end.
              </Text.Root>
            ),
            typeValue: 'QRL',
            typeDescription: (
              <Code.Root size="2" color="default">
                {`QRL<() => void>	`}
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

      <HeadingLink.Root id="item-panel-data-attributes" level="4" size="3" class="mt-8 scroll-m-16">
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
            values: '"item-panel"',
          },
          {
            name: '[data-state]',
            values: '"open" | "closed"',
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
