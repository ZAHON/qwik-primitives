import type { JSXOutput } from '@builder.io/qwik';

export interface ComponentPropsDataListProps {
  /**
   * An array of all component props.
   */
  data: {
    /**
     * The name of the prop.
     */
    propName: string;

    /**
     * The description of the prop.
     */
    propDescription: JSXOutput;

    /**
     * Whether prop is required.
     */
    propRequired?: boolean;

    /**
     * The type value of the prop.
     */
    typeValue: string;

    /**
     * The type description of the prop.
     */
    typeDescription?: JSXOutput;

    /**
     * The default value of the prop.
     */
    defaultValue: string;
  }[];

  /**
   * The CSS class for the element.
   */
  class?: string;
}
