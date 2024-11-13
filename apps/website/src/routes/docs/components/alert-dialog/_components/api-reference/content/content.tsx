import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { Link } from '@/ui/link';
import { Kbd } from '@/ui/kbd';
import { ComponentProps } from '@/components/component-props';
import { ComponentsDataAttrs } from '@/components/components-data-attrs';

export const Content = component$(() => {
  return (
    <>
      <HeadingLink.Root id="content" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Content
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        Contains content to be rendered when the alert dialog is open. This component is based on the{' '}
        <Code.Root size="3">dialog</Code.Root> element.
      </Text.Root>

      <HeadingLink.Root id="content-props" level="4" size="3" class="mt-8 scroll-m-16">
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
            propName: 'loop',
            propDescription: (
              <Text.Root size="2">
                When <Code.Root size="2">true</Code.Root>, press <Kbd.Root size="2">Tab</Kbd.Root> from last focusable
                element will focus first focusable element and <Kbd.Root size="2">Shift + Tab</Kbd.Root> from first
                focusable element will focus last focusable element.
              </Text.Root>
            ),
            typeValue: 'boolean',
            defaultValue: 'true',
          },
          {
            propName: 'autoFocus',
            propDescription: (
              <Text.Root size="2">
                By default, when the component is opened, focus is programmatically moved to{' '}
                <Code.Root size="2">AlertDialog.Cancel</Code.Root> to anticipate a response to the prompt. When{' '}
                <Code.Root size="2">AlertDialog.Cancel</Code.Root> not exist or is disabled the focus will be move focus
                on the first focusable element. To specify the element that should receive initial focus, add
                <Code.Root size="2">data-qwik-primitives-auto-focus</Code.Root> attribute on this element.
              </Text.Root>
            ),
            typeValue: 'boolean',
            defaultValue: 'true',
          },
          {
            propName: 'restoreFocus',
            propDescription: (
              <Text.Root size="2">
                Whether to restore focus back to the <Code.Root size="2">AlertDialog.Trigger</Code.Root> when the alert
                dialog is closed.
              </Text.Root>
            ),
            typeValue: 'boolean',
            defaultValue: 'true',
          },
          {
            propName: 'preventScroll',
            propDescription: (
              <Text.Root size="2">Whether to prevent scrolling behind the alert dialog when it's opened.</Text.Root>
            ),
            typeValue: 'boolean',
            defaultValue: 'true',
          },
          {
            propName: 'closeOnBackPress',
            propDescription: (
              <Text.Root size="2">
                Whether to close the alert dialog when the back is press on mobile devices.
              </Text.Root>
            ),
            typeValue: 'boolean',
            defaultValue: 'true',
          },
          {
            propName: 'closeOnEscapeKeyDown',
            propDescription: (
              <Text.Root size="2">Whether to close the alert dialog when the escape key is down.</Text.Root>
            ),
            typeValue: 'boolean',
            defaultValue: 'true',
          },
          {
            propName: 'closeOnClickOutside',
            propDescription: (
              <Text.Root size="2">Whether to close the alert dialog when the outside is clicked.</Text.Root>
            ),
            typeValue: 'boolean',
            defaultValue: '',
          },
          {
            propName: 'onEscapeKeyDown$',
            propDescription: <Text.Root size="2">Event handler called when the escape key is down.</Text.Root>,
            typeValue: 'QRL',
            typeDescription: <Code.Root size="2" color="default">{`QRL<() => void>`}</Code.Root>,
            defaultValue: '',
          },
          {
            propName: 'onClickOutside$',
            propDescription: (
              <Text.Root size="2">
                Event handler called when a pointer event occurs outside the bounds of the component.
              </Text.Root>
            ),
            typeValue: 'QRL',
            typeDescription: <Code.Root size="2" color="default">{`QRL<() => void>`}</Code.Root>,
            defaultValue: '',
          },
          {
            propName: 'onOpen$',
            propDescription: (
              <Text.Root size="2">
                Event handler called when the content is fully open. If you animate the content when it opens this event
                handler was call after animation end.
              </Text.Root>
            ),
            typeValue: 'QRL',
            typeDescription: <Code.Root size="2" color="default">{`QRL<() => void>`}</Code.Root>,
            defaultValue: '',
          },
          {
            propName: 'onClose$',
            propDescription: (
              <Text.Root size="2">
                Event handler called when the content is fully close. If you animate the content when it closes this
                event handler was call after animation end.
              </Text.Root>
            ),
            typeValue: 'QRL',
            typeDescription: <Code.Root size="2" color="default">{`QRL<() => void>`}</Code.Root>,
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

      <HeadingLink.Root id="content-data-attributes" level="4" size="3" class="mt-8 scroll-m-16">
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
            values: '"content"',
          },
          {
            name: '[data-state]',
            values: '"open" | "closed"',
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
