export const tsxCode = `import { component$ } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';

export const AccordionDemo = component$(() => {
  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent />
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});`;
