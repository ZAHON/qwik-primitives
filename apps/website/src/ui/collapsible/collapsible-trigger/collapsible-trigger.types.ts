import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface CollapsibleTriggerProps extends PropsOf<'button'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The size of the trigger.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The shape of the trigger.
   * @default "button'"
   */
  shape?: 'button' | 'icon';

  /**
   * The variant of the trigger.
   * @default "solid"
   */
  variant?: 'solid' | 'soft' | 'ghost';

  /**
   * The color of the trigger.
   * @default "primary"
   */
  color?: 'default' | 'primary';

  /**
   * Uses a higher contrast color for the trigger.
   */
  highContrast?: boolean;

  /**
   * Overrides the value of the trigger border radius inherited from the theme.
   */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
