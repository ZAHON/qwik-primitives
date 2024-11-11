import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { ComponentKeyboardInteractions } from '@/components/component-keyboard-interactions';

export const KeyboardInteractions = component$(() => {
  return (
    <>
      <HeadingLink.Root id="keyboard-interactions" level="3" size="4" class="mt-10 scroll-m-16">
        <HeadingLink.Content>
          Keyboard Interactions
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <ComponentKeyboardInteractions
        data={[
          {
            key: 'Space',
            description: (
              <Text.Root size="2">
                When focus is on an <Code.Root size="2">Accordion.ItemTrigger</Code.Root> of a collapsed section,
                expands the section.
              </Text.Root>
            ),
          },
          {
            key: 'Enter',
            description: (
              <Text.Root size="2">
                When focus is on an <Code.Root size="2">Accordion.ItemTrigger</Code.Root> of a collapsed section,
                expands the section.
              </Text.Root>
            ),
          },
          {
            key: 'Tab',
            description: <Text.Root size="2">Moves focus to the next focusable element.</Text.Root>,
          },
          {
            key: 'Shift + Tab',
            description: <Text.Root size="2">Moves focus to the previous focusable element.</Text.Root>,
          },
          {
            key: 'ArrowDown',
            description: (
              <Text.Root size="2">
                When focus is on an <Code.Root size="2">Accordion.ItemTrigger</Code.Root>, moves focus to the next
                enabled <Code.Root size="2">Accordion.ItemTrigger</Code.Root>.
              </Text.Root>
            ),
          },
          {
            key: 'ArrowUp',
            description: (
              <Text.Root size="2">
                When focus is on an <Code.Root size="2">Accordion.ItemTrigger</Code.Root>, moves focus to the previous
                enabled <Code.Root size="2">Accordion.ItemTrigger</Code.Root>.
              </Text.Root>
            ),
          },
          {
            key: 'Home',
            description: (
              <Text.Root size="2">
                When focus is on an <Code.Root size="2">Accordion.ItemTrigger</Code.Root>, moves focus to the first
                enabled <Code.Root size="2">Accordion.ItemTrigger</Code.Root>.
              </Text.Root>
            ),
          },
          {
            key: 'End',
            description: (
              <Text.Root size="2">
                When focus is on an <Code.Root size="2">Accordion.ItemTrigger</Code.Root>, moves focus to the last
                enabled <Code.Root size="2">Accordion.ItemTrigger</Code.Root>.
              </Text.Root>
            ),
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
