import { extendTailwindMerge } from 'tailwind-merge';

export const twm = extendTailwindMerge({
  override: {
    classGroups: {
      'font-size': ['text-1', 'text-2', 'text-3', 'text-4', 'text-5', 'text-6', 'text-7', 'text-8', 'text-9'],
      tracking: [
        'tracking-1',
        'tracking-2',
        'tracking-3',
        'tracking-4',
        'tracking-5',
        'tracking-6',
        'tracking-7',
        'tracking-8',
        'tracking-9',
        'tracking-inherit',
      ],
    },
  },
});
