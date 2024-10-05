import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface TabsTriggerProps extends PropsOf<'button'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * A unique value that associates the trigger with a content.
   */
  value: string;

  /**
   * When `true`, prevents the user from interacting with the tab.
   */
  disabled?: boolean;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}