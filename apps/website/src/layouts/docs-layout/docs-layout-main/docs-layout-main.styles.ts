import { cva } from 'class-variance-authority';

export const docsLayoutMainStyles = cva([
  'px-4',
  'w-full',

  'lg:pl-16',
  'lg:w-[calc(100%-16rem)]',

  'xl:pr-16',
  'xl:w-[calc(100%-32rem)]',
]);
