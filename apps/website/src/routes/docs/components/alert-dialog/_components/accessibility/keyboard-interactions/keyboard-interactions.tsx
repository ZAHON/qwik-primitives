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
            description: <Text.Root size="2">Opens/closes the alert dialog.</Text.Root>,
          },
          {
            key: 'Enter',
            description: <Text.Root size="2">Opens/closes the alert dialog.</Text.Root>,
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
            key: 'Esc',
            description: (
              <Text.Root size="2">
                Closes the alert dialog and moves focus to <Code.Root size="2">AlertDialog.Trigger</Code.Root>.
              </Text.Root>
            ),
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
