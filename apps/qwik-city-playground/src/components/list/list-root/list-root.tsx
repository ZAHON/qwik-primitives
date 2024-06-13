import type { ListRootProps } from './list-root.types';
import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';

export const ListRoot = component$(<C extends 'ul' | 'ol' = 'ul'>(props: ListRootProps<C>) => {
  const { as, class: className, ...others } = props;

  useStylesScoped$(`
		.list-root {
			display: flex;
			flex-direction: column;
			row-gap: 0.5rem;
		}		
	`);

  const Tag = (as || 'ul') as string;

  return (
    <Tag {...{ class: ['list-root', className] }} {...others}>
      <Slot />
    </Tag>
  );
});
