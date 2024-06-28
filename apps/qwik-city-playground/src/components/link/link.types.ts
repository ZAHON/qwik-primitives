import type { PropsOf } from '@builder.io/qwik';

export interface LinkProps extends PropsOf<'a'> {
  /**
   * If you `true`, the link will have the `target="_blank"` and `rel="noopener noreferrer"` attributes.
   * @default false
   */
  external?: boolean;

  /**
   * The URL that the hyperlink points to.
   */
  href: string;
}
