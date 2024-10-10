import type { CopyButtonIdleIconProps } from './copy-button-idle-icon.types';
import { component$, useContext } from '@builder.io/qwik';
import { CopyIcon } from '@/icons/copy-icon';
import { twm } from '@/utilities/twm';
import { copyButtonIdleIconStyles } from './copy-button-idle-icon.styles';
import { getIconSize } from '../utilities';
import { CopyButtonContext } from '../copy-button-context';

export const CopyButtonIdleIcon = component$<CopyButtonIdleIconProps>((props) => {
  const { class: className, ...others } = props;

  const { size } = useContext(CopyButtonContext);

  return (
    <CopyIcon
      height={getIconSize(size)}
      width={getIconSize(size)}
      class={twm(copyButtonIdleIconStyles(), className)}
      {...others}
    />
  );
});
