import type { RenderToStreamOptions } from '@builder.io/qwik/server';
import { renderToStream } from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';
import Root from './root';

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    containerAttributes: {
      lang: 'en-us',
      'data-radius': 'medium',
      ...opts.containerAttributes,
    },
    serverData: {
      ...opts.serverData,
    },
  });
}
