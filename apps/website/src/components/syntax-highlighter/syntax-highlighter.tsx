import type { SyntaxHighlighterProps } from './syntax-highlighter.types';
import { component$ } from '@builder.io/qwik';
import { useSyntaxHighlighter } from '@/hooks/use-syntax-highlighter';
import { twm } from '@/utilities/twm';
import { SyntaxHighlighterCopyButton } from './syntax-highlighter-copy-button';
import { syntaxHighlighterStyles } from './syntax-highlighter.styles';

export const SyntaxHighlighter = component$<SyntaxHighlighterProps>((props) => {
  const { code, language, withCopyButton = true, class: className, ...others } = props;

  const highlightedHTML = useSyntaxHighlighter(code, language, { ...others });

  return (
    <div class={twm(syntaxHighlighterStyles(), className)}>
      <div dangerouslySetInnerHTML={highlightedHTML} />
      {withCopyButton && <SyntaxHighlighterCopyButton value={code} />}
    </div>
  );
});
