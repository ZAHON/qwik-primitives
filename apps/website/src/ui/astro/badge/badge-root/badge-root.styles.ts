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
        class: ['bg-default-9', 'text-default-contrast', 'selection:bg-default-selection', 'selection:text-default-12'],
      },
      {
        color: 'default',
        variant: 'solid',
        highContrast: true,
        class: ['bg-default-12', 'text-default-1', 'selection:bg-default-11', 'selection:text-default-1'],
      },

      {
        color: 'default',
        variant: 'soft',
        highContrast: false,
        class: ['bg-default-3', 'text-default-11', 'selection:bg-default-selection'],
      },
      {
        color: 'default',
        variant: 'soft',
        highContrast: true,
        class: ['bg-default-3', 'text-default-12', 'selection:bg-default-selection'],
      },

      // color primary
      {
        color: 'primary',
        variant: 'solid',
        highContrast: false,
        class: ['bg-primary-9', 'text-primary-contrast', 'selection:bg-primary-selection', 'selection:text-primary-12'],
      },
      {
        color: 'primary',
        variant: 'solid',
        highContrast: true,
        class: ['bg-primary-12', 'text-primary-1', 'selection:bg-primary-11', 'selection:text-primary-1'],
      },

      {
        color: 'primary',
        variant: 'soft',
        highContrast: false,
        class: ['bg-primary-3', 'text-primary-11', 'selection:bg-primary-selection'],
      },
      {
        color: 'primary',
        variant: 'soft',
        highContrast: true,
        class: ['bg-primary-3', 'text-primary-12', 'selection:bg-primary-selection'],
      },
    ],
  }
);
