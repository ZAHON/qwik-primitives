import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface BreadcrumbsRootProps extends PropsOf<'nav'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The label of the breadcrumbs.
   * @default "Breadcrumbs"
   */
  'aria-label'?: string;

  /**
   * Whether the breadcrumbs are disabled.
   */
  disabled?: boolean;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
