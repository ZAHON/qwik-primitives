import { cva } from 'class-variance-authority';

export const codePresentationHeroStyles = cva([
  'relative',
  'py-24',
  'px-4',
  'w-full',
  'flex',
  'justify-center',
  'items-center',
  'rounded-t-[var(--radius-4)]',

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
  'after:[background-image:var(--code-presentation-hero-background-image)]',
]);
