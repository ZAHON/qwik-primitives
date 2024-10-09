import type { CSSProperties } from '@builder.io/qwik';
import type { LinkProps } from '@builder.io/qwik-city';

export interface LinkRootProps extends LinkProps {
  /**
   * The URL that the link points to.
   */
  href: string;

  /**
   * Whether Qwik should prefetch and cache the target page of this link, this includes invoking any `routeLoader$`, `onGet`, etc.
   * Setting this value to `"js"` will prefetch only javascript bundles required to render this page on the client, `false` will disable prefetching altogether.
   * @default true
   */
  prefetch?: boolean | 'js';

  /**
   * Whether the link lead to external source.
   */
  external?: boolean;

  /**
   * Whether the link should open in a new tab.
   */
  openInNewTab?: boolean;

  /**
   * The size of the link.
   * @default "3"
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

  /**
   * The color of the link.
   * @default "primary"
   */
  color?: 'default' | 'primary';

  /**
   * Uses a higher contrast color for the link.
   */
  highContrast?: boolean;

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
