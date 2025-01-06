import type { TabsContextValue } from './tabs-context.types';
import { createContextId } from '@builder.io/qwik';

export const TabsContext = createContextId<TabsContextValue>('tabs-context');
