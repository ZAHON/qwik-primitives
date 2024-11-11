import { cva } from 'class-variance-authority';

export const accordionItemContentInnerStyles = cva(['bg-default-alpha-2'], {
  variants: {
    size: {
      '1': ['py-3', 'px-2'],
      '2': ['py-4', 'px-3'],
      '3': ['py-4', 'px-4'],
    },
  },
});
