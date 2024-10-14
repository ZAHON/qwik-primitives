import type { TextRootProps } from './text-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { textRootStyles } from './text-root.styles';

/**
 * Foundational text primitive.
 * This component is based on the `p` element.
 */
export const TextRoot = component$<TextRootProps>((props) => {
  const { as, size = '3', highContrast = true, class: className, ...others } = props;

  const Component = as || 'p';

  return (
    <Component class={twm(textRootStyles({ size, highContrast }), className)} {...others}>
      <Slot />
    </Component>
  );
});
