export interface CodePresentationSyntaxHighlighterProps {
  /**
   * The code to be highlighted.
   */
  code: string;

  /**
   * The language of the code.
   */
  language: 'tsx' | 'css';
}
