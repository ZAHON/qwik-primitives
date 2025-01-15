import { cva } from 'class-variance-authority';

export const mdxCodeBlockStyles = cva([
  'group/code-block',
  'relative',
  'my-6',
  'bg-panel',
  'border',
  'border-default-alpha-6',
  'rounded-[var(--radius-4)]',
  'overflow-hidden',

  'has-[pre:focus-visible]:outline',
  'has-[pre:focus-visible]:outline-2',
  'has-[pre:focus-visible]:-outline-offset-1',
  'has-[pre:focus-visible]:outline-primary-focus',
]);
