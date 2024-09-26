import type { PopoverContextValue } from './popover-context.types';
import { createContextId } from '@builder.io/qwik';

export const PopoverContext = createContextId<PopoverContextValue>('qwik-primitives-popover-context');
