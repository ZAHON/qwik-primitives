import type { ShikiTransformer } from 'shiki';

export const removeLineClassAttribute = (): ShikiTransformer => {
  return {
    line(node) {
      node.properties['class'] = undefined;
    },
  };
};
