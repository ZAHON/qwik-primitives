import { component$, useStyles$ } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';
import styles from './styles.css?inline';

export const AccordionDemo = component$(() => {
  useStyles$(styles);

  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>Yes. It's unstyled by default.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>Yes! You can animate the Accordion with CSS or JavaScript.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
