export type UseSyntaxHighlighterLanguage = 'css' | 'shell' | 'tsx' | 'typescript';

export interface UseSyntaxHighlighterOptions {
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

  /**
   * The CSS class for the code element.
   */
  codeClass?: string;

  /**
   * The CSS class for the line element.
   */
  lineClass?: string;

  /**
   * The CSS class for the highlight line element.
   */
  highlighLineClass?: string;

  /**
   * The CSS class for the highlight word element.
   */
  highlighWordClass?: string;
}
