import type { ComponentPropsProps } from './component-props.types';
import { component$ } from '@builder.io/qwik';
import { ComponentPropsDataList } from './component-props-data-list';
import { ComponentPropsTable } from './component-props-table';

export const ComponentProps = component$<ComponentPropsProps>((props) => {
  return (
    <>
      <ComponentPropsDataList {...props} />
      <ComponentPropsTable {...props} />
    </>
  );
});
