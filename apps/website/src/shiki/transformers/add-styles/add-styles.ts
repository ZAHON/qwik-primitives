import type { ShikiTransformer } from 'shiki';
import { twm } from '@/utilities/twm';
import { scrollbarStyles } from '@/styles/shared/scrollbar';
import { preStyles, codeStyles } from './add-styles.styles';

export const addStyles = (preClass?: string): ShikiTransformer => {
  return {
    pre(node) {
      node.properties['class'] = twm(scrollbarStyles({ size: '1' }), preStyles(), preClass);
    },
    code(node) {
      node.properties['class'] = codeStyles();
    },
  };
};
