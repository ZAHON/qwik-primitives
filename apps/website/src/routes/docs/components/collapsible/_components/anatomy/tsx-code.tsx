import { component$ } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';

export const CollapsibleDemo = component$(() => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger />
      <Collapsible.Panel>
        <Collapsible.Content />
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
