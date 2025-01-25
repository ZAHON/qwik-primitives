import type { CodePresentationSyntaxHighlighterProps } from './code-presentation-syntax-highlighter.types';
import { component$ } from '@builder.io/qwik';
import { SyntaxHighlighter } from '@/components/syntax-highlighter';
import { codePresentationSyntaxHighlighterPreStyles } from './code-presentation-syntax-highlighter.styles';

export const CodePresentationSyntaxHighlighter = component$<CodePresentationSyntaxHighlighterProps>((props) => {
  return <SyntaxHighlighter preClass={codePresentationSyntaxHighlighterPreStyles()} {...props} />;
});
