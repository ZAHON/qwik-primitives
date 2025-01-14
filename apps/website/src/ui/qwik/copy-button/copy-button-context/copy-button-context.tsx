import type { CopyButtonContextValue } from './copy-button-context.types';
import { createContextId } from '@builder.io/qwik';

export const CopyButtonContext = createContextId<CopyButtonContextValue>('copy-button-context');
