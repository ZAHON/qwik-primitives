import type { MobileMenuContextValue } from './mobile-menu-context.types';
import { createContextId } from '@builder.io/qwik';

export const MobileMenuContext = createContextId<MobileMenuContextValue>('mobile-menu-context');
