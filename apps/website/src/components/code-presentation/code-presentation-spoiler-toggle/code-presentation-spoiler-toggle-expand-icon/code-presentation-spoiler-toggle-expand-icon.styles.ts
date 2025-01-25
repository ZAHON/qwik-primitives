import { cva } from 'class-variance-authority';

export const codePresentationSpoilerToggleExpandIconStyles = cva([
  'size-[0.9375rem]',
  'absolute',
  'scale-100',
  'opacity-100',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'group-data-[state=open]/code-presentation-spoiler-toggle:scale-0',
  'group-data-[state=open]/code-presentation-spoiler-toggle:opacity-0',
]);
