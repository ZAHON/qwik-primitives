import type { CopyButtonCopiedIconProps } from './copy-button-copied-icon.types';
import { component$, useContext } from '@builder.io/qwik';
import { CheckIcon } from '@/icons/check-icon';
import { twm } from '@/utilities/twm';
import { copyButtonCopiedIconStyles } from './copy-button-copied-icon.styles';
import { getIconSize } from '../utilities';
import { CopyButtonContext } from '../copy-button-context';

export const CopyButtonCopiedIcon = component$<CopyButtonCopiedIconProps>((props) => {
  const { class: className, ...others } = props;

  const { size } = useContext(CopyButtonContext);

  return (
    <CheckIcon
      height={getIconSize(size)}
      width={getIconSize(size)}
      class={twm(copyButtonCopiedIconStyles(), className)}
      {...others}
    />
  );
});
