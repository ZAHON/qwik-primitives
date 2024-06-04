import type { PropsOf, CSSProperties } from '@builder.io/qwik';

export interface CollapsibleContentProps extends PropsOf<'div'> {
  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
