export interface ComponentsDataAttrsProps {
  data: {
    /**
     * The name of the data attribute.
     */
    name: string;

    /**
     * The values of the data attribute.
     */
    values: string;
  }[];

  /**
   * The CSS class for the element.
   */
  class?: string;
}
