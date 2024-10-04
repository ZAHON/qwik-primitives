import type { PopoverContentContextValue } from './popover-content-context.types';
import { createContextId } from '@builder.io/qwik';

export const PopoverContentContext = createContextId<PopoverContentContextValue>(
  'qwik-primitives-popover-content-context'
);