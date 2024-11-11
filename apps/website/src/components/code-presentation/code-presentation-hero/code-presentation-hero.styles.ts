import { cva } from 'class-variance-authority';

// 'bg-gradient-to-tr',
// 'from-[#18B6F6]',
// 'to-[#AC7EF4]',

export const codePresentationHeroStyles = cva(
  ['relative', 'px-4', 'w-full', 'flex', 'items-center', 'rounded-t-[var(--radius-4)]'],
  {
    variants: {
      heroWithGradient: {
        false: ['border-t', 'border-l', 'border-r', 'border-default-alpha-6'],
        true: [
          'before:content-[""]',
          'before:content-[""]',
          'before:absolute',
          'before:-z-10',
          'before:inset-0',
          'before:rounded-[inherit]',
          'before:bg-gradient-to-tr',
          'before:from-[#18B6F6]',
          'before:to-[#AC7EF4]',

          'after:content-[""]',
          'after:absolute',
          'after:-z-10',
          'after:inset-0',
          'after:rounded-[inherit]',
          'after:[background-image:var(--dot-icon)]',
        ],
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
