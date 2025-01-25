import type { ShikiTransformer } from 'shiki';

export const removePreTabindex = (): ShikiTransformer => {
  return {
    pre(node) {
      node.properties['tabindex'] = undefined;
    },
  };
};
