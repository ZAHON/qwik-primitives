import type { DataListLabelProps } from './data-list-label.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { dataListLabelStyles } from './data-list-label.styles';
import { DataListContext } from '../data-list-context';

/**
 * Contains the key of the key-value pair.
 * This component is based on the `dt` element.
 */
export const DataListLabel = component$<DataListLabelProps>((props) => {
  const { as, highContrast = false, class: className, ...others } = props;

  const { orientation } = useContext(DataListContext);

  const Component = as || 'dt';

  return (
    <Component class={twm(dataListLabelStyles({ orientation, highContrast }), className)} {...others}>
      <Slot />
    </Component>
  );
});
