import type { SkeletonContextValue } from './skeleton-context.types';
import { createContextId } from '@builder.io/qwik';

export const SkeletonContext = createContextId<SkeletonContextValue>('qwik-primitives-skeleton-context');
