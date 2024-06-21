import type { Signal } from '@builder.io/qwik';

export type Ref<T> = Signal<Element | undefined> | ((node: T) => void) | undefined;
