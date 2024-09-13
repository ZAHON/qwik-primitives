import type { AvatarFallbackProps } from './avatar-fallback.types';
import { component$, useContext, useSignal, useTask$, Slot } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import { AvatarContext } from '../avatar-context';

/**
 * An element that renders when the image hasn't loaded.
 * This means whilst it's loading, or if there was an error.
 * If you notice a flash during loading, you can provide a `delayMs` prop
 * to delay its rendering so it only renders for those with slower connections.
 * For more control, use the `onLoadingStatusChange$` handler on `Avatar.Image`.
 * This component is based on the `span` element.
 */
export const AvatarFallback = component$<AvatarFallbackProps>((props) => {
  const { as, delayMs, ...others } = props;

  const { executeTasks, imageLoadingStatus } = useContext(AvatarContext);

  const canRender = useSignal(delayMs === undefined);

  useTask$(({ track, cleanup }) => {
    track(() => delayMs);
    track(() => executeTasks.value);

    if (isServer) return;
    if (!executeTasks.value) return;

    if (delayMs !== undefined) {
      const timerId = setTimeout(() => (canRender.value = true), delayMs);

      cleanup(() => {
        clearTimeout(timerId);
      });
    }
  });

  const Component = as || 'span';

  return (
    canRender.value &&
    imageLoadingStatus.value !== 'loaded' && (
      <Component data-qwik-primitives-avatar-fallback="" data-scope="avatar" data-part="fallback" {...others}>
        <Slot />
      </Component>
    )
  );
});
