export interface ScrollLockStack {
  /**
   * The count of the lock scroll.
   */
  count: number;
}

export interface PrevWindowStyle {
  /**
   * The previous scroll x value of the window.
   */
  scrollX: number | undefined;

  /**
   * The previous scroll y value of the window.
   */
  scrollY: number | undefined;
}

export interface PrevBodyStyle {
  /**
   * The previous overflow value of the body.
   */
  overflow: string | undefined;

  /**
   * The previous padding right value of the body.
   */
  paddingRight: string | undefined;

  /**
   * The previous position value of the body.
   */
  position: string | undefined;

  /**
   * The previous top value of the body.
   */
  top: string | undefined;

  /**
   * The previous left value of the body.
   */
  left: string | undefined;

  /**
   * The previous right value of the body.
   */
  right: string | undefined;
}
