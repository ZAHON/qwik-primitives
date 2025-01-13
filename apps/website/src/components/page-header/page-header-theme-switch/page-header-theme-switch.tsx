import { component$, $ } from '@builder.io/qwik';
import { BaseButton } from '@/ui/qwik/base-button';
import { AccessibleIcon } from '@/ui/qwik/accessible-icon';
import { VisuallyHidden } from '@/ui/qwik/visually-hidden';
import { SunIcon } from '@/ui/qwik/icons/sun-icon';
import { MoonIcon } from '@/ui/qwik/icons/moon-icon';

export const PageHeaderThemeSwitch = component$(() => {
  const handleClick$ = $((event: PointerEvent, currentTarget: HTMLButtonElement) => {
    const toggleThemeEvent = new CustomEvent('toggle-theme', { bubbles: true, cancelable: false });
    currentTarget.dispatchEvent(toggleThemeEvent);
  });

  return (
    <BaseButton.Root shape="icon" color="default" variant="ghost" onClick$={handleClick$}>
      <AccessibleIcon.Root>
        <SunIcon height={16} width={16} class="block dark:hidden" />
        <MoonIcon height={16} width={16} class="hidden dark:block" />
      </AccessibleIcon.Root>

      <VisuallyHidden.Root>Toggle theme</VisuallyHidden.Root>
    </BaseButton.Root>
  );
});
