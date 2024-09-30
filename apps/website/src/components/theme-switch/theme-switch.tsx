import { component$, $ } from '@builder.io/qwik';
import { IconButton } from '@/ui/qwik/icon-button';
import { SunIcon } from '@/ui/qwik/icons/sun-icon';
import { MoonIcon } from '@/ui/qwik/icons/moon-icon';

export const ThemeSwitch = component$(() => {
  const handleClick$ = $((event: MouseEvent, currentTarget: HTMLButtonElement) => {
    const toggleThemeEvent = new CustomEvent('toggle-theme', { bubbles: true, cancelable: false });
    currentTarget.dispatchEvent(toggleThemeEvent);
  });

  return (
    <IconButton.Root onClick$={handleClick$}>
      <SunIcon height={16} width={16} class="block dark:hidden" />
      <MoonIcon height={16} width={16} class="hidden dark:block" />
      <span class="sr-only">Toggle theme</span>
    </IconButton.Root>
  );
});
