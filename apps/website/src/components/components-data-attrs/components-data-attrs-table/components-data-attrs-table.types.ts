import type { JSXOutput } from '@builder.io/qwik';

export interface ComponentsDataAttrsTableProps {
  /**
   * An array of all component data attributes.
   */
  data: {
    /**
     * The name of the data attribute.
     */
    name: string;

    /**
     * The values of the data attribute.
     */
    values: string | JSXOutput;
  }[];

  /**
   * The CSS class for the element.
   */
  class?: string;
}
