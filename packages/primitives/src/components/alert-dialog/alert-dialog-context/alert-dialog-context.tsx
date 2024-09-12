import type { AlertDialogContextValue } from './alert-dialog-context.types';
import { createContextId } from '@builder.io/qwik';

export const AlertDialogContext = createContextId<AlertDialogContextValue>('qwik-primitives-alert-dialog-context');
