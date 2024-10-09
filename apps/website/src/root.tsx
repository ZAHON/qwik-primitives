import { component$ } from '@builder.io/qwik';
import { isDev } from '@builder.io/qwik/build';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head';

import '@fontsource/iosevka';

import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/500.css';
import '@fontsource/geist-sans/700.css';

import '@/styles/globals.css';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && <link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.json`} />}
        <RouterHead />
      </head>
      <body class="bg-background text-foreground min-h-dvh overflow-x-hidden">
        <RouterOutlet />
        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
