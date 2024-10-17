import { cva } from 'class-variance-authority';

export const dataListLabelStyles = cva(['before:content-["]'], {
  variants: {
    orientation: {
      horizontal: ['min-w-[7.5rem]'],
      vertical: ['min-w-0'],
    },
    highContrast: {
      false: ['text-default-alpha-11'],
      true: ['text-default-solid-12'],
    },
  },
});
