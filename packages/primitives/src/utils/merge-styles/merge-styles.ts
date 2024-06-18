import type { CSSProperties } from '@builder.io/qwik';
import parse from 'style-to-object';

/**
 * The utility function that allow merge array of style into one style object.
 */
export const mergeStyles = (styles: (CSSProperties | string | undefined)[]) => {
  let style: CSSProperties = {};

  styles.forEach((value) => {
    if (value === undefined) return;

    if (typeof value === 'object') {
      style = { ...style, ...value };
      return;
    }

    if (typeof value === 'string') {
      style = { ...style, ...parse(value) };
      return;
    }
  });

  return style;
};
