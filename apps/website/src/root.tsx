import { component$ } from '@builder.io/qwik';
import { isDev } from '@builder.io/qwik/build';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { Insights } from '@builder.io/qwik-labs';
import { RouterHead } from '@/components/router-head';
import { Fonts } from '@/components/fonts';
import { themesScript } from '@/scripts/themes-script';
import { prefersReducedMotionScript } from '@/scripts/prefers-reduced-motion-script';

import '@/styles/globals.css';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && <link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.json`} />}
        <RouterHead />
        <Fonts />
        <Insights publicApiKey={import.meta.env.PUBLIC_QWIK_INSIGHTS_KEY} />
        <script dangerouslySetInnerHTML={`(${themesScript.toString()})()`} />
        <script dangerouslySetInnerHTML={`(${prefersReducedMotionScript.toString()})()`} />
      </head>
      <body class="min-h-dvh overflow-x-hidden bg-background text-foreground selection:bg-primary-selection">
        <RouterOutlet />
        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
