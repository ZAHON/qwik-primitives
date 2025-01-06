import { cva } from 'class-variance-authority';

export const tabsContentStyles = cva(['focus:outline-none', 'focus-visible:outline', 'focus-visible:outline-2'], {
  variants: {
    color: {
      default: ['focus-visible:outline-primary-focus'],
      primary: ['focus-visible:outline-primary-focus'],
      success: ['focus-visible:outline-success-focus'],
      warning: ['focus-visible:outline-warning-focus'],
      danger: ['focus-visible:outline-danger-focus'],
    },
  },
});
