import type { FunctionComponent } from '@builder.io/qwik';
import type { CodeBlockProps } from '@/components/code-block';

export type CodePresentationProps = {
  /**
   * The component to be presented.
   */
  component: FunctionComponent;

  /**
   * When `true`, code presentation hero will have decorative gradient.
   * @default true
   */
  heroWithGradient?: boolean;

  /**
   * When `true`, code presentation hero will have large padding Y.
   * @default true
   */
  heroPaddingY?: boolean;

  /**
   * The justify of the code presentation hero.
   * @default "center"
   */
  heroJustify?: 'start' | 'center' | 'end';

  /**
   * The CSS class for the element.
   */
  class?: string;
} & CodeBlockProps;
