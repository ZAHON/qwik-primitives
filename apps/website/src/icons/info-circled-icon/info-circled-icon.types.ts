import type { PropsOf, CSSProperties } from '@builder.io/qwik';

export interface InfoCircledIconProps extends PropsOf<'svg'> {
  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
