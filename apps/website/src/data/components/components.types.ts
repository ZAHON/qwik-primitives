export interface Component {
  /**
   * The title of the component.
   */
  title: string;

  /**
   * The description of the component.
   */
  description: string;

  /**
   * The URL where the documentation for the component is located.
   */
  href: string;
}

export type Components = Component[];
