import { component$ } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';

export const AccordionDemo = component$(() => {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It's unstyled by default.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes! You can animate the Accordion with CSS.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
