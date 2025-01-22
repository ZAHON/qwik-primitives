import type { SpoilerIndicatorProps } from './spoiler-indicator.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { SpoilerContext } from '../spoiler-context';

/**
 * An optional decorative element that can indicate the state of the spoiler.
 * This component is based on the `span` element.
 */
export const SpoilerIndicator = component$<SpoilerIndicatorProps>((props) => {
  const { as, style, ...others } = props;

  const { isOpen, isDisabled } = useContext(SpoilerContext);

  const Component = as || 'span';

  return (
    <Component
      aria-hidden="true"
      data-qwik-primitives-spoiler-indicator=""
      data-scope="spoiler"
      data-part="indicator"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      style={{
        pointerEvents: 'none',
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
