import { cva } from 'class-variance-authority';

export const codePresentationHeroStyles = cva(
  ['relative', 'px-4', 'w-full', 'flex', 'items-center', 'rounded-t-[var(--radius-4)]'],
  {
    variants: {
      heroWithGradient: {
        false: ['border-t', 'border-l', 'border-r', 'border-default-alpha-6'],
        true: ['bg-gradient-to-tr', 'from-[#18B6F6]', 'to-[#AC7EF4]'],
      },
      heroPaddingY: {
        false: ['py-4'],
        true: ['py-24'],
      },
      heroJustify: {
        start: ['justify-start'],
        center: ['justify-center'],
        end: ['justify-end'],
      },
    },
  }
);
