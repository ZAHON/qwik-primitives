import { component$, useStyles$ } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';
import styles from './styles.css?inline';

export const CollapsibleDemo = component$(() => {
  useStyles$(styles);

  return (
    <Collapsible.Root>
      <Collapsible.Trigger>What is Qwik Primitives?</Collapsible.Trigger>
      <Collapsible.Panel class="collapsible-panel">
        <Collapsible.Content>
          Qwik Primitives is a UI toolkit for building accessible web apps and design systems with Qwik. It provides a
          set of low-level UI components and primitives which can be the foundation for your design system
          implementation.
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
