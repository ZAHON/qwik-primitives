import type { CopyButtonRootProps } from './copy-button-root.types';
import { component$, useSignal, $, Slot } from '@builder.io/qwik';

/**
 * Contains all the parts of a copy button.
 * This component is based on the `button` element.
 */
export const CopyButtonRoot = component$<CopyButtonRootProps>((props) => {
  const { as, value, timeout = 3000, onCopyStatusChange$, disabled, onClick$, ...others } = props;

  const copied = useSignal(false);
  const copyTimeout = useSignal<number | undefined>(undefined);

  const handleClick$ = $(async () => {
    if (!disabled) {
      const handleCopyStatusChange = (status: 'copied' | 'error') => {
        if (onCopyStatusChange$) onCopyStatusChange$(status);
      };

      if ('clipboard' in navigator) {
        try {
          await navigator.clipboard.writeText(value);

          clearTimeout(copyTimeout.value);

          copied.value = true;
          copyTimeout.value = window.setTimeout(() => (copied.value = false), timeout);

          handleCopyStatusChange('copied');
        } catch {
          handleCopyStatusChange('error');
        }
      } else {
        handleCopyStatusChange('error');
      }
    }
  });

  const Component = as || 'button';

  return (
    <Component
      type="button"
      disabled={disabled}
      data-qwik-primitives-copy-button-root=""
      data-scope="copy-button"
      data-part="root"
      data-copied={copied.value ? '' : undefined}
      data-disabled={disabled ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
