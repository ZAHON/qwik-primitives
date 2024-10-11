export interface CodeBlockProps {
  /**
   * The code to be highlighted.
   */
  code: string;

  /**
   * The language of the code.
   */
  language: 'css' | 'tsx';

  /**
   * The lines to highlight.
   * @example ['1', '2-4']
   */
  lines?: string[];

  /**
   * The words to highlight.
   */
  words?: string[];

  /**
   * If `true`, code block will have copy button.
   * @default true
   */
  withCopyButton?: boolean;

  /**
   * The CSS class for the element.
   */
  class?: string;
}
