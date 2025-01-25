import { component$, Slot } from '@builder.io/qwik';
import { codePresentationHeroStyles } from './code-presentation-hero.styles';

export const CodePresentationHero = component$(() => {
  return (
    <div
      role="presentation"
      style={{
        '--code-presentation-hero-background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none' %3E%3Ccircle fill='%2300073527' cx='10' cy='10' r='1.6257413380501518' %3E%3C/circle%3E%3C/svg%3E")`,
      }}
      class={codePresentationHeroStyles()}
    >
      <Slot />
    </div>
  );
});
