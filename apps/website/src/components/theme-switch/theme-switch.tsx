import { component$, $ } from '@builder.io/qwik';
import { Button } from '@/ui/button';
import { SunIcon } from '@/icons/sun-icon';
import { MoonIcon } from '@/icons/moon-icon';

export const ThemeSwitch = component$(() => {
  const handleClick$ = $((event: MouseEvent, currentTarget: HTMLButtonElement) => {
    const toggleThemeEvent = new CustomEvent('toggle-theme', { bubbles: true, cancelable: false });
    currentTarget.dispatchEvent(toggleThemeEvent);
  });

  return (
    <Button.Root shape="icon" size="2" color="default" variant="ghost" onClick$={handleClick$}>
      <SunIcon height={16} width={16} class="block dark:hidden" />
      <MoonIcon height={16} width={16} class="hidden dark:block" />
      <span class="sr-only">Toggle theme</span>
    </Button.Root>
  );
});
