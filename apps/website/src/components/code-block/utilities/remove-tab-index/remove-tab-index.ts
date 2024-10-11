import type { ShikiTransformer } from 'shiki';

export function removeTabIndex(): ShikiTransformer {
  return {
    pre(node) {
      node.properties['tabindex'] = undefined;
    },
  };
}
