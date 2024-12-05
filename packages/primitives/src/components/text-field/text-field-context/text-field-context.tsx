import type { TextFieldContextValue } from './text-field-context.types';
import { createContextId } from '@builder.io/qwik';

export const TextFieldContext = createContextId<TextFieldContextValue>('qwik-primitives-text-field-context');
