import type { CodePresentationProps } from './code-presentation.types';
import { component$, useSignal, useContextProvider } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { CodePresentationHero } from './code-presentation-hero';
import { CodePresentationSpoiler } from './code-presentation-spoiler';
import { CodePresentationOverlay } from './code-presentation-overlay';
import { CodePresentationTrigger } from './code-presentation-trigger';
import { CodePresentationPanel } from './code-presentation-panel';
import { CodePresentationContent } from './code-presentation-content';
import { CodePresentationCodeBlock } from './code-presentation-code-block';
import { CodePresentationContext } from './code-presentation-context';
import { codePresentationStyles } from './code-presentation.styles';

export const CodePresentation = component$<CodePresentationProps>((props) => {
  const {
    heroWithGradient = true,
    heroPaddingY = true,
    heroJustify = 'center',
    component,
    class: className,
    ...others
  } = props;

  const isOpen = useSignal(false);
  const isPanelOpen = useSignal(false);

  useContextProvider(CodePresentationContext, {
    type: others.type,
    isOpen,
    isPanelOpen,
    heroWithGradient,
    heroPaddingY,
    heroJustify,
  });

  return (
    <div class={twm(codePresentationStyles(), className)}>
      <CodePresentationHero component={component} />
      <CodePresentationSpoiler>
        <CodePresentationOverlay>
          <CodePresentationTrigger />
        </CodePresentationOverlay>
        <CodePresentationPanel>
          <CodePresentationContent>
            <CodePresentationCodeBlock {...others} />
          </CodePresentationContent>
        </CodePresentationPanel>
      </CodePresentationSpoiler>
    </div>
  );
});
