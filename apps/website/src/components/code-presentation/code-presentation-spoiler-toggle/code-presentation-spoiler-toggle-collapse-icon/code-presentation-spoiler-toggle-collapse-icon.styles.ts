import { cva } from 'class-variance-authority';

export const codePresentationSpoilerToggleCollapseIconStyles = cva([
  'size-[0.9375rem]',
  'absolute',
  'scale-0',
  'opacity-0',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'group-data-[state=open]/code-presentation-spoiler-toggle:scale-100',
  'group-data-[state=open]/code-presentation-spoiler-toggle:opacity-100',
]);
