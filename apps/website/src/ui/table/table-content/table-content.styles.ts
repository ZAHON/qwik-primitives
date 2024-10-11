import { cva } from 'class-variance-authority';

export const tableContentStyles = cva(
  ['h-0', 'w-full', 'text-left', 'align-top', 'border-collapse', 'border-spacing-0'],
  {
    variants: {
      layout: {
        auto: ['table-auto'],
        fixed: ['table-fixed'],
      },
    },
  }
);
