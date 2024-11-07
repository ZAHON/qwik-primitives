import type { CodePresentationCodeBlockProps } from './code-presentation-code-block.types';
import { component$ } from '@builder.io/qwik';
import { CodeBlock } from '@/components/code-block';
import { codePresentationCodeBlockStyles } from './code-presentation-code-block.styles';

export const CodePresentationCodeBlock = component$<CodePresentationCodeBlockProps>((props) => {
  return <CodeBlock class={codePresentationCodeBlockStyles()} {...props} />;
});
