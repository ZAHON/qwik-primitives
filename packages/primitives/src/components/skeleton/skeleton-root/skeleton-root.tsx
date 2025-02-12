import type { SkeletonRootProps } from './skeleton-root.types';
import { component$, useComputed$, useContextProvider, Slot } from '@builder.io/qwik';
import { SkeletonContext } from '../skeleton-context';

/**
 * Contains all the parts of a skeleton.
 * By default, it will be rendered with the passed children only if the `loading` prop is set to `true`
 * otherwise the component will render the passed children.
 * Use the `forceMount` prop to always render this component with the passed children.
 * This component is based on the `div` element.
 */
export const SkeletonRoot = component$<SkeletonRootProps>((props) => {
  const { as, loading, forceMount, style, ...others } = props;

  const isLoading = useComputed$(() => loading);

  useContextProvider(SkeletonContext, { isLoading });

  const Component = as || 'div';

  if (!isLoading.value && !forceMount) return <Slot />;

  return (
    <Component
      aria-busy={isLoading.value ? 'true' : undefined}
      data-qwik-primitives-skeleton-root=""
      data-scope="skeleton"
      data-part="root"
      data-loading={isLoading.value ? '' : undefined}
      data-force-mount={forceMount ? '' : undefined}
      style={{
        position: 'relative',
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
