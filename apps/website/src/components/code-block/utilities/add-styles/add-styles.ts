import type { ShikiTransformer } from 'shiki';

export function addStyles(): ShikiTransformer {
  return {
    pre(node) {
      node.properties['class'] = [
        'py-3',
        'px-4',
        'text-[0.9025rem]',
        'leading-3',
        'tracking-[-0.007em]',
        'overflow-x-auto',
        'rounded-[var(--radius-4)]',
        'selection:bg-primary-selection',
        'focus:outline-none',
      ];
    },
    code(node) {
      node.properties['class'] = ['min-w-full', 'w-fit', 'block'];
    },
    line(node) {
      node.properties['class'] = undefined;
    },
  };
}
