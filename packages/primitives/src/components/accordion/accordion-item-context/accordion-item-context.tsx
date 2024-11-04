import type { AccordionItemContextValue } from './accordion-item-context.types';
import { createContextId } from '@builder.io/qwik';

export const AccordionItemContext = createContextId<AccordionItemContextValue>(
  'qwik-primitives-accordion-item-context'
);
