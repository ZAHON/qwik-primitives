import type { PropsOf, FunctionComponent, Signal, QRL, CSSProperties } from '@builder.io/qwik';

export interface ToggleRootProps extends PropsOf<'button'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The pressed state of the toggle when it is initially rendered.
   * Use when you do not need to control its pressed state.
   */
  defaultPressed?: boolean;

  /**
   * The controlled pressed state of the toggle.
   * Must be used in conjunction with `onPressedChange$`.
   */
  pressed?: Signal<boolean>;

  /**
   * Event handler called when the pressed state of the toggle changes.
   */
  onPressedChange$?: QRL<(pressed: boolean) => void>;

  /**
   * When `true`, prevents the user from interacting with the toggle.
   */
  disabled?: boolean;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
