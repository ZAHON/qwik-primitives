import { MDXH2 } from './mdx-h2';
import { MDXH3 } from './mdx-h3';
import { MDXP } from './mdx-p';
import { MDXCode } from './mdx-code';
import { MDXUl } from './mdx-ul';
import { MDXCodeBlock } from './mdx-code-block';

export const MDXComponents = {
  h2: MDXH2.Root,
  h3: MDXH3.Root,
  p: MDXP.Root,
  code: MDXCode.Root,
  ul: MDXUl.Root,
  pre: MDXCodeBlock,
};
