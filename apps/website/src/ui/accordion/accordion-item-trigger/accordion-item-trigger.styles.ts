import { cva } from 'class-variance-authority';

export const accordionItemTriggerStyles = cva(
  [
    'w-full',
    'flex',
    'justify-between',
    'items-center',
    'cursor-default',
    'select-none',
    'bg-panel',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'focus:outline-none',

    'hover:enabled:bg-default-alpha-2',

    'enabled:active:brightness-[0.92]',
    'enabled:active:saturate-[1.1]',

    'dark:enabled:active:brightness-[1.08]',
    'dark:enabled:active:saturate-[1]',

    'data-[state=open]:shadow-[inset_0_-1px_var(--color-default-alpha-6)]',
  ],
  {
    variants: {
      size: {
        '1': ['h-9', 'py-2', 'px-2'],
        '2': ['h-11', 'py-3', 'px-3'],
        '3': ['h-12', 'py-3', 'px-4'],
      },
    },
  }
);
