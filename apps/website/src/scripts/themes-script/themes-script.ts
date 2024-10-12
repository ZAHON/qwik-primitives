export const themesScript = () => {
  const query = '(prefers-color-scheme: dark)';
  const documentElement = document.documentElement;

  const getSystemTheme = () => {
    return window.matchMedia(query).matches ? 'dark' : 'light';
  };

  const updateDOM = (theme: 'light' | 'dark') => {
    if (['light', 'dark'].includes(theme)) {
      documentElement.style.colorScheme = theme;
      documentElement.setAttribute('data-theme', theme);
    }
  };

  const disableAnimation = () => {
    const css = document.createElement('style');

    css.appendChild(
      document.createTextNode(
        `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
      )
    );

    document.head.appendChild(css);

    return () => {
      (() => window.getComputedStyle(document.body))();

      requestAnimationFrame(() => {
        setTimeout(() => {
          document.head.removeChild(css);
        }, 1);
      });
    };
  };

  const handleToggleTheme = () => {
    const oldTheme = documentElement.getAttribute('data-theme');

    if (oldTheme && ['light', 'dark'].includes(oldTheme)) {
      const newTheme = oldTheme === 'light' ? 'dark' : 'light';

      const enableAnimation = disableAnimation();

      updateDOM(newTheme);

      enableAnimation();
    }
  };

  const handleMatchMediaChange = () => {
    const newTheme = getSystemTheme();

    const enableAnimation = disableAnimation();

    updateDOM(newTheme);

    enableAnimation();
  };

  try {
    const themeName = (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) || 'system';
    const isSystem = themeName === 'system';
    const theme = isSystem ? getSystemTheme() : themeName;

    if (theme && ['light', 'dark'].includes(theme)) {
      updateDOM(theme as 'light' | 'dark');
    }

    documentElement.addEventListener('toggle-theme', handleToggleTheme);

    const matchMedia = window.matchMedia(query);

    // Use deprecated `addListener` and `removeListener` to support Safari < 14\
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (matchMedia.addListener) {
      matchMedia.addListener(handleMatchMediaChange);
    } else {
      matchMedia.addEventListener('change', handleMatchMediaChange);
    }

    if (typeof localStorage !== 'undefined') {
      const observer = new MutationObserver(() => {
        if (documentElement.getAttribute('data-theme') === 'light') {
          localStorage.setItem('theme', 'light');
        }

        if (documentElement.getAttribute('data-theme') === 'dark') {
          localStorage.setItem('theme', 'dark');
        }
      });

      observer.observe(documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }
  } catch {
    //
  }
};
