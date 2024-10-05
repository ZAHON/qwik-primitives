import type { TabsContentProps } from './tabs-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { TabsContext } from '../tabs-context';

/**
 * Contains the content associated with each trigger.
 * This component is based on the `div` element.
 */
export const TabsContent = component$<TabsContentProps>((props) => {
  const { as, value, ...others } = props;

  const { tabsValue, tabsId, orientation } = useContext(TabsContext);

  const Component = as || 'div';

  return (
    <Component
      role="tabpanel"
      tabIndex={0}
      hidden={value !== tabsValue.value}
      id={`qwik-primitives-tabs-${tabsId}-content-${value}`}
      aria-labelledby={`qwik-primitives-tabs-${tabsId}-trigger-${value}`}
      data-qwik-primitives-tabs-content=""
      data-scope="tabs"
      data-part="content"
      data-state={value === tabsValue.value ? 'active' : 'inactive'}
      data-orientation={orientation}
      {...others}
    >
      <Slot />
    </Component>
  );
});
