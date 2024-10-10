export interface DocsNavLinkProps {
  /**
   * The URL that the hyperlink points to.
   */
  href: string;

  /**
   * The variant of the link.
   */
  variant: 'mobile' | 'desktop';

  /**
   * Used to identify the link as the currently active page.
   */
  active: boolean;

  /**
   * Whether the link lead to external source.
   */
  external?: boolean;

  /**
   * Whether the link should open in a new tab.
   */
  openInNewTab?: boolean;
}