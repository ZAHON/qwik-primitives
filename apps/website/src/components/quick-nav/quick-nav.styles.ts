import { cva } from 'class-variance-authority';

export const quickNavStyles = cva([''], {
  variants: {
    variant: {
      mobile: [''],
      desktop: ['hidden', 'lg:block'],
    },
  },
});
