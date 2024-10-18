import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface BreadcrumbsLinkProps extends PropsOf<'a'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * A URL to link to.
   */
  href: string;

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
