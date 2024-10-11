import type { ShikiTransformer } from 'shiki';

export function metaWordHighlight(): ShikiTransformer {
  return {
    preprocess(code, options) {
      if (!this.options.meta?.__raw) return;

      const parseMetaHighlightWords = (meta: string): string[] => {
        if (!meta) return [];

        const match = Array.from(meta.matchAll(/\/((?:\\.|[^/])+)\//g));

        return match.map((v) => v[1].replace(/\\(.)/g, '$1'));
      };

      const findAllSubstringIndexes = (str: string, substr: string): number[] => {
        const indexes = [];
        let i = -1;

        // eslint-disable-next-line no-cond-assign
        while ((i = str.indexOf(substr, i + 1)) !== -1) indexes.push(i);

        return indexes;
      };

      const words = parseMetaHighlightWords(this.options.meta.__raw);

      options.decorations ||= [];

      for (const word of words) {
        const indexes = findAllSubstringIndexes(code, word);

        for (const index of indexes) {
          options.decorations.push({
            start: index,
            end: index + word.length,
            properties: {
              class: [
                'px-[0.25em]',
                'h-full',
                'inline-block',
                'bg-primary-alpha-5',
                'rounded-[calc((0.03125rem+0.2em)*var(--radius-factor))]',
              ],
            },
          });
        }
      }
    },
  };
}
