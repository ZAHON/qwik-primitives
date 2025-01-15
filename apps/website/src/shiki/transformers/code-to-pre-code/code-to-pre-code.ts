import type { ShikiTransformer } from 'shiki';

export const codeToPreCode = (): ShikiTransformer => {
  return {
    code(node) {
      node.tagName = 'precode';
    },
  };
};
