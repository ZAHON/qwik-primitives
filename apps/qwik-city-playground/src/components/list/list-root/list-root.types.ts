import type { PropsOf } from '@builder.io/qwik';

type ListRootAsUlProps = { as?: 'ul' } & PropsOf<'ul'>;
type ListRootAsOlProps = { as: 'ol' } & PropsOf<'ol'>;

type ListRootAsProps = ListRootAsUlProps | ListRootAsOlProps;

export type ListRootProps<C extends 'ul' | 'ol'> = {
  /**
   * Shorthand for changing the default rendered element into a semantically appropriate alternative.
   * @default "ul"
   */
  as?: C;
} & ListRootAsProps;
