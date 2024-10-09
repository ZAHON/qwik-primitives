import type { CSSProperties } from '@builder.io/qwik';
import type { LinkProps } from '@builder.io/qwik-city';

export interface ButtonLinkRootProps extends LinkProps {
  /**
   * The URL that the button link points to.
   */
  href: string;

  /**
   * Whether Qwik should prefetch and cache the target page of this link, this includes invoking any `routeLoader$`, `onGet`, etc.
   * Setting this value to `"js"` will prefetch only javascript bundles required to render this page on the client, `false` will disable prefetching altogether.
   * @default true
   */
  prefetch?: boolean | 'js';

  /**
   * Whether the button link lead to external source.
   */
  external?: boolean;

  /**
   * Whether the button link should open in a new tab.
   */
  openInNewTab?: boolean;

  /**
   * The size of the button link.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The shape of the button link.
   * @default "button'"
   */
  shape?: 'button' | 'icon';

  /**
   * The variant of the button link.
   * @default "solid"
   */
  variant?: 'solid' | 'soft' | 'ghost';

  /**
   * The color of the button link.
   * @default "primary"
   */
  color?: 'default' | 'primary';

  /**
   * Uses a higher contrast color for the button link.
   */
  highContrast?: boolean;

  /**
   * Overrides the value of the button link border radius inherited from the theme.
   */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
