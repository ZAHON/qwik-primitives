import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { component$, useSignal, $, useVisibleTask$, useStyles$ } from '@builder.io/qwik';
import * as Dialog from '.';

const meta: Meta<typeof Dialog.Root> = {
  title: 'Components/Dialog',
};

export default meta;
type Story = StoryObj<typeof Dialog.Root>;

export const Uncontrolled: Story = {
  render: () => {
    return (
      <>
        <h2>Uncontrolled</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog</Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input</label>
              <input id="first-input" type="text" placeholder="First input" />

              <label for="second-input">Second input</label>
              <input id="second-input" type="text" placeholder="Second input" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Dialog.Close>Close dialog</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const Controlled = component$(() => {
      const isOpen = useSignal(false);

      return (
        <>
          <h2>Controlled</h2>
          <Dialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
            <Dialog.Trigger>Open dialog</Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Title>Dialog title</Dialog.Title>
              <Dialog.Description>Dialog description</Dialog.Description>

              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <Dialog.Close>Close dialog</Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Root>
          <div style={{ height: '200vh' }} />
        </>
      );
    });

    return <Controlled />;
  },
};

export const WithoutCloseOnEscapeKeyDown: Story = {
  render: () => {
    return (
      <>
        <h2>Without close on escape key down</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog</Dialog.Trigger>
          <Dialog.Content closeOnEscapeKeyDown={false}>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input</label>
              <input id="first-input" type="text" placeholder="First input" />

              <label for="second-input">Second input</label>
              <input id="second-input" type="text" placeholder="Second input" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Dialog.Close>Close dialog</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const WithCloseOnEscapeKeyDown: Story = {
  render: () => {
    return (
      <>
        <h2>With close on escape key down</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog</Dialog.Trigger>
          <Dialog.Content closeOnEscapeKeyDown={true}>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input</label>
              <input id="first-input" type="text" placeholder="First input" />

              <label for="second-input">Second input</label>
              <input id="second-input" type="text" placeholder="Second input" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Dialog.Close>Close dialog</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const WithoutCloseOnClickOutside: Story = {
  render: () => {
    return (
      <>
        <h2>Without close on click outside</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog</Dialog.Trigger>
          <Dialog.Content closeOnClickOutside={false}>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input</label>
              <input id="first-input" type="text" placeholder="First input" />

              <label for="second-input">Second input</label>
              <input id="second-input" type="text" placeholder="Second input" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Dialog.Close>Close dialog</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const WithCloseOnClickOutside: Story = {
  render: () => {
    return (
      <>
        <h2>With close on click outside</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog</Dialog.Trigger>
          <Dialog.Content closeOnClickOutside={true}>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input</label>
              <input id="first-input" type="text" placeholder="First input" />

              <label for="second-input">Second input</label>
              <input id="second-input" type="text" placeholder="Second input" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Dialog.Close>Close dialog</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const WithoutFocusableElements: Story = {
  render: () => {
    return (
      <>
        <h2>Without focusable elements</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog</Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input (disabled)</label>
              <input disabled={true} id="first-input" type="text" placeholder="First input (disabled)" />

              <label for="second-input">Second input (disabled)</label>
              <input disabled={true} id="second-input" type="text" placeholder="Second input (disabled)" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Dialog.Close disabled={true}>Close dialog (disabled)</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const InitialFocus: Story = {
  render: () => {
    return (
      <>
        <h2>Initial focus</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog</Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>

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

              <Dialog.Close>Close dialog</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const WithDisabledInitialFocusElement: Story = {
  render: () => {
    return (
      <>
        <h2>With disabled initial focus element</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog</Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>

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

              <Dialog.Close>Close dialog</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const WithoutInitialFocus: Story = {
  render: () => {
    return (
      <>
        <h2>Without initial focus</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog</Dialog.Trigger>
          <Dialog.Content autoFocus={false}>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input</label>
              <input id="first-input" type="text" placeholder="First input" />

              <label for="second-input">Second input</label>
              <input id="second-input" type="text" placeholder="Second input" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Dialog.Close>Close dialog</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const WithoutRestoreFocus: Story = {
  render: () => {
    const RestoreFocus = component$(() => {
      return (
        <>
          <h2>Without restore focus</h2>
          <Dialog.Root>
            <Dialog.Trigger>Open dialog</Dialog.Trigger>
            <Dialog.Content restoreFocus={false}>
              <Dialog.Title>Dialog title</Dialog.Title>
              <Dialog.Description>Dialog description</Dialog.Description>

              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <Dialog.Close>Close dialog</Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Root>
          <div style={{ height: '200vh' }} />
        </>
      );
    });

    return <RestoreFocus />;
  },
};

export const RestoreFocus: Story = {
  render: () => {
    const RestoreFocus = component$(() => {
      const restoreFocusElementRef = useSignal<HTMLButtonElement | undefined>(undefined);

      const handleClose$ = $(() => {
        // Using `setTimeout` is required, without it the element will not receive focus.
        setTimeout(() => {
          if (restoreFocusElementRef.value) {
            restoreFocusElementRef.value.focus();
          }
        });
      });

      return (
        <>
          <h2>Restore focus</h2>
          <Dialog.Root>
            <div style={{ display: 'flex', columnGap: '0.25rem' }}>
              <Dialog.Trigger>Open dialog</Dialog.Trigger>
              <button ref={restoreFocusElementRef} type="button">
                Button (focus will be move on this element after dialog close)
              </button>
            </div>
            <Dialog.Content restoreFocus={false} onClose$={handleClose$}>
              <Dialog.Title>Dialog title</Dialog.Title>
              <Dialog.Description>Dialog description</Dialog.Description>

              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <Dialog.Close>Close dialog</Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Root>
          <div style={{ height: '200vh' }} />
        </>
      );
    });

    return <RestoreFocus />;
  },
};

export const WithoutLoop: Story = {
  render: () => {
    return (
      <>
        <h2>Without loop</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog</Dialog.Trigger>
          <Dialog.Content loop={false}>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input</label>
              <input id="first-input" type="text" placeholder="First input" />

              <label for="second-input">Second input</label>
              <input id="second-input" type="text" placeholder="Second input" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Dialog.Close>Close dialog</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const WithLoop: Story = {
  render: () => {
    return (
      <>
        <h2>With loop</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog</Dialog.Trigger>
          <Dialog.Content loop={true}>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input</label>
              <input id="first-input" type="text" placeholder="First input" />

              <label for="second-input">Second input</label>
              <input id="second-input" type="text" placeholder="Second input" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Dialog.Close>Close dialog</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const Nested: Story = {
  render: () => {
    return (
      <>
        <h2>Nested</h2>
        <Dialog.Root>
          <Dialog.Trigger>Open dialog 1</Dialog.Trigger>
          <Dialog.Content style={{ width: '380px', backgroundColor: 'black' }}>
            <Dialog.Title>Dialog title 1</Dialog.Title>
            <Dialog.Description>Dialog description 1</Dialog.Description>
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input</label>
              <input id="first-input" type="text" placeholder="First input" />

              <label for="second-input">Second input</label>
              <input id="second-input" type="text" placeholder="Second input" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Dialog.Close>Close dialog 1</Dialog.Close>
            </div>

            <Dialog.Root>
              <Dialog.Trigger>Open dialog 2</Dialog.Trigger>
              <Dialog.Content style={{ width: '340px', backgroundColor: 'cadetblue' }}>
                <Dialog.Title>Dialog title 2</Dialog.Title>
                <Dialog.Description>Dialog description 2</Dialog.Description>
                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                  <label for="first-input">First input</label>
                  <input id="first-input" type="text" placeholder="First input" />

                  <label for="second-input">Second input</label>
                  <input id="second-input" type="text" placeholder="Second input" />

                  <label for="third-input">Third input (disabled)</label>
                  <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                  <Dialog.Close>Close dialog 2</Dialog.Close>
                </div>

                <Dialog.Root>
                  <Dialog.Trigger>Open dialog 3</Dialog.Trigger>
                  <Dialog.Content style={{ width: '300px', backgroundColor: 'violet' }}>
                    <Dialog.Title>Dialog title 3</Dialog.Title>
                    <Dialog.Description>Dialog description 3</Dialog.Description>
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                      <label for="first-input">First input</label>
                      <input id="first-input" type="text" placeholder="First input" />

                      <label for="second-input">Second input</label>
                      <input id="second-input" type="text" placeholder="Second input" />

                      <label for="third-input">Third input (disabled)</label>
                      <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                      <Dialog.Close>Close dialog 3</Dialog.Close>
                    </div>
                  </Dialog.Content>
                </Dialog.Root>
              </Dialog.Content>
            </Dialog.Root>
          </Dialog.Content>
        </Dialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const NestedAnimated: Story = {
  render: () => {
    const NestedAnimated = component$(() => {
      useStyles$(`
			.dialog-content {
				margin: unset;
				border: unset;
				position: fixed;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 90vw;
				max-width: 450px;
				max-height: 85vh;
			}
			
			.dialog-content[data-state='open'] {
				animation: dialog-content-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
			}
			
			.dialog-content[data-state='closed'] {
				animation: dialog-content-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
			}
			
			.dialog-content::backdrop {
				background-color: rgba(0, 0, 0, 0.5);
			}
			
			.dialog-content[data-state='open']::backdrop {
				animation: dialog-content-backdrop-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
			}
			
			.dialog-content[data-state='closed']::backdrop {
				animation: dialog-content-backdrop-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
			}
			
			@keyframes dialog-content-show {
				0% {
					opacity: 0;
					transform: translate(-50%, -48%) scale(0.96);
				}
				100% {
					opacity: 1;
					transform: translate(-50%, -50%) scale(1);
				}
			}
			
			@keyframes dialog-content-hide {
				0% {
					opacity: 1;
					transform: translate(-50%, -50%) scale(1);
				}
				100% {
					opacity: 0;
					transform: translate(-50%, -48%) scale(0.96);
				}
			}
			
			@keyframes dialog-content-backdrop-show {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
			
			@keyframes dialog-content-backdrop-hide {
				0% {
					opacity: 1;
				}
				100% {
					opacity: 0;
				}
			}		
		`);

      return (
        <>
          <h2>Nested animated</h2>
          <Dialog.Root>
            <Dialog.Trigger>Open dialog 1</Dialog.Trigger>
            <Dialog.Content style={{ width: '380px', backgroundColor: 'black' }} class="dialog-content">
              <Dialog.Title>Dialog title 1</Dialog.Title>
              <Dialog.Description>Dialog description 1</Dialog.Description>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <Dialog.Close>Close dialog 1</Dialog.Close>
              </div>

              <Dialog.Root>
                <Dialog.Trigger>Open dialog 2</Dialog.Trigger>
                <Dialog.Content style={{ width: '340px', backgroundColor: 'cadetblue' }} class="dialog-content">
                  <Dialog.Title>Dialog title 2</Dialog.Title>
                  <Dialog.Description>Dialog description 2</Dialog.Description>
                  <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                    <label for="first-input">First input</label>
                    <input id="first-input" type="text" placeholder="First input" />

                    <label for="second-input">Second input</label>
                    <input id="second-input" type="text" placeholder="Second input" />

                    <label for="third-input">Third input (disabled)</label>
                    <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                    <Dialog.Close>Close dialog 2</Dialog.Close>
                  </div>

                  <Dialog.Root>
                    <Dialog.Trigger>Open dialog 3</Dialog.Trigger>
                    <Dialog.Content style={{ width: '300px', backgroundColor: 'violet' }} class="dialog-content">
                      <Dialog.Title>Dialog title 3</Dialog.Title>
                      <Dialog.Description>Dialog description 3</Dialog.Description>
                      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                        <label for="first-input">First input</label>
                        <input id="first-input" type="text" placeholder="First input" />

                        <label for="second-input">Second input</label>
                        <input id="second-input" type="text" placeholder="Second input" />

                        <label for="third-input">Third input (disabled)</label>
                        <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                        <Dialog.Close>Close dialog 3</Dialog.Close>
                      </div>
                    </Dialog.Content>
                  </Dialog.Root>
                </Dialog.Content>
              </Dialog.Root>
            </Dialog.Content>
          </Dialog.Root>
          <div style={{ height: '200vh' }} />
        </>
      );
    });

    return <NestedAnimated />;
  },
};

export const InitiallyOpen: Story = {
  render: () => {
    const InitiallyOpen = component$(() => {
      const isOpen = useSignal(false);

      // eslint-disable-next-line qwik/no-use-visible-task
      useVisibleTask$(
        () => {
          isOpen.value = true;
        },
        { strategy: 'document-ready' }
      );

      return (
        <>
          <h2>Initially open</h2>
          <Dialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
            <Dialog.Trigger>Open dialog</Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Title>Dialog title</Dialog.Title>
              <Dialog.Description>Dialog description</Dialog.Description>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <Dialog.Close>Close dialog</Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Root>
          <div style={{ height: '200vh' }} />
        </>
      );
    });

    return <InitiallyOpen />;
  },
};

export const InitiallyOpenAnimated: Story = {
  render: () => {
    const InitiallyOpenAnimated = component$(() => {
      const isOpen = useSignal(false);

      // eslint-disable-next-line qwik/no-use-visible-task
      useVisibleTask$(
        () => {
          isOpen.value = true;
        },
        { strategy: 'document-ready' }
      );

      useStyles$(`
				.dialog-content {
					margin: unset;
					border: unset;
					position: fixed;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 90vw;
					max-width: 450px;
					max-height: 85vh;
				}
				
				.dialog-content[data-state='open'] {
					animation: dialog-content-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.dialog-content[data-state='closed'] {
					animation: dialog-content-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.dialog-content::backdrop {
					background-color: rgba(0, 0, 0, 0.5);
				}
				
				.dialog-content[data-state='open']::backdrop {
					animation: dialog-content-backdrop-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.dialog-content[data-state='closed']::backdrop {
					animation: dialog-content-backdrop-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				@keyframes dialog-content-show {
					0% {
						opacity: 0;
						transform: translate(-50%, -48%) scale(0.96);
					}
					100% {
						opacity: 1;
						transform: translate(-50%, -50%) scale(1);
					}
				}
				
				@keyframes dialog-content-hide {
					0% {
						opacity: 1;
						transform: translate(-50%, -50%) scale(1);
					}
					100% {
						opacity: 0;
						transform: translate(-50%, -48%) scale(0.96);
					}
				}
				
				@keyframes dialog-content-backdrop-show {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
				
				@keyframes dialog-content-backdrop-hide {
					0% {
						opacity: 1;
					}
					100% {
						opacity: 0;
					}
				}		
			`);

      return (
        <>
          <h2>Initially open animated</h2>
          <Dialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
            <Dialog.Trigger>Open dialog</Dialog.Trigger>
            <Dialog.Content class="dialog-content">
              <Dialog.Title>Dialog title</Dialog.Title>
              <Dialog.Description>Dialog description</Dialog.Description>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <Dialog.Close>Close dialog</Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Root>
          <div style={{ height: '200vh' }} />
        </>
      );
    });

    return <InitiallyOpenAnimated />;
  },
};

export const Animated: Story = {
  render: () => {
    const Animated = component$(() => {
      useStyles$(`
				.dialog-content {
					margin: unset;
					border: unset;
					position: fixed;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 90vw;
					max-width: 450px;
					max-height: 85vh;
				}
				
				.dialog-content[data-state='open'] {
					animation: dialog-content-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.dialog-content[data-state='closed'] {
					animation: dialog-content-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.dialog-content::backdrop {
					background-color: rgba(0, 0, 0, 0.5);
				}
				
				.dialog-content[data-state='open']::backdrop {
					animation: dialog-content-backdrop-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.dialog-content[data-state='closed']::backdrop {
					animation: dialog-content-backdrop-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				@keyframes dialog-content-show {
					0% {
						opacity: 0;
						transform: translate(-50%, -48%) scale(0.96);
					}
					100% {
						opacity: 1;
						transform: translate(-50%, -50%) scale(1);
					}
				}
				
				@keyframes dialog-content-hide {
					0% {
						opacity: 1;
						transform: translate(-50%, -50%) scale(1);
					}
					100% {
						opacity: 0;
						transform: translate(-50%, -48%) scale(0.96);
					}
				}
				
				@keyframes dialog-content-backdrop-show {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
				
				@keyframes dialog-content-backdrop-hide {
					0% {
						opacity: 1;
					}
					100% {
						opacity: 0;
					}
				}		
			`);

      return (
        <>
          <h2>Animated</h2>
          <Dialog.Root>
            <Dialog.Trigger>Open dialog</Dialog.Trigger>
            <Dialog.Content class="dialog-content">
              <Dialog.Title>Dialog title</Dialog.Title>
              <Dialog.Description>Dialog description</Dialog.Description>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <Dialog.Close>Close dialog</Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Root>
          <div style={{ height: '200vh' }} />
        </>
      );
    });

    return <Animated />;
  },
};
