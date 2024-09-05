export type FocusableTarget = HTMLElement | { focus: () => void };

export interface FocusElementOptions {
  /**
   * Whether or not selects all the text in a `textarea` element or in an `input` element that includes a text field.
   * @default false
   */
  select?: boolean;

  /**
   * Whether or not the browser should scroll the document to bring the newly-focused element into view.
   * @default true
   */
  preventScroll?: boolean;
}
