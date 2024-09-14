import type { BreadcrumbsContextValue } from './breadcrumbs-context.types';
import { createContextId } from '@builder.io/qwik';

export const BreadcrumbsContext = createContextId<BreadcrumbsContextValue>('qwik-primitives-breadcrumbs-context');
