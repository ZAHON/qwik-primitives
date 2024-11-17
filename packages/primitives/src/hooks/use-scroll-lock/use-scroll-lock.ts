import type { ScrollLockStack, PrevWindowStyle, PrevBodyStyle } from './use-scroll-lock.types';
import { $ } from '@builder.io/qwik';
import { isServer, isDev } from '@builder.io/qwik/build';

const scrollLockStack: ScrollLockStack = {
  count: 0,
};

const prevWindowStyle: PrevWindowStyle = {
  scrollX: undefined,
  scrollY: undefined,
};

const prevBodyStyle: PrevBodyStyle = {
  overflow: undefined,
  paddingRight: undefined,
  position: undefined,
  top: undefined,
  left: undefined,
  right: undefined,
};

/**
 * Lock scroll at current position.
 */
export const useScrollLock = () => {
  const lock$ = $(() => {
    if (isServer && isDev) {
      throw Error('[qwik-primitives]: useScrollLock hook the scroll can not be lock during SSR');
    }

    const win = document.defaultView ?? window;
    const body = document.body;

    scrollLockStack.count = scrollLockStack.count + 1;

    if (body.hasAttribute('data-qwik-primitives-scroll-lock')) {
      return;
    }

    const scrollbarWidth = win.innerWidth - document.documentElement.clientWidth;
    const isIos = /iP(hone|ad|od)|iOS/.test((navigator as any).userAgentData?.platform ?? navigator.platform);

    if (isIos) {
      // iOS 12 does not support `visuaViewport`.
      const offsetLeft = win.visualViewport?.offsetLeft ?? 0;
      const offsetTop = win.visualViewport?.offsetTop ?? 0;

      prevWindowStyle.scrollX = win.screenX;
      prevWindowStyle.scrollY = win.screenY;

      prevBodyStyle.overflow = body.style.getPropertyValue('overflow');
      prevBodyStyle.paddingRight = body.style.getPropertyValue('padding-right');
      prevBodyStyle.position = body.style.getPropertyValue('position');
      prevBodyStyle.top = body.style.getPropertyValue('top');
      prevBodyStyle.left = body.style.getPropertyValue('left');
      prevBodyStyle.right = body.style.getPropertyValue('right');

      body.style.setProperty('overflow', 'hidden');
      body.style.setProperty('padding-right', `${scrollbarWidth}px`);
      body.style.setProperty('position', 'fixed');
      body.style.setProperty('top', `${-(win.scrollY - Math.floor(offsetTop))}px`);
      body.style.setProperty('left', `${-(win.scrollX - Math.floor(offsetLeft))}px`);
      body.style.setProperty('right', '0');
    } else {
      prevBodyStyle.overflow = body.style.getPropertyValue('overflow');
      prevBodyStyle.paddingRight = body.style.getPropertyValue('padding-right');

      body.style.setProperty('overflow', 'hidden');
      body.style.setProperty('padding-right', `${scrollbarWidth}px`);
    }

    body.style.setProperty('--qwik-primitives-scroll-lock-scrollbar-width', `${scrollbarWidth}px`);

    body.setAttribute('data-qwik-primitives-scroll-lock', '');
  });

  const unlock$ = $(() => {
    if (isServer && isDev) {
      throw Error('[qwik-primitives]: useScrollLock hook the scroll can not be unlock during SSR');
    }

    scrollLockStack.count = scrollLockStack.count - 1;

    if (scrollLockStack.count !== 0) {
      return;
    }

    const body = document.body;
    const isIos = /iP(hone|ad|od)|iOS/.test((navigator as any).userAgentData?.platform ?? navigator.platform);

    const restoreStyle = (property: string, prevValue: string | undefined) => {
      return prevValue ? body.style.setProperty(property, prevValue) : body.style.removeProperty(property);
    };

    if (isIos) {
      if (prevWindowStyle.scrollX && prevWindowStyle.scrollY) {
        const win = document.defaultView ?? window;
        win.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' });
      }

      restoreStyle('overflow', prevBodyStyle.overflow);
      restoreStyle('padding-right', prevBodyStyle.paddingRight);
      restoreStyle('position', prevBodyStyle.position);
      restoreStyle('top', prevBodyStyle.top);
      restoreStyle('left', prevBodyStyle.left);
      restoreStyle('right', prevBodyStyle.right);
    } else {
      restoreStyle('overflow', prevBodyStyle.overflow);
      restoreStyle('padding-right', prevBodyStyle.paddingRight);
    }

    body.style.removeProperty('--qwik-primitives-scroll-lock-scrollbar-width');

    body.removeAttribute('data-qwik-primitives-scroll-lock');
  });

  return { lock$, unlock$ };
};
