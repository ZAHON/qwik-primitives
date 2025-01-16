import type { PropsOf, FunctionComponent, QRL, CSSProperties } from '@builder.io/qwik';

export interface CopyButtonRootProps extends PropsOf<'button'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The value to be copied to the clipboard.
   */
  value: string;

  /**
   * The timeout for the copy operation in milliseconds.
   * @default 3000
   */
  timeout?: number;

  /**
   * The function to be called when the value is copied to the clipboard.
   */
  onCopyStatusChange$?: QRL<(status: 'idle' | 'copied' | 'error') => void>;

  /**
   * When `true`, prevents the user from interacting with the copy button.
   */
  disabled?: boolean;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
