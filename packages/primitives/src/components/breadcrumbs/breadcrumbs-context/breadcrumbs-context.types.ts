import type { ReadonlySignal } from '@builder.io/qwik';

export interface BreadcrumbsContextValue {
  /**
   * Whether the breadcrumbs are disabled.
   */
  isDisabled: ReadonlySignal<boolean | undefined>;
}
