import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { ComponentProps } from '@/components/component-props';

export const Root = component$(() => {
  return (
    <>
      <HeadingLink.Root id="root" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Root
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">Contains all the parts of an alert dialog.</Text.Root>

      <HeadingLink.Root id="root-props" level="4" size="3" class="mt-8 scroll-m-16">
        <HeadingLink.Content>
          Props
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <ComponentProps
        data={[
          {
            propName: 'defaultOpen',
            propDescription: (
              <Text.Root size="2">
                The open state of the alert dialog when it is initially rendered. Use when you do not need to control
                its open state.
              </Text.Root>
            ),
            typeValue: 'boolean',
            defaultValue: '',
          },
          {
            propName: 'open',
            propDescription: (
              <Text.Root size="2">
                The controlled open state of the alert dialog. Must be used in conjunction with{' '}
                <Code.Root size="2">onOpenChange$</Code.Root>.
              </Text.Root>
            ),
            typeValue: 'Signal',
            typeDescription: <Code.Root size="2" color="default">{`Signal<boolean>`}</Code.Root>,
            defaultValue: '',
          },
          {
            propName: 'onOpenChange$',
            propDescription: (
              <Text.Root size="2">Event handler called when the open state of the alert dialog changes.</Text.Root>
            ),
            typeValue: 'QRL',
            typeDescription: <Code.Root size="2" color="default">{`QRL<(open: boolean) => void>`}</Code.Root>,
            defaultValue: '',
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
