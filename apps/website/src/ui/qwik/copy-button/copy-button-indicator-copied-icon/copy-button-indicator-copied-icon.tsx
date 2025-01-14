import type { CopyButtonIndicatorCopiedIconProps } from './copy-button-indicator-copied-icon.types';
import { component$, useContext } from '@builder.io/qwik';
import { CheckIcon } from '@/ui/qwik/icons/check-icon';
import { twm } from '@/utilities/twm';
import { copyButtonIndicatorCopiedIconStyles } from './copy-button-indicator-copied-icon.styles';
import { getIconSize } from '../utilities';
import { CopyButtonContext } from '../copy-button-context';

/**
 * The copied icon of a copy button indicator.
 * This component is based on the `svg` element.
 */
export const CopyButtonIndicatorCopiedIcon = component$<CopyButtonIndicatorCopiedIconProps>((props) => {
  const { class: className, ...others } = props;

  const { size } = useContext(CopyButtonContext);

  return (
    <CheckIcon
      height={getIconSize(size)}
      width={getIconSize(size)}
      class={twm(copyButtonIndicatorCopiedIconStyles(), className)}
      {...others}
    />
  );
});
