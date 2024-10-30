import type { CodeBlockSyntaxHighlighterProps } from './code-block-syntax-highlighter.types';
import { component$, Slot } from '@builder.io/qwik';
import { useSyntaxHighlighter } from '@/hooks/use-syntax-highlighter';
import { codeBlockSyntaxHighlighterStyles } from './code-block-syntax-highlighter.styles';

export const CodeBlockSyntaxHighlighter = component$<CodeBlockSyntaxHighlighterProps>((props) => {
  const { code, language, lines, words } = props;

  const highlightedHTML = useSyntaxHighlighter(code, language, { lines, words });

  return (
    <div class={codeBlockSyntaxHighlighterStyles()}>
      <div dangerouslySetInnerHTML={highlightedHTML} />
      <Slot />
    </div>
  );
});
