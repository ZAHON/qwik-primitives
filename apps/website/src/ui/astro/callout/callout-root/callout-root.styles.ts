import { cva } from 'class-variance-authority';

export const calloutRootStyles = cva(['flex', 'items-start'], {
  variants: {
    size: {
      '1': ['p-3', 'gap-x-2', 'text-2', '[--callout-icon-height:1.25rem]', 'rounded-[var(--radius-3)]'],
      '2': ['p-4', 'gap-x-3', 'text-2', '[--callout-icon-height:1.25rem]', 'rounded-[var(--radius-4)]'],
      '3': ['p-6', 'gap-x-4', 'text-3', '[--callout-icon-height:1.5rem]', 'rounded-[var(--radius-5)]'],
    },
    color: {
      default: ['bg-default-3', 'selection:bg-primary-selection'],
      primary: ['bg-primary-3', 'selection:bg-primary-selection'],
      success: ['bg-success-3', 'selection:bg-success-selection'],
      warning: ['bg-warning-3', 'selection:bg-warning-selection'],
      danger: ['bg-danger-3', 'selection:bg-danger-selection'],
    },
    highContrast: {
      false: [''],
      true: [''],
    },
  },
  compoundVariants: [
    // color default
    {
      color: 'default',
      highContrast: false,
      class: ['text-default-11'],
    },
    {
      color: 'default',
      highContrast: true,
      class: ['text-default-12'],
    },

    // color primary
    {
      color: 'primary',
      highContrast: false,
      class: ['text-primary-11'],
    },
    {
      color: 'primary',
      highContrast: true,
      class: ['text-primary-12'],
    },

    // color success
    {
      color: 'success',
      highContrast: false,
      class: ['text-success-11'],
    },
    {
      color: 'success',
      highContrast: true,
      class: ['text-success-12'],
    },

    // color warning
    {
      color: 'warning',
      highContrast: false,
      class: ['text-warning-11'],
    },
    {
      color: 'warning',
      highContrast: true,
      class: ['text-warning-12'],
    },

    // color danger
    {
      color: 'danger',
      highContrast: false,
      class: ['text-danger-11'],
    },
    {
      color: 'danger',
      highContrast: true,
      class: ['text-danger-12'],
    },
  ],
});
