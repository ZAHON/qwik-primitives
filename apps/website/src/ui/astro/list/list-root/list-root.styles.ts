import { cva } from 'class-variance-authority';

export const listRootStyles = cva(['flex', 'flex-col', 'gap-y-1', 'list-outside', 'marker:text-default-solid-12'], {
  variants: {
    as: {
      ul: ['list-[circle]'],
      ol: ['list-decimal'],
    },
    size: {
      '1': ['pl-3.5', 'text-1'],
      '2': ['pl-4', 'text-2'],
      '3': ['pl-4.5', 'text-3'],
      '4': ['pl-5', 'text-4'],
      '5': ['pl-5.5', 'text-5'],
      '6': ['pl-6', 'text-6'],
      '7': ['pl-6.5', 'text-7'],
      '8': ['pl-7.5', 'text-8'],
      '9': ['pl-12', 'text-9'],
    },
    highContrast: {
      false: ['text-default-alpha-11'],
      true: ['text-default-solid-12'],
    },
  },
});
