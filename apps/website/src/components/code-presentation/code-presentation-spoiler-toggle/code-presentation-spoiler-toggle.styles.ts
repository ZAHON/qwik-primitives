import { cva } from 'class-variance-authority';

export const codePresentationSpoilerToggleStyles = cva([
  'group/code-presentation-spoiler-toggle',

  'enabled:data-[state=open]:bg-default-alpha-3',
  'enabled:hover:data-[state=open]:bg-default-alpha-4',
  'enabled:active:data-[state=open]:bg-default-alpha-5',
]);
