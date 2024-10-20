import type { CardContentProps } from './card-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { cardContentStyles } from './card-content.styles';
import { CardContext } from '../card-context';

/**
 * An optional content of the card.
 * This component allows you to add a gap beatween `Card.Title` and `Card.Text` components.
 * This component is based on the `div` element.
 */
export const CardContent = component$<CardContentProps>((props) => {
  const { as, size, class: className, ...others } = props;

  const { size: cardSize } = useContext(CardContext);

  const Component = as || 'div';

  return (
    <Component class={twm(cardContentStyles({ size: size ?? cardSize }), className)} {...others}>
      <Slot />
    </Component>
  );
});
