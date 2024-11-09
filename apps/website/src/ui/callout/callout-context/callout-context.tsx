import type { CalloutContextValue } from './callout-context.types';
import { createContextId } from '@builder.io/qwik';

export const CalloutContext = createContextId<CalloutContextValue>('callout-context');
