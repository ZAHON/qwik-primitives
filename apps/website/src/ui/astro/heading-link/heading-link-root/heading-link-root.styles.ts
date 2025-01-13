import { cva } from 'class-variance-authority';

export const headingLinkRootStyles = cva(['font-bold', 'text-balance'], {
  variants: {
    size: {
      '1': ['text-1', '[--heading-link-indicator-icon-size:0.625rem]'],
      '2': ['text-2', '[--heading-link-indicator-icon-size:0.75rem]'],
      '3': ['text-3', '[--heading-link-indicator-icon-size:0.875rem]'],
      '4': ['text-4', '[--heading-link-indicator-icon-size:1rem]'],
      '5': ['text-5', '[--heading-link-indicator-icon-size:1.125rem]'],
      '6': ['text-6', '[--heading-link-indicator-icon-size:1.25rem]'],
      '7': ['text-7', '[--heading-link-indicator-icon-size:1.375rem]'],
      '8': ['text-8', '[--heading-link-indicator-icon-size:1.8125rem]'],
      '9': ['text-9', '[--heading-link-indicator-icon-size:3.375rem]'],
    },
    highContrast: {
      false: ['text-default-alpha-11'],
      true: ['text-default-solid-12'],
    },
  },
});
