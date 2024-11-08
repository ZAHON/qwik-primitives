import type { HeadingLinkContextValue } from './heading-link-context.types';
import { createContextId } from '@builder.io/qwik';

export const HeadingLinkContext = createContextId<HeadingLinkContextValue>('heading-link-context');
