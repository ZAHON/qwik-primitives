import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface AvatarRootProps extends PropsOf<'span'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The strategy to use to determine when the image should load.
   *
   * - `"intersection-observer"` means that image will load when the element is visible in the viewport.
   *
   * - `"document-ready"` means that image will load when the document is ready.
   *
   * - `"document-idle"` means that image will load when the document is idle.
   *
   * @default "intersection-observer"
   */
  strategy?: 'intersection-observer' | 'document-ready' | 'document-idle';

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
