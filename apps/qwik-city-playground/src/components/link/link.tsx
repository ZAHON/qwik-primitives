import type { LinkProps } from './link.types';
import { component$, Slot } from '@builder.io/qwik';
import { Link as QwikCityLink } from '@builder.io/qwik-city';

export const Link = component$<LinkProps>((props) => {
  const { prefetch = false, ...others } = props;

  return (
    <QwikCityLink prefetch={prefetch} {...others}>
      <Slot />
    </QwikCityLink>
  );
});
