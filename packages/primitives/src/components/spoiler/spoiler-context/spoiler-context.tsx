import type { SpoilerContextValue } from './spoiler-context.types';
import { createContextId } from '@builder.io/qwik';

export const SpoilerContext = createContextId<SpoilerContextValue>('qwik-primitives-spoiler-context');
