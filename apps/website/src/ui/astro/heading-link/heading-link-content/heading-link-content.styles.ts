import { cva } from 'class-variance-authority';

export const headingLinkContentStyles = cva([
  'group/heading-link-content',
  'inline-flex',
  'items-center',
  'gap-x-[calc(1em*0.3)]',
  'cursor-pointer',
  'decoration-[min(0.125rem,max(0.0625rem,0.05em))]',
  'decoration-default-alpha-5',
  'underline-offset-[calc(0.025em+0.125rem)]',

  'focus:outline-none',
  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:outline-primary-focus',
  'focus-visible:no-underline',
  'focus-visible:rounded-[calc(0.07em*var(--radius-factor))]',

  'hover:underline',
]);
