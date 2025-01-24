import { MDXH2 } from './mdx-h2';
import { MDXH3 } from './mdx-h3';
import { MDXP } from './mdx-p';
import { MDXCode } from './mdx-code';
import { MDXUl } from './mdx-ul';
import { MDXCodeBlock } from './mdx-code-block';
import { MDXPreCode } from './mdx-pre-code';
import { MDXA } from './mdx-a';

export const MDXComponents = {
  h2: MDXH2,
  h3: MDXH3,
  p: MDXP,
  code: MDXCode,
  ul: MDXUl,
  pre: MDXCodeBlock,
  precode: MDXPreCode,
  a: MDXA,
};
