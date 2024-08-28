import type { AvatarContextValue } from './avatar-context.types';
import { createContextId } from '@builder.io/qwik';

export const AvatarContext = createContextId<AvatarContextValue>('qwik-primitives-avatar-context');
