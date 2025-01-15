import { cva } from 'class-variance-authority';

export const mdxCodeBlockCopyButtonStyles = cva([
  'absolute',
  'top-2',
  'right-2',
  'opacity-0',
  'hidden',

  'md:inline-flex',

  'focus-visible:opacity-100',

  'group-hover/code-block:opacity-100',
]);
