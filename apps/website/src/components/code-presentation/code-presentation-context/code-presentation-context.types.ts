import type { Signal } from '@builder.io/qwik';

export interface CodePresentationContextValue {
  /**
   * The controlled open state of the code presentation spoiler.
   */
  isSpoilerOpen: Signal<boolean>;

  /**
   * The controlled value of the tab to activate.
   */
  tabsValue: Signal<'index.tsx' | 'styles.css'>;
}
