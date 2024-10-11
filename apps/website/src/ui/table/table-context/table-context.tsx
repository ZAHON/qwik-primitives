import type { TableContextValue } from './table-context.types';
import { createContextId } from '@builder.io/qwik';

export const TableContext = createContextId<TableContextValue>('table-context');
