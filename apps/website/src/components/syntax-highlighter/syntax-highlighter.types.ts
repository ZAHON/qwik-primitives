import type { UseSyntaxHighlighterLanguage } from '@/hooks/use-syntax-highlighter';

export interface SyntaxHighlighterProps {
  /**
   * The code to be highlighted.
   */
  code: string;

  /**
   * The language of the code.
   */
  language: UseSyntaxHighlighterLanguage;

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
   * If `true`, syntax highlighter will have copy button.
   * @default true
   */
  withCopyButton?: boolean;

  /**
   * The CSS class for the element.
   */
  class?: string;

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
