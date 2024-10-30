import { cva } from 'class-variance-authority';

export const codeBlockStyles = cva(
  [
    'relative',
    'bg-panel',
    'border',
    'border-default-alpha-6',
    'rounded-[var(--radius-4)]',
    'overflow-hidden',

    'before:content-[""]',
    'before:pointer-events-none',
    'before:select-none',
    'before:absolute',
    'before:z-10',
    'before:block',
    'before:inset-0',
    'before:rounded-[inherit]',

    'has-[pre:focus-visible]:before:outline',
    'has-[pre:focus-visible]:before:outline-2',
    'has-[pre:focus-visible]:before:-outline-offset-1',
    'has-[pre:focus-visible]:before:outline-primary-focus',
  ],
  {
    variants: {
      type: {
        single: [''],
        tabs: ['before:top-10', 'before:rounded-t-none'],
      },
    },
  }
);
