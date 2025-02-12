import type { SkeletonContentProps } from './skeleton-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { SkeletonContext } from '../skeleton-context';

/**
 * Contains loading content.
 * By default, it will be rendered with the passed children only if the `loading` prop is set to `true` on `Skeleton.Root` component
 * otherwise the component will render the passed children.
 * Use the `forceMount` prop to always render this component with the passed children.
 * This component is based on the `div` element.
 */
export const SkeletonContent = component$<SkeletonContentProps>((props) => {
  const { as, forceMount, style, ...others } = props;

  const { isLoading } = useContext(SkeletonContext);

  const Component = as || 'div';

  if (!isLoading.value && !forceMount) return <Slot />;

  return (
    <Component
      inert={undefined}
      aria-hidden={isLoading.value ? 'true' : undefined}
      data-qwik-primitives-skeleton-content=""
      data-scope="skeleton"
      data-part="content"
      data-loading={isLoading.value ? '' : undefined}
      data-force-mount={forceMount ? '' : undefined}
      style={{
        // `display: contents` removes the content from the accessibility tree in some browsers,
        // so we force remove it with `aria-hidden`
        display: isLoading.value ? 'contents' : undefined,
        visibility: isLoading.value ? 'hidden' : undefined,
        pointerEvents: isLoading.value ? 'none' : undefined,
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
