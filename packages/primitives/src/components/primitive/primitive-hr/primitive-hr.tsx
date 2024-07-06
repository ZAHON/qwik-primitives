import type { PrimitiveHrProps } from './primitive-hr.types';
import { component$ } from '@builder.io/qwik';

/**
 * The `hr` element represents a thematic break between paragraph-level elements:
 * for example, a change of scene in a story, or a shift of topic within a section.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr).
 */
export const PrimitiveHr = component$<PrimitiveHrProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'hr';

  return <Component {...others} />;
});
