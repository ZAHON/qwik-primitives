import { cva } from 'class-variance-authority';

export const breadcrumbsSeparatorStyles = cva([''], {
  variants: {
    color: {
      default: ['text-default-alpha-11'],
      primary: ['text-primary-alpha-11'],
    },
  },
});
