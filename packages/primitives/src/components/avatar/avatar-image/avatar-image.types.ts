import type { PropsOf, FunctionComponent, QRL, CSSProperties } from '@builder.io/qwik';

export interface AvatarImageProps extends PropsOf<'img'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * A callback providing information about the loading status of the image.
   * This is useful in case you want to control more precisely what to render as the image is loading.
   */
  onLoadingStatusChange$?: QRL<(status: 'idle' | 'loading' | 'loaded' | 'error') => void>;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
