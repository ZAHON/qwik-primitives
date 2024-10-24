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
        '1': ['text-[calc(var(--font-size-1)*0.8)]', 'tracking-1'],
        '2': ['text-[calc(var(--font-size-2)*0.8)]', 'tracking-2'],
        '3': ['text-[calc(var(--font-size-3)*0.8)]', 'tracking-3'],
        '4': ['text-[calc(var(--font-size-4)*0.8)]', 'tracking-4'],
        '5': ['text-[calc(var(--font-size-5)*0.8)]', 'tracking-5'],
        '6': ['text-[calc(var(--font-size-6)*0.8)]', 'tracking-6'],
        '7': ['text-[calc(var(--font-size-7)*0.8)]', 'tracking-7'],
        '8': ['text-[calc(var(--font-size-8)*0.8)]', 'tracking-8'],
        '9': ['text-[calc(var(--font-size-9)*0.8)]', 'tracking-9'],
      },
    },
  }
);
