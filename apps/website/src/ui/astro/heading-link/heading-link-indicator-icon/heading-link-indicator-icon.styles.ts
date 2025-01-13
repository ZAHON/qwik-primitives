import { cva } from 'class-variance-authority';

export const headingLinkIndicatorIconStyles = cva([''], {
  variants: {
    height: {
      true: [''],
      false: ['h-[var(--heading-link-indicator-icon-size)]'],
    },
    width: {
      true: [''],
      false: ['w-[var(--heading-link-indicator-icon-size)]'],
    },
  },
});
