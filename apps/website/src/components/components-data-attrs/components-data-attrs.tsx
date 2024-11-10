import type { ComponentsDataAttrsProps } from './components-data-attrs.types';
import { component$ } from '@builder.io/qwik';
import { ComponentsDataAttrsDataList } from './components-data-attrs-data-list';
import { ComponentsDataAttrsTable } from './components-data-attrs-table';

export const ComponentsDataAttrs = component$<ComponentsDataAttrsProps>((props) => {
  return (
    <>
      <ComponentsDataAttrsDataList {...props} />
      <ComponentsDataAttrsTable {...props} />
    </>
  );
});
