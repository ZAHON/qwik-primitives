import type { CodePresentationHeroProps } from './code-presentation-hero.types';
import { component$, useContext } from '@builder.io/qwik';
import { codePresentationHeroStyles } from './code-presentation-hero.styles';
import { CodePresentationContext } from '../code-presentation-context';

export const CodePresentationHero = component$<CodePresentationHeroProps>((props) => {
  const { component } = props;

  const { heroWithGradient, heroPaddingY, heroJustify } = useContext(CodePresentationContext);

  const Component = component;

  return (
    <div role="presentation" class={codePresentationHeroStyles({ heroWithGradient, heroPaddingY, heroJustify })}>
      <Component />
    </div>
  );
});
