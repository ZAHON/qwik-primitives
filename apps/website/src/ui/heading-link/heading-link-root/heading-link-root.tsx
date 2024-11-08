import type { HeadingLinkRootProps } from './heading-link-root.types';
import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { Heading } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { headingLinkRootStyles } from './heading-link-root.styles';
import { HeadingLinkContext } from '../heading-link-context';

/**
 * Contains all the parts of a heading link.
 * This component is based on the `h1` element.
 */
export const HeadingLinkRoot = component$<HeadingLinkRootProps>((props) => {
  const { id, level = '1', size = '6', highContrast = true, class: className, ...others } = props;

  useContextProvider(HeadingLinkContext, { id, size });

  return (
    <Heading.Root
      id={id}
      level={level}
      class={twm(headingLinkRootStyles({ size, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Heading.Root>
  );
});
