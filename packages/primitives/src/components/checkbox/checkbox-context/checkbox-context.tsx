import type { CheckboxContextValue } from './checkbox-context.types';
import { createContextId } from '@builder.io/qwik';

export const CheckboxContext = createContextId<CheckboxContextValue>('qwik-primitives-checkbox-context');
