import { cva } from 'class-variance-authority';

export const codeRootStyles = cva(
  [
    'h-fit',
    'inline-block',
    'pt-[0.05em]',
    'pr-[0.25em]',
    'pb-[0em]',
    'pl-[0.25em]',
    'box-border',
    'font-mono',
    'text-[calc(calc(1em*0.95)*0.95)]',
    'leading-[inherit]',
    '-tracking-[0.007]',
    'rounded-[calc((0.5px+0.2em)*var(--radius-factor))]',

    'motion-safe:transition',
    'motion-safe:duration-200',
  ],
  {
    variants: {
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
      // color, variant and group-hover/link / group-active/link

      // variant solid and highContrast
      {
        variant: 'solid',
        highContrast: false,
        class: ['group-active/link:brightness-[1.08]'],
      },
      {
        variant: 'solid',
        highContrast: true,
        class: [
          'group-hover/link:contrast-[0.88]',
          'group-hover/link:saturate-[1.3]',
          'group-hover/link:brightness-[1.18]',
          'group-active/link:brightness-[0.95]',
          'group-active/link:saturate-[1.2]',
        ],
      },

      // color default
      {
        color: 'default',
        variant: 'solid',
        highContrast: false,
        class: ['group-hover/link:bg-default-10'],
      },
      {
        color: 'default',
        variant: 'solid',
        highContrast: true,
        class: ['group-hover/link:bg-default-12'],
      },
      {
        color: 'default',
        variant: 'soft',
        class: ['group-hover/link:bg-default-4', 'group-active/link:bg-default-5'],
      },

      // color primary
      {
        color: 'primary',
        variant: 'solid',
        highContrast: false,
        class: ['group-hover/link:bg-primary-10'],
      },
      {
        color: 'primary',
        variant: 'solid',
        highContrast: true,
        class: ['group-hover/link:bg-primary-12'],
      },
      {
        color: 'primary',
        variant: 'soft',
        class: ['group-hover/link:bg-primary-4', 'group-active/link:bg-primary-5'],
      },

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
