export const prefersReducedMotionScript = () => {
  const query = '(prefers-reduced-motion: reduce)';

  try {
    const matchMedia = window.matchMedia(query);
    const css = document.createElement('style');

    const disableAnimation = () => {
      css.appendChild(
        document.createTextNode(
          `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important;-webkit-animation:none!important;animation:none!important;}`
        )
      );

      document.head.appendChild(css);
    };

    const enableAnimation = () => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.head.removeChild(css);
        }, 1);
      });
    };

    const handleMatchMediaChange = () => {
      const matches = window.matchMedia(query).matches;

      if (matches) {
        disableAnimation();
      } else {
        enableAnimation();
      }
    };

    // Triggered at the first client-side load and if query changes
    handleMatchMediaChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (matchMedia.addListener) {
      matchMedia.addListener(handleMatchMediaChange);
    } else {
      matchMedia.addEventListener('change', handleMatchMediaChange);
    }
  } catch {
    //
  }
};
