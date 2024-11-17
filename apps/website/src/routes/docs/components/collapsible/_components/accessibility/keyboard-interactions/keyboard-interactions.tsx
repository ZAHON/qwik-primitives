import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
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
            description: <Text.Root size="2">Opens/closes the collapsible.</Text.Root>,
          },
          {
            key: 'Enter',
            description: <Text.Root size="2">Opens/closes the collapsible.</Text.Root>,
          },
        ]}
        class="mt-6"
      />
    </>
  );
});
