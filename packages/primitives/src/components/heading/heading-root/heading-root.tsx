import type { HeadingRootProps } from './heading-root.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Contains the content for the heading.
 * This component is based on the `h1` element.
 */
export const HeadingRoot = component$<HeadingRootProps>((props) => {
  const { as, level = '1', ...others } = props;

  const Component = as || (`h${level}` as const);

  return (
    <Component
      data-qwik-primitives-heading-root=""
      data-scope="heading"
      data-part="root"
      data-level={level}
      {...others}
    >
      <Slot />
    </Component>
  );
});
