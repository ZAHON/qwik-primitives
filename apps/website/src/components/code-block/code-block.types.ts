import type { CodeBlockSingleProps } from './code-block-single';
import type { CodeBlockTabsProps } from './code-block-tabs';

export interface CodeBlockCommonProps {
  /**
   * Determines the type of the code block.
   */
  type: 'single' | 'tabs';

  /**
   * The CSS class for the element.
   */
  class?: string;
}

export type CodeBlockProps = CodeBlockCommonProps &
  (({ type: 'single' } & CodeBlockSingleProps) | ({ type: 'tabs' } & CodeBlockTabsProps));
