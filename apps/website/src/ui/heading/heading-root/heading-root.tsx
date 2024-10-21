import type { HeadingRootProps } from './heading-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { Heading } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { headingRootStyles } from './heading-root.styles';

/**
 * Semantic heading element.
 * This component is based on the `h1` element.
 */
export const HeadingRoot = component$<HeadingRootProps>((props) => {
  const { level = '1', size = '6', highContrast = true, class: className, ...others } = props;

  return (
    <Heading.Root level={level} class={twm(headingRootStyles({ size, highContrast }), className)} {...others}>
      <Slot />
    </Heading.Root>
  );
});
