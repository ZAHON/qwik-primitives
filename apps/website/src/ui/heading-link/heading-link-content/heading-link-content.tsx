import type { HeadingLinkContentProps } from './heading-link-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Link } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { headingLinkContentStyles } from './heading-link-content.styles';
import { HeadingLinkContext } from '../heading-link-context';

/**
 * The semantic element for navigation between pages.
 * This component is based on the `a` element.
 */
export const HeadingLinkContent = component$<HeadingLinkContentProps>((props) => {
  const { href, external, openInNewTab, class: className, ...others } = props;

  const { id } = useContext(HeadingLinkContext);

  return (
    <Link.Root
      href={href ? href : `#${id}`}
      rel={external ? 'noopener noreferrer' : undefined}
      target={openInNewTab ? '_blank' : undefined}
      class={twm(headingLinkContentStyles(), className)}
      {...others}
    >
      <Slot />
    </Link.Root>
  );
});
