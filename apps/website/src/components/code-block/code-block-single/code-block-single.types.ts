import type { UseSyntaxHighlighterLanguage } from '@/hooks/use-syntax-highlighter';

export interface CodeBlockSingleProps {
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
   * If `true`, code block will have copy button.
   * @default true
   */
  withCopyButton?: boolean;
}
