import { cva } from 'class-variance-authority';

export const tableCaptionStyles = cva([''], {
  variants: {
    side: {
      top: ['caption-top'],
      bottom: ['caption-bottom'],
    },
    visuallyHidden: {
      true: ['sr-only'],
    },
  },
});
