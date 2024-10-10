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
        class: ['bg-default-alpha-3', 'text-default-alpha-11'],
      },
      {
        color: 'default',
        variant: 'soft',
        highContrast: true,
        class: ['bg-default-alpha-3', 'text-default-solid-12'],
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
        class: ['bg-primary-alpha-3', 'text-primary-alpha-11'],
      },
      {
        color: 'primary',
        variant: 'soft',
        highContrast: true,
        class: ['bg-primary-alpha-3', 'text-primary-solid-12'],
      },
    ],
  }
);
