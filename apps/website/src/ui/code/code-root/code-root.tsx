import type { CodeRootProps } from './code-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { codeRootStyles } from './code-root.styles';

export const CodeRoot = component$<CodeRootProps>((props) => {
  const { as, size, variant = 'soft', color = 'primary', highContrast = false, class: className, ...others } = props;

  const Component = as || 'code';

  return (
    <Component class={twm(codeRootStyles({ size, variant, color, highContrast }), className)} {...others}>
      <Slot />
    </Component>
  );
});
