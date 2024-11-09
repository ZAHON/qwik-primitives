export interface TableOfContentsProps {
  /**
   * The data of the table of contents.
   */
  data: {
    /**
     * The label of the link.
     */
    label: string;

    /**
     * The URL that the hyperlink points to.
     */
    href: string;

    /**
     * The data of the sub list.
     */
    data?: {
      /**
       * The label of the link.
       */
      label: string;

      /**
       * The URL that the hyperlink points to.
       */
      href: string;
    }[];
  }[];

  /**
   * The CSS class for the element.
   */
  class?: string;
}
