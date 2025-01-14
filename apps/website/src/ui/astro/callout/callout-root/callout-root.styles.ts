import { cva } from 'class-variance-authority';

export const calloutRootStyles = cva(['flex'], {
  variants: {
    size: {
      '1': ['p-3', 'gap-x-2', 'text-2', 'rounded-[var(--radius-3)]', '[--callout-icon-size:1.25rem]'],
      '2': ['p-4', 'gap-x-2', 'text-2', 'rounded-[var(--radius-4)]', '[--callout-icon-size:1.25rem]'],
      '3': ['p-6', 'gap-x-3', 'text-3', 'rounded-[var(--radius-5)]', '[--callout-icon-size:1.5rem]'],
    },
    color: {
      default: ['bg-default-alpha-3', 'selection:bg-primary-selection'],
      primary: ['bg-primary-alpha-3', 'selection:bg-primary-selection'],
      success: ['bg-success-alpha-3', 'selection:bg-success-selection'],
      warning: ['bg-warning-alpha-3', 'selection:bg-warning-selection'],
      danger: ['bg-danger-alpha-3', 'selection:bg-danger-selection'],
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
      class: ['text-default-alpha-11'],
    },
    {
      color: 'default',
      highContrast: true,
      class: ['text-default-solid-12'],
    },

    // color primary
    {
      color: 'primary',
      highContrast: false,
      class: ['text-primary-alpha-11'],
    },
    {
      color: 'primary',
      highContrast: true,
      class: ['text-primary-solid-12'],
    },

    // color success
    {
      color: 'success',
      highContrast: false,
      class: ['text-success-alpha-11'],
    },
    {
      color: 'success',
      highContrast: true,
      class: ['text-success-solid-12'],
    },

    // color warning
    {
      color: 'warning',
      highContrast: false,
      class: ['text-warning-alpha-11'],
    },
    {
      color: 'warning',
      highContrast: true,
      class: ['text-warning-solid-12'],
    },

    // color danger
    {
      color: 'danger',
      highContrast: false,
      class: ['text-danger-alpha-11'],
    },
    {
      color: 'danger',
      highContrast: true,
      class: ['text-danger-solid-12'],
    },
  ],
});
