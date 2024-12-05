import type { TextAreaContextValue } from './text-area-context.types';
import { createContextId } from '@builder.io/qwik';

export const TextAreaContext = createContextId<TextAreaContextValue>('qwik-primitives-text-area-context');
