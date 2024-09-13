import type { AvatarImageProps } from './avatar-image.types';
import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import { AvatarContext } from '../avatar-context';

/**
 * The image to render.
 * By default it will only render when it has loaded. You can use the `onLoadingStatusChange$` handler if you need more control.
 * This component is based on the `img` element.
 */
export const AvatarImage = component$<AvatarImageProps>((props) => {
  const { as, src, referrerPolicy, onLoadingStatusChange$, ...others } = props;

  const { executeTasks, imageLoadingStatus } = useContext(AvatarContext);

  useTask$(({ track }) => {
    track(() => imageLoadingStatus.value);

    if (onLoadingStatusChange$ && imageLoadingStatus.value !== 'idle') {
      onLoadingStatusChange$(imageLoadingStatus.value);
    }
  });

  useTask$(({ track, cleanup }) => {
    track(() => src);
    track(() => referrerPolicy);
    track(() => executeTasks.value);

    if (isServer) return;
    if (!executeTasks.value) return;

    if (!src) {
      imageLoadingStatus.value = 'error';
      return;
    }

    let isMounted = true;

    const image = new window.Image();

    const updateStatus = (status: 'idle' | 'loading' | 'loaded' | 'error') => () => {
      if (isMounted) imageLoadingStatus.value = status;
    };

    imageLoadingStatus.value = 'loading';

    image.onload = updateStatus('loaded');
    image.onerror = updateStatus('error');
    image.src = src;

    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }

    cleanup(() => {
      isMounted = false;
    });
  });

  const Component = as || 'img';

  return (
    imageLoadingStatus.value === 'loaded' && (
      <Component
        src={src}
        referrerPolicy={referrerPolicy}
        data-qwik-primitives-avatar-image=""
        data-scope="avatar"
        {...others}
      />
    )
  );
});
