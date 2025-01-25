import { marked } from 'marked';
import { twm } from '@/utilities/twm';
import { parseKbdSyntax } from '@/utilities/parse-kbd-syntax';
import { textRootStyles } from '@/ui/astro/text/text-root/text-root.styles';
import { codeRootStyles } from '@/ui/astro/code/code-root/code-root.styles';
import { listRootStyles } from '@/ui/astro/list/list-root/list-root.styles';

export const parse = (description: string) => {
  marked.use({
    renderer: {
      paragraph(this, { tokens }) {
        const text = this.parser.parseInline(tokens);
        return `<p class="${twm(textRootStyles({ size: '2', highContrast: true }))}">${text}</p>`;
      },
      codespan(this, { text }) {
        return `<code class="${twm(codeRootStyles({ size: '2', variant: 'soft', color: 'primary', highContrast: false }))}">${text}</code>`;
      },
      list(this, { ordered, items }) {
        const text = items.reduce((acc, { tokens }) => {
          return `${acc} <li>${this.parser.parseInline(tokens)}</li>`;
        }, '');

        if (ordered) {
          return `<ol class="${twm(listRootStyles({ as: 'ol', size: '2', highContrast: true }))}">${text}</ol>`;
        } else {
          return `<ul class="${twm(listRootStyles({ as: 'ul', size: '2', highContrast: true }))}">${text}</ul>`;
        }
      },
      listitem(this, { tokens }) {
        const text = this.parser.parseInline(tokens);
        return `<li>${text}</li>`;
      },
    },
  });

  const content = parseKbdSyntax(marked.parse(description, { async: false }), { size: '2' });

  return content;
};
