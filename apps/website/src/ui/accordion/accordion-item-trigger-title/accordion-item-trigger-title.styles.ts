import { cva } from 'class-variance-authority';

export const accordionItemTriggerTitleStyles = cva(
  ['text-left', 'font-medium', 'text-balance', 'text-default-solid-12', 'line-clamp-1'],
  {
    variants: {
      size: {
        '1': ['text-2'],
        '2': ['text-2'],
        '3': ['text-3'],
      },
    },
  }
);
