import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface AccessibleIconRootProps extends PropsOf<'svg'> {
  /**
   * The `svg` icon that you would be like accessible by adding a label.
   */
  as: FunctionComponent;

  /**
   * The accessible label for the icon.
   * This label will be visually hidden but announced to screen reader users, similar to `alt` text for `img` tags.
   */
  label: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
