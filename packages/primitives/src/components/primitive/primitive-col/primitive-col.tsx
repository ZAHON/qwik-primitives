import type { PrimitiveColProps } from './primitive-col.types';
import { component$ } from '@builder.io/qwik';

/**
 * The `col` element defines one or more columns in a column group represented by its parent `colgroup` element.
 * The `col` element is only valid as a child of a `colgroup` element that has no `span` attribute defined.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col).
 */
export const PrimitiveCol = component$<PrimitiveColProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'col';

  return <Component {...others} />;
});
