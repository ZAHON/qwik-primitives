import type { HeadingLinkIconProps } from './heading-link-icon.types';
import { component$, useContext } from '@builder.io/qwik';
import { LinkIcon } from '@/icons/link-icon';
import { twm } from '@/utilities/twm';
import { headingLinkIconStyles } from './heading-link-icon.styles';
import { getIconSize } from './utilities';
import { HeadingLinkContext } from '../heading-link-context';

/**
 * The default icon of the heading link.
 * Must be be nested inside `HeadingLink.Content`.
 * This component is based on the `svg` element.
 */
export const HeadingLinkIcon = component$<HeadingLinkIconProps>((props) => {
  const { class: className, ...others } = props;

  const { size } = useContext(HeadingLinkContext);

  return (
    <LinkIcon
      height={getIconSize(size)}
      width={getIconSize(size)}
      class={twm(headingLinkIconStyles(), className)}
      {...others}
    />
  );
});
