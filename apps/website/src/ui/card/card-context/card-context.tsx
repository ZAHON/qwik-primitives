import type { CardContextValue } from './card-context.types';
import { createContextId } from '@builder.io/qwik';

export const CardContext = createContextId<CardContextValue>('card-context');
