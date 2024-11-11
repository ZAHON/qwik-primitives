import type { JSXOutput } from '@builder.io/qwik';

export interface ComponentKeyboardInteractionsDataListProps {
  /**
   * An array of all component data attributes.
   */
  data: {
    /**
     * The key.
     */
    key: string;

    /**
     * The key description.
     */
    description: string | JSXOutput;
  }[];

  /**
   * The CSS class for the element.
   */
  class?: string;
}
