import type { AddStylesParams } from './add-styles.types';
import type { ShikiTransformer } from 'shiki';
import { twm } from '@/utilities/twm';
import { preStyles, codeStyles, lineStyles } from './add-styles.styles';

export function addStyles(params: AddStylesParams): ShikiTransformer {
  const { preClass, codeClass, lineClass } = params;

  return {
    pre(node) {
      node.properties['class'] = twm(preStyles(), preClass);
    },
    code(node) {
      node.properties['class'] = twm(codeStyles(), codeClass);
    },
    line(node) {
      node.properties['class'] = undefined;
      node.properties['class'] = twm(lineStyles(), lineClass);
    },
  };
}
