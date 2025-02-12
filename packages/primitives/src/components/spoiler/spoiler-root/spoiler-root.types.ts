import type { PropsOf, FunctionComponent, Signal, QRL, CSSProperties } from '@builder.io/qwik';

export interface SpoilerRootProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The open state of the spoiler when it is initially rendered.
   * Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the spoiler.
   * Must be used in conjunction with `onOpenChange$`.
   */
  open?: Signal<boolean>;

  /**
   * Event handler called when the open state of the spoiler changes.
   */
  onOpenChange$?: QRL<(open: boolean) => void>;

  /**
   * When `true`, prevents the user from interacting with the spoiler.
   */
  disabled?: boolean;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
