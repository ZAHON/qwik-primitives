import type { PrimitiveTheadProps } from './primitive-thead.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `thead` element encapsulates a set of table rows (`tr` elements), indicating
 * that they comprise the head of a table with information about the table's columns.
 * This is usually in the form of column headers (`th` elements).
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead).
 */
export const PrimitiveThead = component$<PrimitiveTheadProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'thead';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
