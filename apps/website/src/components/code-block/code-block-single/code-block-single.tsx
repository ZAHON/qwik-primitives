import type { CodeBlockSingleProps } from './code-block-single.types';
import { component$ } from '@builder.io/qwik';
import { SyntaxHighlighter } from '@/components/syntax-highlighter';

export const CodeBlockSingle = component$<CodeBlockSingleProps>((props) => {
  const { code, withCopyButton = true, ...others } = props;

  return <SyntaxHighlighter code={code} withCopyButton={withCopyButton} {...others}></SyntaxHighlighter>;
});
