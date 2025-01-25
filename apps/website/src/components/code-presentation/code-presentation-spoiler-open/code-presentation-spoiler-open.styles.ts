import { cva } from 'class-variance-authority';

export const codePresentationSpoilerOpenStyles = cva([
  'relative',
  'pointer-events-auto',

  'before:content-[""]',
  'before:absolute',
  'before:-z-10',
  'before:inset-0',
  'before:rounded-[inherit]',
  'before:bg-panel',
]);
