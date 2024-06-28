import type { LinkProps } from './link.types';
import { component$, Slot } from '@builder.io/qwik';
import { Link as QwikCityLink } from '@builder.io/qwik-city';

export const Link = component$<LinkProps>((props) => {
  const { external = false, ...others } = props;

  return (
    <QwikCityLink
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
      {...others}
    >
      <Slot />
    </QwikCityLink>
  );
});
