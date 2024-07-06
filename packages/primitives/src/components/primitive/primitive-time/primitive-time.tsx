import type { PrimitiveTimeProps } from './primitive-time.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `time` element represents a specific period in time.
 * It may include the datetime `attribute` to translate dates
 * into machine-readable format, allowing for better search
 * engine results or custom features such as reminders.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time).
 */
export const PrimitiveTime = component$<PrimitiveTimeProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'time';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
