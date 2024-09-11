import type { DialogContextValue } from './dialog-context.types';
import { createContextId } from '@builder.io/qwik';

export const DialogContext = createContextId<DialogContextValue>('qwik-primitives-dialog-context');
