import type { AvatarRootProps } from './avatar-root.types';
import { component$, useSignal, useContextProvider, useVisibleTask$, Slot } from '@builder.io/qwik';
import { visuallyHiddenStyle } from '@/utilities';
import { AvatarContext } from '../avatar-context';

/**
 * Contains all the parts of an avatar.
 * This component is based on the `span` element.
 */
export const AvatarRoot = component$<AvatarRootProps>((props) => {
  const { as, strategy = 'intersection-observer', ...others } = props;

  const executeTasks = useSignal(false);
  const imageLoadingStatus = useSignal<'idle' | 'loading' | 'loaded' | 'error'>('idle');

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      executeTasks.value = true;
    },
    { strategy }
  );

  useContextProvider(AvatarContext, { executeTasks, imageLoadingStatus });

  const Component = as || 'span';

  return (
    <Component data-qwik-primitives-avatar-root="" data-scope="avatar" {...others}>
      <span aria-hidden={true} data-qwik-primitives-avatar-observer="" style={visuallyHiddenStyle} />
      <Slot />
    </Component>
  );
});
