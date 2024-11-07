import { cva } from 'class-variance-authority';

export const codePresentationCodeBlockStyles = cva([
  'border-none',
  'rounded-t-none',
  'has-[pre:focus-visible]:outline-none',
]);
