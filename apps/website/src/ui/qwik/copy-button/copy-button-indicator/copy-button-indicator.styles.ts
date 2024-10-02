import { cva } from 'class-variance-authority';

export const copyButtonIndicatorStyles = cva(['relative', 'block'], {
  variants: {
    size: {
      '1': ['size-3.5'],
      '2': ['size-4'],
      '3': ['size-4.5'],
      '4': ['size-5'],
    },
  },
});
