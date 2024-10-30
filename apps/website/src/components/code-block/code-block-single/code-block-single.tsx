import type { CodeBlockSingleProps } from './code-block-single.types';
import { component$ } from '@builder.io/qwik';
import { CodeBlockSyntaxHighlighter } from '../code-block-syntax-highlighter';
import { CodeBlockCopyButton } from '../code-block-copy-button';

export const CodeBlockSingle = component$<CodeBlockSingleProps>((props) => {
  const { code, withCopyButton = true, ...others } = props;

  return (
    <>
      <CodeBlockSyntaxHighlighter code={code} {...others}>
        {withCopyButton && <CodeBlockCopyButton value={code} />}
      </CodeBlockSyntaxHighlighter>
    </>
  );
});
