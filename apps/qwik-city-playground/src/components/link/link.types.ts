import type { LinkProps as QwikCityLinkProps } from '@builder.io/qwik-city';

export interface LinkProps extends QwikCityLinkProps {
  /**
   * The URL that the hyperlink points to.
   */
  href: string;

  /**
   * Whether Qwik should prefetch and cache the target page of this `Link`, this includes invoking any `routeLoader$`, `onGet`, etc.
   * @default false
   */
  prefetch?: boolean;
}
