import type { CopyButtonIndicatorIdleIconProps } from './copy-button-indicator-idle-icon.types';
import { component$, useContext } from '@builder.io/qwik';
import { CopyIcon } from '@/ui/qwik/icons/copy-icon';
import { twm } from '@/utilities/twm';
import { copyButtonIndicatorIdleIconStyles } from './copy-button-indicator-idle-icon.styles';
import { getIconSize } from '../utilities';
import { CopyButtonContext } from '../copy-button-context';

/**
 * The idle icon of a copy button indicator.
 * This component is based on the `svg` element.
 */
export const CopyButtonIndicatorIdleIcon = component$<CopyButtonIndicatorIdleIconProps>((props) => {
  const { class: className, ...others } = props;

  const { size } = useContext(CopyButtonContext);

  return (
    <CopyIcon
      height={getIconSize(size)}
      width={getIconSize(size)}
      class={twm(copyButtonIndicatorIdleIconStyles({ size }), className)}
      {...others}
    />
  );
});
