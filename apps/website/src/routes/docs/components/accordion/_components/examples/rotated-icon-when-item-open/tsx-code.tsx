import type { PropsOf } from '@builder.io/qwik';
import { component$, useStyles$ } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';
import styles from './styles.css?inline';

const ChevronLeftIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

export const AccordionDemo = component$(() => {
  useStyles$(styles);

  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Is it accessible?
            <Accordion.ItemIndicator class="accordion-item-indicator">
              <ChevronLeftIcon class="accordion-item-indicator-icon" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Is it unstyled?
            <Accordion.ItemIndicator class="accordion-item-indicator">
              <ChevronLeftIcon class="accordion-item-indicator-icon" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It's unstyled by default.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Can it be animated?
            <Accordion.ItemIndicator class="accordion-item-indicator">
              <ChevronLeftIcon class="accordion-item-indicator-icon" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes! You can animate the Accordion with CSS or JavaScript.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
