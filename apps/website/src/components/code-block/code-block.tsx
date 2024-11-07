import type { CodeBlockProps } from './code-block.types';
import type { CodeBlockSingleProps } from './code-block-single';
import type { CodeBlockTabsProps } from './code-block-tabs';
import { component$ } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { CodeBlockSingle } from './code-block-single';
import { CodeBlockTabs } from './code-block-tabs';
import { codeBlockStyles } from './code-block.styles';

export const CodeBlock = component$<CodeBlockProps>((props) => {
  const { type, class: className, ...others } = props;

  return (
    <div class={twm(codeBlockStyles(), className)}>
      {type === 'single' && <CodeBlockSingle {...(others as CodeBlockSingleProps)} />}
      {type === 'tabs' && <CodeBlockTabs {...(others as CodeBlockTabsProps)} />}
    </div>
  );
});
