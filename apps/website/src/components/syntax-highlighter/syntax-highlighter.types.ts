export interface SyntaxHighlighterProps {
  /**
   * The code to be highlighted.
   */
  code: string;

  /**
   * The language of the code.
   */
  language: 'css' | 'shell' | 'tsx' | 'typescript';

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
   * The CSS class for the pre element.
   */
  preClass?: string;
}
