import type { CodePresentationProps } from './code-presentation.types';
import { component$, useSignal, useContextProvider, Slot } from '@builder.io/qwik';
import { CodePresentationHero } from './code-presentation-hero';
import { CodePresentationSpoiler } from './code-presentation-spoiler';
import { CodePresentationSpoilerPanel } from './code-presentation-spoiler-panel';
import { CodePresentationSpoilerContent } from './code-presentation-spoiler-content';
import { CodePresentationSpoilerToggle } from './code-presentation-spoiler-toggle';
import { CodePresentationSpoilerOverlay } from './code-presentation-spoiler-overlay';
import { CodePresentationSpoilerOpen } from './code-presentation-spoiler-open';
import { CodePresentationTabs } from './code-presentation-tabs';
import { CodePresentationTabsList } from './code-presentation-tabs-list';
import { CodePresentationTabsTrigger } from './code-presentation-tabs-trigger';
import { CodePresentationTabsPanel } from './code-presentation-tabs-panel';
import { CodePresentationTabsContent } from './code-presentation-tabs-content';
import { CodePresentationCopyButton } from './code-presentation-copy-button';
import { CodePresentationSyntaxHighlighter } from './code-presentation-syntax-highlighter';
import { codePresentationStyles } from './code-presentation.styles';
import { CodePresentationContext } from './code-presentation-context';

export const CodePresentation = component$<CodePresentationProps>((props) => {
  const { tsx, css } = props;

  const isSpoilerOpen = useSignal(false);
  const tabsValue = useSignal<'index.tsx' | 'styles.css'>('index.tsx');

  useContextProvider(CodePresentationContext, { isSpoilerOpen, tabsValue });

  return (
    <div class={codePresentationStyles()}>
      <CodePresentationHero>
        <Slot />
      </CodePresentationHero>

      <CodePresentationSpoiler>
        <CodePresentationSpoilerPanel>
          <CodePresentationSpoilerContent>
            <CodePresentationTabs>
              <div class="flex justify-between bg-default-alpha-2 shadow-[inset_0_-1px_var(--color-default-alpha-6)]">
                <CodePresentationTabsList>
                  <CodePresentationTabsTrigger value="index.tsx">index.tsx</CodePresentationTabsTrigger>
                  <CodePresentationTabsTrigger value="styles.css">styles.css</CodePresentationTabsTrigger>
                </CodePresentationTabsList>

                <div class="flex items-center gap-x-2 pr-2">
                  <CodePresentationSpoilerToggle />
                  <CodePresentationCopyButton tsx={tsx.trim()} css={css.trim()} />
                </div>
              </div>

              <CodePresentationTabsPanel>
                <CodePresentationTabsContent value="index.tsx">
                  <CodePresentationSyntaxHighlighter code={tsx} language="tsx" />
                </CodePresentationTabsContent>

                <CodePresentationTabsContent value="styles.css">
                  <CodePresentationSyntaxHighlighter code={css} language="css" />
                </CodePresentationTabsContent>
              </CodePresentationTabsPanel>
            </CodePresentationTabs>
          </CodePresentationSpoilerContent>
        </CodePresentationSpoilerPanel>

        <CodePresentationSpoilerOverlay>
          <CodePresentationSpoilerOpen />
        </CodePresentationSpoilerOverlay>
      </CodePresentationSpoiler>
    </div>
  );
});
