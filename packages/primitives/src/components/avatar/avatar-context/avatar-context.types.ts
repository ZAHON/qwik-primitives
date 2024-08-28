import type { Signal } from '@builder.io/qwik';

export interface AvatarContextValue {
  /**
   * Determine if the tasks can be execute.
   */
  executeTasks: Signal<boolean>;

  /**
   * The avatar image loading status.
   */
  imageLoadingStatus: Signal<'idle' | 'loading' | 'loaded' | 'error'>;
}
