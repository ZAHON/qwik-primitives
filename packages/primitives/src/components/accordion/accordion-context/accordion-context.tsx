import type { AccordionContextValue } from './accordion-context.types';
import { createContextId } from '@builder.io/qwik';

export const AccordionContext = createContextId<AccordionContextValue>('qwik-primitives-accordion-context');
