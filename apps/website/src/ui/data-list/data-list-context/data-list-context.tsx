import type { DataListContextValue } from './data-list-context.types';
import { createContextId } from '@builder.io/qwik';

export const DataListContext = createContextId<DataListContextValue>('data-list-context');
