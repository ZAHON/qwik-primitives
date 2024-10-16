import { cva } from 'class-variance-authority';

export const kbdRootStyles = cva(
  [
    'h-fit',
    'min-w-[1.75em]',
    'pb-[0.05em]',
    'px-[0.5em]',
    'box-border',
    'relative',
    'top-[-0.03em]',
    'shrink-0',
    'inline-flex',
    'justify-center',
    'items-center',
    'align-text-top',
    'whitespace-nowrap',
    'select-none',
    'text-default-solid-12',
    'bg-default-solid-1',
    'shadow-kbd',
    'font-sans',
    'font-normal',
    'text-[0.75em]',
    'leading-[1.7em]',
    'tracking-[0em]',
    '[word-spacing:-0.1em]',
    'rounded-[calc(var(--radius-factor)*0.35em)]',
  ],
  {
    variants: {
      size: {
        '1': ['text-[0.6rem]', 'tracking-1'],
        '2': ['text-[0.7rem]', 'tracking-2'],
        '3': ['text-[0.8rem]', 'tracking-3'],
        '4': ['text-[0.9rem]', 'tracking-4'],
        '5': ['text-[1rem]', 'tracking-5'],
        '6': ['text-[1.2rem]', 'tracking-6'],
        '7': ['text-[1.4rem]', 'tracking-7'],
        '8': ['text-[1.75rem]', 'tracking-8'],
        '9': ['text-[3rem]', 'tracking-9'],
      },
    },
  }
);
