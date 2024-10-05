import type { TabsTriggerContentProps } from './tabs-trigger-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { tabsTriggerContentStyles } from './tabs-trigger-content.styles';
import { TabsContext } from '../tabs-context';

export const TabsTriggerContent = component$<TabsTriggerContentProps>((props) => {
  const { as, class: className, ...others } = props;

  const { size, color } = useContext(TabsContext);

  const Component = as || 'span';

  return (
    <Component class={twm(tabsTriggerContentStyles({ size, color }), className)} {...others}>
      <Slot />
    </Component>
  );
});
