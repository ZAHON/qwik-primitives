import type { DataListValueProps } from './data-list-value.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { dataListValueStyles } from './data-list-value.styles';

/**
 * Contains the value of the key-value pair.
 * This component is based on the `dd` element.
 */
export const DataListValue = component$<DataListValueProps>((props) => {
  const { as, class: className, ...others } = props;

  const Component = as || 'dd';

  return (
    <Component class={twm(dataListValueStyles(), className)} {...others}>
      <Slot />
    </Component>
  );
});
