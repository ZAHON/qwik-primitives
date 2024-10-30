import type { MetaHighlightParams } from './meta-highlight.types';
import type { ShikiTransformer } from 'shiki';
import { twm } from '@/utilities/twm';
import { highlighLineStyles } from './meta-highlight.styles';

export function metaHighlight(params: MetaHighlightParams): ShikiTransformer {
  const { highlighLineClass } = params;

  return {
    line(node, line) {
      if (!this.options.meta?.__raw) return;

      const parseMetaHighlightString = (meta: string): number[] | null => {
        if (!meta) return null;

        const match = meta.match(/\{([\d,-]+)\}/);

        if (!match) return null;

        const lines = match[1].split(',').flatMap((v) => {
          const num = v.split('-').map((v) => Number.parseInt(v, 10));
          if (num.length === 1) return [num[0]];
          else return Array.from({ length: num[1] - num[0] + 1 }, (_, i) => i + num[0]);
        });

        return lines;
      };

      const symbol = Symbol('highlighted-lines');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this.meta as any)[symbol] ||= parseMetaHighlightString(this.options.meta.__raw);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lines: number[] = (this.meta as any)[symbol] || [];

      if (lines.includes(line)) {
        this.addClassToHast(node, twm(highlighLineStyles(), highlighLineClass));
      }

      return node;
    },
  };
}
