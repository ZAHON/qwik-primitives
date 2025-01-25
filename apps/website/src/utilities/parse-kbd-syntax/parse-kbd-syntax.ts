import type { ParseKbdSyntaxOptions } from './parse-kbd-syntax.types';
import { twm } from '@/utilities/twm';
import { kbdRootStyles } from '@/ui/astro/kbd/kbd-root/kbd-root.styles';

/**
 * Helper function changing ++ syntax used in documentation to write kbd to kbd element.
 * `++Enter++` - `<kbd>Enter</kbd>`
 */
export const parseKbdSyntax = (src: string, options?: ParseKbdSyntaxOptions) => {
  const size = options?.size ?? '3';
  const className = options?.className;

  const regex = /\+\+(.*?)\+\+/g;
  const result = src.replace(regex, `<kbd class="${twm(kbdRootStyles({ size }), className)}">$1</kbd>`);

  return result;
};
