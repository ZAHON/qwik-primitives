import { extendTailwindMerge } from 'tailwind-merge';

export const twm = extendTailwindMerge({
  override: {
    classGroups: {
      'font-size': ['text-1', 'text-2', 'text-3', 'text-4', 'text-5', 'text-6', 'text-7', 'text-8', 'text-9'],
    },
  },
});
