import type { CopyButtonIndicatorProps } from './copy-button-indicator.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { copyButtonIndicatorStyles } from './copy-button-indicator.styles';
import { CopyButtonContext } from '../copy-button-context';

export const CopyButtonIndicator = component$<CopyButtonIndicatorProps>((props) => {
  const { as, class: className, ...others } = props;

  const { size } = useContext(CopyButtonContext);

  const Component = as || 'span';

  return (
    <Component aria-hidden="true" class={twm(copyButtonIndicatorStyles({ size }), className)} {...others}>
      <Slot />
    </Component>
  );
});
