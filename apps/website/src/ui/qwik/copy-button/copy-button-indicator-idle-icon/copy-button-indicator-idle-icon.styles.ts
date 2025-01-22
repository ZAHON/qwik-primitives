import { cva } from 'class-variance-authority';

export const copyButtonIndicatorIdleIconStyles = cva(
  [
    'absolute',
    'scale-100',
    'opacity-100',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'group-data-[copied]/copy-button:scale-0',
    'group-data-[copied]/copy-button:opacity-0',
  ],
  {
    variants: {
      size: {
        '1': ['size-[0.9375rem]'],
        '2': ['size-4'],
        '3': ['size-4.5'],
        '4': ['size-5'],
      },
    },
  }
);
