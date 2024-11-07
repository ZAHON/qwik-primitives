import type { CodePresentationContextValue } from './code-presentation-context.types';
import { createContextId } from '@builder.io/qwik';

export const CodePresentationContext = createContextId<CodePresentationContextValue>('code-presentation-context');
