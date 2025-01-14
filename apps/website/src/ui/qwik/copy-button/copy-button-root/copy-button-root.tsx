import type { CopyButtonRootProps } from './copy-button-root.types';
import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { CopyButton } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { buttonStyles } from '@/styles/shared/button';
import { copyButtonRootStyles } from './copy-button-root.styles';
import { CopyButtonContext } from '../copy-button-context';

/**
 * Contains all the parts of a copy button.
 * This component is based on the `button` element.
 */
export const CopyButtonRoot = component$<CopyButtonRootProps>((props) => {
  const {
    size = '2',
    shape = 'icon',
    variant = 'soft',
    color = 'default',
    highContrast = false,
    radius,
    class: className,
    ...others
  } = props;

  useContextProvider(CopyButtonContext, { size });

  return (
    <CopyButton.Root
      data-radius={radius}
      class={twm(buttonStyles({ size, shape, variant, color, highContrast }), copyButtonRootStyles(), className)}
      {...others}
    >
      <Slot />
    </CopyButton.Root>
  );
});
