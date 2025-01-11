import { cva } from 'class-variance-authority';

export const badgeRootStyles = cva(
  ['h-fit', 'shrink-0', 'whitespace-nowrap', 'inline-flex', 'justify-center', 'items-center', 'font-medium'],
  {
    variants: {
      size: {
        '1': ['py-0.5', 'px-1.5', 'gap-x-1.5', 'text-1', 'rounded-[max(var(--radius-1),var(--radius-full))]'],
        '2': ['py-1', 'px-2', 'gap-x-1.5', 'text-1', 'rounded-[max(var(--radius-2),var(--radius-full))]'],
        '3': ['py-1', 'px-2.5', 'gap-x-2', 'text-2', 'rounded-[max(var(--radius-2),var(--radius-full))]'],
      },
      variant: {
        solid: [''],
        soft: [''],
      },
      color: {
        default: [''],
        primary: [''],
        success: [''],
        warning: [''],
        danger: [''],
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
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-default-solid-9',
          'text-default-contrast',
          'selection:bg-default-selection',
          'selection:text-default-solid-12',
        ],
      },
      {
        color: 'default',
        variant: 'solid',
        highContrast: true,
        class: [
          'bg-default-solid-12',
          'text-default-solid-1',
          'selection:bg-default-alpha-11',
          'selection:text-default-solid-1',
        ],
      },

      {
        color: 'default',
        variant: 'soft',
        highContrast: false,
        class: ['bg-default-alpha-3', 'text-default-alpha-11', 'selection:bg-primary-selection'],
      },
      {
        color: 'default',
        variant: 'soft',
        highContrast: true,
        class: ['bg-default-alpha-3', 'text-default-solid-12', 'selection:bg-primary-selection'],
      },

      // color primary
      {
        color: 'primary',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-primary-solid-9',
          'text-primary-contrast',
          'selection:bg-primary-selection',
          'selection:text-primary-solid-12',
        ],
      },
      {
        color: 'primary',
        variant: 'solid',
        highContrast: true,
        class: [
          'bg-primary-solid-12',
          'text-primary-solid-1',
          'selection:bg-primary-alpha-11',
          'selection:text-primary-solid-1',
        ],
      },

      {
        color: 'primary',
        variant: 'soft',
        highContrast: false,
        class: ['bg-primary-alpha-3', 'text-primary-alpha-11', 'selection:bg-primary-selection'],
      },
      {
        color: 'primary',
        variant: 'soft',
        highContrast: true,
        class: ['bg-primary-alpha-3', 'text-primary-solid-12', 'selection:bg-primary-selection'],
      },

      // color success
      {
        color: 'success',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-success-solid-9',
          'text-success-contrast',
          'selection:bg-success-selection',
          'selection:text-success-solid-12',
        ],
      },
      {
        color: 'success',
        variant: 'solid',
        highContrast: true,
        class: [
          'bg-success-solid-12',
          'text-success-solid-1',
          'selection:bg-success-alpha-11',
          'selection:text-success-solid-1',
        ],
      },

      {
        color: 'success',
        variant: 'soft',
        highContrast: false,
        class: ['bg-success-alpha-3', 'text-success-alpha-11', 'selection:bg-success-selection'],
      },
      {
        color: 'success',
        variant: 'soft',
        highContrast: true,
        class: ['bg-success-alpha-3', 'text-success-solid-12', 'selection:bg-success-selection'],
      },

      // color warning
      {
        color: 'warning',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-warning-solid-9',
          'text-warning-contrast',
          'selection:bg-warning-selection',
          'selection:text-warning-solid-12',
        ],
      },
      {
        color: 'warning',
        variant: 'solid',
        highContrast: true,
        class: [
          'bg-warning-solid-12',
          'text-warning-solid-1',
          'selection:bg-warning-alpha-11',
          'selection:text-warning-solid-1',
        ],
      },

      {
        color: 'warning',
        variant: 'soft',
        highContrast: false,
        class: ['bg-warning-alpha-3', 'text-warning-alpha-11', 'selection:bg-warning-selection'],
      },
      {
        color: 'warning',
        variant: 'soft',
        highContrast: true,
        class: ['bg-warning-alpha-3', 'text-warning-solid-12', 'selection:bg-warning-selection'],
      },

      // color danger
      {
        color: 'danger',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-danger-solid-9',
          'text-danger-contrast',
          'selection:bg-danger-selection',
          'selection:text-danger-solid-12',
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        highContrast: true,
        class: [
          'bg-danger-solid-12',
          'text-danger-solid-1',
          'selection:bg-danger-alpha-11',
          'selection:text-danger-solid-1',
        ],
      },

      {
        color: 'danger',
        variant: 'soft',
        highContrast: false,
        class: ['bg-danger-alpha-3', 'text-danger-alpha-11', 'selection:bg-danger-selection'],
      },
      {
        color: 'danger',
        variant: 'soft',
        highContrast: true,
        class: ['bg-danger-alpha-3', 'text-danger-solid-12', 'selection:bg-danger-selection'],
      },
    ],
  }
);
