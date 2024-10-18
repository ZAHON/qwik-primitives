import type { CardRootProps } from './card-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { cardRootStyles } from './card-root.styles';

/**
 * Container that groups related content and actions.
 * This component is based on the `div` element.
 */
export const CardRoot = component$<CardRootProps>((props) => {
  const { as, size = '1', class: className, ...others } = props;

  const Component = as || 'div';

  return (
    <Component class={twm(cardRootStyles({ size }), className)} {...others}>
      <Slot />
    </Component>
  );
});
