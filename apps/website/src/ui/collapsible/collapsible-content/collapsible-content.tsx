import type { CollapsibleContentProps } from './collapsible-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';

export const CollapsibleContent = component$<CollapsibleContentProps>((props) => {
  return (
    <Collapsible.Content {...props}>
      <Slot />
    </Collapsible.Content>
  );
});
