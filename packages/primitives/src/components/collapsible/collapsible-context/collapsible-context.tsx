import type { CollapsibleContextValue } from './collapsible-context.types';
import { createContextId } from '@builder.io/qwik';

export const CollapsibleContext = createContextId<CollapsibleContextValue>('collapsible-context');
