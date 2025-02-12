import type { SkeletonFallbackProps } from './skeleton-fallback.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { SkeletonContext } from '../skeleton-context';

/**
 * Contains alternate content while the actual content has not yet been loaded.
 * By default, it will render only when the `loading` prop is set to `true` on `Skeleton.Root component,`
 * use the `forceMount` prop to always render this component.
 * This component is based on the `div` element.
 */
export const SkeletonFallback = component$<SkeletonFallbackProps>((props) => {
  const { as, forceMount, style, ...others } = props;

  const { isLoading } = useContext(SkeletonContext);

  const Component = as || 'div';

  return (
    (forceMount || isLoading.value) && (
      <Component
        aria-hidden={forceMount && !isLoading.value ? 'true' : undefined}
        data-qwik-primitives-skeleton-fallback=""
        data-scope="skeleton"
        data-part="fallback"
        data-loading={isLoading.value ? '' : undefined}
        data-force-mount={forceMount ? '' : undefined}
        style={{
          position: 'absolute',
          inset: '0',
          pointerEvents: forceMount && !isLoading.value ? 'none' : undefined,
          ...style,
        }}
        {...others}
      >
        <Slot />
      </Component>
    )
  );
});
