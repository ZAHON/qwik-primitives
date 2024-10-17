import type { DataListRootProps } from './data-list-root.types';
import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { dataListRootStyles } from './data-list-root.styles';
import { DataListContext } from '../data-list-context';

/**
 * Contains all the parts of the data list.
 * This component is based on the `dl` element.
 */
export const DataListRoot = component$<DataListRootProps>((props) => {
  const { as, size = '2', orientation = 'horizontal', class: className, ...others } = props;

  useContextProvider(DataListContext, { orientation });

  const Component = as || 'dl';

  return (
    <Component class={twm(dataListRootStyles({ size, orientation }), className)} {...others}>
      <Slot />
    </Component>
  );
});
