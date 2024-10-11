import { extendTailwindMerge } from 'tailwind-merge';

const isArbitraryValue = (classPart: string) => /^\[.+\]$/.test(classPart);

export const twm = extendTailwindMerge({
  override: {
    classGroups: {
      'font-size': [
        'text-1',
        'text-2',
        'text-3',
        'text-4',
        'text-5',
        'text-6',
        'text-7',
        'text-8',
        'text-9',
        'text-inherit',
        { text: [isArbitraryValue] },
      ],
      leading: [
        'leading-1',
        'leading-2',
        'leading-3',
        'leading-4',
        'leading-5',
        'leading-6',
        'leading-7',
        'leading-8',
        'leading-9',
        'leading-inherit',
        { leading: [isArbitraryValue] },
      ],
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
        { tracking: [isArbitraryValue] },
      ],
    },
  },
});
