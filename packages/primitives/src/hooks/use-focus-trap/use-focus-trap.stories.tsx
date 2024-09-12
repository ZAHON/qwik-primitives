import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { component$, useSignal, useComputed$, $ } from '@builder.io/qwik';
import { useFocusTrap } from '.';

const meta: Meta = {
  title: 'Hooks/UI and DOM/useFocusTrap',
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  render: () => {
    const Example = component$(() => {
      const containerRef = useSignal<HTMLDivElement | undefined>(undefined);
      const { active$, deactivate$, getState$ } = useFocusTrap(containerRef);

      const state = useComputed$(() => getState$());

      return (
        <>
          <h2>Example</h2>
          <button type="button" onClick$={active$}>
            Active focus trap
          </button>
          <p>
            <kbd>FocusTrap</kbd> is {state.value}
          </p>
          <div ref={containerRef}>
            <div style={{ border: '1px solid black', borderColor: state.value === 'active' ? 'red' : 'black' }}>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <button type="button" onClick$={deactivate$}>
                  Deactivate focus trap
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });

    return <Example />;
  },
};

export const WithoutFocusableElements: Story = {
  render: () => {
    const WithoutFocusableElements = component$(() => {
      const containerRef = useSignal<HTMLDivElement | undefined>(undefined);
      const { active$, deactivate$, getState$ } = useFocusTrap(containerRef);

      const state = useComputed$(() => getState$());

      return (
        <>
          <h2>Without focusable elements</h2>
          <button type="button" onClick$={active$}>
            Active focus trap
          </button>
          <p>
            <kbd>FocusTrap</kbd> is {state.value}
          </p>
          <div ref={containerRef}>
            <div style={{ border: '1px solid black', borderColor: state.value === 'active' ? 'red' : 'black' }}>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input (disabled)</label>
                <input disabled={true} id="first-input" type="text" placeholder="First input (disabled)" />

                <label for="second-input">Second input (disabled)</label>
                <input disabled={true} id="second-input" type="text" placeholder="Second input (disabled)" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <button disabled={true} type="button" onClick$={deactivate$}>
                  Deactivate focus trap (disabled)
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });

    return <WithoutFocusableElements />;
  },
};

export const InitialFocus: Story = {
  render: () => {
    const InitialFocus = component$(() => {
      const containerRef = useSignal<HTMLDivElement | undefined>(undefined);
      const { active$, deactivate$, getState$ } = useFocusTrap(containerRef);

      const state = useComputed$(() => getState$());

      return (
        <>
          <h2>Initial focus</h2>
          <button type="button" onClick$={active$}>
            Active focus trap
          </button>
          <p>
            <kbd>FocusTrap</kbd> is {state.value}
          </p>
          <div ref={containerRef}>
            <div style={{ border: '1px solid black', borderColor: state.value === 'active' ? 'red' : 'black' }}>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input (will have initial focus)</label>
                <input
                  data-qwik-primitives-auto-focus=""
                  id="second-input"
                  type="text"
                  placeholder="Second input (will have initial focus)"
                />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <button type="button" onClick$={deactivate$}>
                  Deactivate focus trap
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });

    return <InitialFocus />;
  },
};

export const WithDisabledInitialFocusElement: Story = {
  render: () => {
    const WithDisabledInitialFocusElement = component$(() => {
      const containerRef = useSignal<HTMLDivElement | undefined>(undefined);
      const { active$, deactivate$, getState$ } = useFocusTrap(containerRef);

      const state = useComputed$(() => getState$());

      return (
        <>
          <h2>With disabled initial focus element</h2>
          <button type="button" onClick$={active$}>
            Active focus trap
          </button>
          <p>
            <kbd>FocusTrap</kbd> is {state.value}
          </p>
          <div ref={containerRef}>
            <div style={{ border: '1px solid black', borderColor: state.value === 'active' ? 'red' : 'black' }}>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">
                  Second input (have data-qwik-primitives-auto-focus attribute but is disabled)
                </label>
                <input
                  disabled={true}
                  data-qwik-primitives-auto-focus=""
                  id="second-input"
                  type="text"
                  placeholder="Second input (have data-qwik-primitives-auto-focus attribute but is disabled)"
                />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <button type="button" onClick$={deactivate$}>
                  Deactivate focus trap
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });

    return <WithDisabledInitialFocusElement />;
  },
};

export const WithoutInitialFocus: Story = {
  render: () => {
    const WithoutInitialFocus = component$(() => {
      const containerRef = useSignal<HTMLDivElement | undefined>(undefined);
      const { active$, deactivate$, getState$ } = useFocusTrap(containerRef, { autoFocus: false });

      const state = useComputed$(() => getState$());

      return (
        <>
          <h2>Without initial focus</h2>
          <button type="button" onClick$={active$}>
            Active focus trap
          </button>
          <p>
            <kbd>FocusTrap</kbd> is {state.value}
          </p>
          <div ref={containerRef}>
            <div style={{ border: '1px solid black', borderColor: state.value === 'active' ? 'red' : 'black' }}>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <button type="button" onClick$={deactivate$}>
                  Deactivate focus trap
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });

    return <WithoutInitialFocus />;
  },
};

export const RestoreFocus: Story = {
  render: () => {
    const RestoreFocus = component$(() => {
      const containerRef = useSignal<HTMLDivElement | undefined>(undefined);
      const restoreFocusElementRef = useSignal<HTMLButtonElement | undefined>(undefined);
      const { active$, deactivate$, getState$ } = useFocusTrap(containerRef, { restoreFocus: false });

      const state = useComputed$(() => getState$());

      const deactivateFocusTrap$ = $(() => {
        if (state.value === 'active') {
          deactivate$();

          // Using `setTimeout` is required, without it the element will not receive focus.
          setTimeout(() => {
            if (restoreFocusElementRef.value) {
              restoreFocusElementRef.value.focus();
            }
          });
        }
      });

      return (
        <>
          <h2>Restore focus</h2>
          <div style={{ display: 'flex', columnGap: '0.25rem' }}>
            <button type="button" onClick$={active$}>
              Active focus trap
            </button>
            <button ref={restoreFocusElementRef} type="button">
              Button (focus will be move on this element after deactivate focus trap)
            </button>
          </div>
          <p>
            <kbd>FocusTrap</kbd> is {state.value}
          </p>
          <div ref={containerRef}>
            <div style={{ border: '1px solid black', borderColor: state.value === 'active' ? 'red' : 'black' }}>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <button type="button" onClick$={deactivateFocusTrap$}>
                  Deactivate focus trap
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });

    return <RestoreFocus />;
  },
};

export const WithoutRestoreFocus: Story = {
  render: () => {
    const WithoutRestoreFocus = component$(() => {
      const containerRef = useSignal<HTMLDivElement | undefined>(undefined);
      const { active$, deactivate$, getState$ } = useFocusTrap(containerRef, { restoreFocus: false });

      const state = useComputed$(() => getState$());

      return (
        <>
          <h2>Without restore focus</h2>
          <button type="button" onClick$={active$}>
            Active focus trap
          </button>
          <p>
            <kbd>FocusTrap</kbd> is {state.value}
          </p>
          <div ref={containerRef}>
            <div style={{ border: '1px solid black', borderColor: state.value === 'active' ? 'red' : 'black' }}>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <button type="button" onClick$={deactivate$}>
                  Deactivate focus trap
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });

    return <WithoutRestoreFocus />;
  },
};

export const WithoutLoop: Story = {
  render: () => {
    const WithoutLoop = component$(() => {
      const containerRef = useSignal<HTMLDivElement | undefined>(undefined);
      const { active$, deactivate$, getState$ } = useFocusTrap(containerRef, { loop: false });

      const state = useComputed$(() => getState$());

      return (
        <>
          <h2>Without loop</h2>
          <button type="button" onClick$={active$}>
            Active focus trap
          </button>
          <p>
            <kbd>FocusTrap</kbd> is {state.value}
          </p>
          <div ref={containerRef}>
            <div style={{ border: '1px solid black', borderColor: state.value === 'active' ? 'red' : 'black' }}>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <button type="button" onClick$={deactivate$}>
                  Deactivate focus trap
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });

    return <WithoutLoop />;
  },
};
