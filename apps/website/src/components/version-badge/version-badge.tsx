import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Badge } from '@/ui/badge';

export const VersionBadge = component$(() => {
  const version = useSignal<string | undefined>(undefined);

  useTask$(async () => {
    try {
      const response = await fetch('https://bundlephobia.com/api/size?package=qwik-primitives');
      const data = (await response.json()) as unknown;

      if (typeof data === 'object' && data !== null && 'version' in data && typeof data.version === 'string') {
        version.value = data.version;
      }
    } catch {
      version.value = undefined;
    }
  });

  return version.value && <Badge.Root size="2">v{version}</Badge.Root>;
});
