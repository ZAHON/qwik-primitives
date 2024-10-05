import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface PopoverDescriptionProps extends PropsOf<'p'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * When `true`, description will be hide from the screen in an accessible way.
   */
  visuallyHidden?: boolean;

  /**
   * The size of the description.
   * By default the size will be inherit from `Popover.Content` component `size` prop.
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * Uses a higher contrast color for the description.
   * @default true
   */
  highContrast?: boolean;

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
