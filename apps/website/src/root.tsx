import { component$ } from '@builder.io/qwik';
import { isDev } from '@builder.io/qwik/build';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { Insights } from '@builder.io/qwik-labs';
import { RouterHead } from '@/components/router-head';
import { themesScript } from '@/scripts/themes-script';

import '@/styles/globals.css';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && <link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.json`} />}
        <RouterHead />
        <Insights publicApiKey={import.meta.env.PUBLIC_QWIK_INSIGHTS_KEY} />
        <script dangerouslySetInnerHTML={`(${themesScript.toString()})()`} />
      </head>
      <body class="min-h-dvh overflow-x-hidden bg-background text-foreground selection:bg-primary-selection">
        <RouterOutlet />
        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
