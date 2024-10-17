import type { DataListItemProps } from './data-list-item.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { dataListItemStyles } from './data-list-item.styles';
import { DataListContext } from '../data-list-context';

/**
 * Wraps a key-value pair.
 * This component is based on the `div` element.
 */
export const DataListItem = component$<DataListItemProps>((props) => {
  const { as, class: className, ...others } = props;

  const { orientation } = useContext(DataListContext);

  const Component = as || 'div';

  return (
    <Component class={twm(dataListItemStyles({ orientation }), className)} {...others}>
      <Slot />
    </Component>
  );
});
