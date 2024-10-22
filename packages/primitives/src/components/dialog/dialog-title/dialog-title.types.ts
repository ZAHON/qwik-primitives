import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface DialogTitleProps extends PropsOf<'h2'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The level of the title, determines which tag will be used (h1-h6).
   * @default "2"
   */
  level?: '1' | '2' | '3' | '4' | '5' | '6';

  /**
   * When `true`, title will be hide from the screen in an accessible way.
   */
  visuallyHidden?: boolean;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
