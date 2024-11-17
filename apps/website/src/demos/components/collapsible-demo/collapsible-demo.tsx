import type { PropsOf } from '@builder.io/qwik';
import { component$, useStyles$ } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';
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

export const CollapsibleDemo = component$(() => {
  useStyles$(styles);

  return (
    <Collapsible.Root class="collapsible-root">
      <Collapsible.Trigger class="collapsible-trigger">
        <span class="collapsible-trigger-title">What is Qwik Primitives?</span>
        <ChevronLeftIcon height={16} width={16} class="collapsible-trigger-indicator" />
      </Collapsible.Trigger>
      <Collapsible.Panel class="collapsible-panel">
        <Collapsible.Content>
          <div class="collapsible-content-inner">
            <p class="collapsible-content-text">
              Qwik Primitives is a UI toolkit for building accessible web apps and design systems with Qwik. It provides
              a set of low-level UI components and primitives which can be the foundation for your design system
              implementation.
            </p>
          </div>
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
