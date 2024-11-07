import type { Signal } from '@builder.io/qwik';

export interface CodePresentationContextValue {
  /**
   * Determines the type of the code presentation.
   */
  type: 'single' | 'tabs';

  /**
   * The controlled open state of the code presentation spoiler.
   */
  isOpen: Signal<boolean>;

  /**
   * The controlled open state of the code presentation panel.
   */
  isPanelOpen: Signal<boolean>;

  /**
   * When `true`, code presentation hero will have decorative gradient.
   */
  heroWithGradient: boolean;

  /**
   * When `true`, code presentation hero will have large padding Y.
   */
  heroPaddingY: boolean;

  /**
   * The justify of the code presentation hero.
   */
  heroJustify: 'start' | 'center' | 'end';
}
