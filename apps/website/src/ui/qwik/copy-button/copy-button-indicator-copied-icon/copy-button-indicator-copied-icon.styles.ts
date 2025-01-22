import { cva } from 'class-variance-authority';

export const copyButtonIndicatorCopiedIconStyles = cva(
  [
    'absolute',
    'scale-0',
    'opacity-0',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'group-data-[copied]/copy-button:scale-100',
    'group-data-[copied]/copy-button:opacity-100',
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
