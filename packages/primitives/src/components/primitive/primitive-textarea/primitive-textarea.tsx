import type { PrimitiveTextareaProps } from './primitive-textarea.types';
import { component$ } from '@builder.io/qwik';

/**
 * The `textarea` element represents a multi-line plain-text editing control, useful when you want to allow
 * users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).
 */
export const PrimitiveTextarea = component$<PrimitiveTextareaProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'textarea';

  return <Component {...others} />;
});
