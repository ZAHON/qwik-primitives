import type { HeadingRootProps } from './heading-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { headingRootStyles } from './heading-root.styles';

/**
 * Semantic heading element.
 * This component is based on the `h1` element.
 */
export const HeadingRoot = component$<HeadingRootProps>((props) => {
  const { as, level = '1', size = '6', highContrast = true, class: className, ...others } = props;

  switch (level) {
    case '1': {
      const Component = as || 'h1';

      return (
        <Component class={twm(headingRootStyles({ size, highContrast }), className)} {...others}>
          <Slot />
        </Component>
      );
    }
    case '2': {
      const Component = as || 'h2';

      return (
        <Component class={twm(headingRootStyles({ size, highContrast }), className)} {...others}>
          <Slot />
        </Component>
      );
    }
    case '3': {
      const Component = as || 'h3';

      return (
        <Component class={twm(headingRootStyles({ size, highContrast }), className)} {...others}>
          <Slot />
        </Component>
      );
    }
    case '4': {
      const Component = as || 'h4';

      return (
        <Component class={twm(headingRootStyles({ size, highContrast }), className)} {...others}>
          <Slot />
        </Component>
      );
    }
    case '5': {
      const Component = as || 'h5';

      return (
        <Component class={twm(headingRootStyles({ size, highContrast }), className)} {...others}>
          <Slot />
        </Component>
      );
    }
    case '6': {
      const Component = as || 'h6';

      return (
        <Component class={twm(headingRootStyles({ size, highContrast }), className)} {...others}>
          <Slot />
        </Component>
      );
    }
    default: {
      throw Error(`Unknown level: ${level}`);
    }
  }
});
