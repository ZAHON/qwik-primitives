import type { PrimitiveRubyProps } from './primitive-ruby.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `ruby` element represents small annotations that are rendered above, below, or
 * next to base text, usually used for showing the pronunciation of East Asian characters.
 * It can also be used for annotating other kinds of text, but this usage is less common.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby).
 */
export const PrimitiveRuby = component$<PrimitiveRubyProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'ruby';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
