import type { ButtonContextValue } from './button-context.types';
import { createContextId } from '@builder.io/qwik';

export const ButtonContext = createContextId<ButtonContextValue>('qwik-primitives-button-context');
