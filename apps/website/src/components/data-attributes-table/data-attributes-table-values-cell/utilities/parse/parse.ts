import { marked } from 'marked';
import { twm } from '@/utilities/twm';
import { textRootStyles } from '@/ui/astro/text/text-root/text-root.styles';
import { codeRootStyles } from '@/ui/astro/code/code-root/code-root.styles';

export const parse = (values: string) => {
  marked.use({
    renderer: {
      paragraph(this, { tokens }) {
        const text = this.parser.parseInline(tokens);
        return `<p class="${twm(textRootStyles({ size: '2', highContrast: true }))}">${text}</p>`;
      },
      codespan(this, { text }) {
        return `<code class="${twm(codeRootStyles({ size: '2', variant: 'soft', color: 'default', highContrast: false }))}">${text}</code>`;
      },
    },
  });

  const content = marked.parse(values);

  return content;
};
