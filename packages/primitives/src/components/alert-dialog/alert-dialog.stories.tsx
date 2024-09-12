import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { component$, useSignal, $, useVisibleTask$, useStyles$ } from '@builder.io/qwik';
import * as AlertDialog from '.';

const meta: Meta<typeof AlertDialog.Root> = {
  title: 'Components/AlertDialog',
};

export default meta;
type Story = StoryObj<typeof AlertDialog.Root>;

export const Uncontrolled: Story = {
  render: () => {
    return (
      <>
        <h2>Uncontrolled</h2>
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
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
          <AlertDialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
            <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
              <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
              <div style={{ display: 'flex', columnGap: '0.75rem' }}>
                <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
                <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
                <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
                <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Root>
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
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content closeOnEscapeKeyDown={false}>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
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
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content closeOnEscapeKeyDown={true}>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
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
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content closeOnClickOutside={false}>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
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
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content closeOnClickOutside={true}>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
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
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action disabled={true}>First alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Second alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel disabled={true}>Alert dialog cancel (diabled)</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const WithoutAlertCancel: Story = {
  render: () => {
    return (
      <>
        <h2>Without alert cancel</h2>
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const WithDisabledAlertCancel: Story = {
  render: () => {
    return (
      <>
        <h2>With disabled alert cancel</h2>
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel disabled={true}>Alert dialog cancel (disabled)</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
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
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action data-qwik-primitives-auto-focus="">
                Second alert dialog action (will have initial focus)
              </AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
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
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true} data-qwik-primitives-auto-focus="">
                Second alert dialog action (have data-qwik-primitives-auto-focus attribute but is disabled)
              </AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
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
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content autoFocus={false}>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const WithoutRestoreFocus: Story = {
  render: () => {
    return (
      <>
        <h2>Without restore focus</h2>
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content restoreFocus={false}>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
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
          <AlertDialog.Root>
            <div style={{ display: 'flex', columnGap: '0.25rem' }}>
              <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
              <button ref={restoreFocusElementRef} type="button">
                Button (focus will be move on this element after alert dialog close)
              </button>
            </div>
            <AlertDialog.Content restoreFocus={false} onClose$={handleClose$}>
              <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
              <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
              <div style={{ display: 'flex', columnGap: '0.75rem' }}>
                <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
                <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
                <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
                <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Root>
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
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content loop={false}>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
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
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
          <AlertDialog.Content loop={true}>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
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
        <AlertDialog.Root>
          <AlertDialog.Trigger>Open alert dialog 1</AlertDialog.Trigger>
          <AlertDialog.Content style={{ padding: '3rem', backgroundColor: 'cadetblue' }}>
            <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
            <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
            <div style={{ display: 'flex', columnGap: '0.75rem' }}>
              <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
              <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
              <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
              <AlertDialog.Cancel>Alert dialog cancel 1</AlertDialog.Cancel>
            </div>

            <AlertDialog.Root>
              <AlertDialog.Trigger>Open alert dialog 2</AlertDialog.Trigger>
              <AlertDialog.Content style={{ padding: '2rem', backgroundColor: 'cadetblue' }}>
                <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
                <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
                <div style={{ display: 'flex', columnGap: '0.75rem' }}>
                  <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
                  <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
                  <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
                  <AlertDialog.Cancel>Alert dialog cancel 2</AlertDialog.Cancel>
                </div>

                <AlertDialog.Root>
                  <AlertDialog.Trigger>Open alert dialog 3</AlertDialog.Trigger>
                  <AlertDialog.Content style={{ padding: '1rem', backgroundColor: 'violet' }}>
                    <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
                    <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
                    <div style={{ display: 'flex', columnGap: '0.75rem' }}>
                      <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
                      <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
                      <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
                      <AlertDialog.Cancel>Alert dialog cancel 3</AlertDialog.Cancel>
                    </div>
                  </AlertDialog.Content>
                </AlertDialog.Root>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </AlertDialog.Content>
        </AlertDialog.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const NestedAnimated: Story = {
  render: () => {
    const NestedAnimated = component$(() => {
      useStyles$(`
				.alert-dialog-content {
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
				
				.alert-dialog-content[data-state='open'] {
					animation: alert-dialog-content-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.alert-dialog-content[data-state='closed'] {
					animation: alert-dialog-content-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.alert-dialog-content::backdrop {
					background-color: rgba(0, 0, 0, 0.5);
				}
				
				.alert-dialog-content[data-state='open']::backdrop {
					animation: alert-dialog-content-backdrop-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.alert-dialog-content[data-state='closed']::backdrop {
					animation: alert-dialog-content-backdrop-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				@keyframes alert-dialog-content-show {
					0% {
						opacity: 0;
						transform: translate(-50%, -48%) scale(0.96);
					}
					100% {
						opacity: 1;
						transform: translate(-50%, -50%) scale(1);
					}
				}
				
				@keyframes alert-dialog-content-hide {
					0% {
						opacity: 1;
						transform: translate(-50%, -50%) scale(1);
					}
					100% {
						opacity: 0;
						transform: translate(-50%, -48%) scale(0.96);
					}
				}
				
				@keyframes alert-dialog-content-backdrop-show {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
				
				@keyframes alert-dialog-content-backdrop-hide {
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
          <AlertDialog.Root>
            <AlertDialog.Trigger>Open alert dialog 1</AlertDialog.Trigger>
            <AlertDialog.Content style={{ padding: '3rem', backgroundColor: 'cadetblue' }} class="alert-dialog-content">
              <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
              <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
              <div style={{ display: 'flex', columnGap: '0.75rem' }}>
                <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
                <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
                <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
                <AlertDialog.Cancel>Alert dialog cancel 1</AlertDialog.Cancel>
              </div>

              <AlertDialog.Root>
                <AlertDialog.Trigger>Open alert dialog 2</AlertDialog.Trigger>
                <AlertDialog.Content
                  style={{ padding: '2rem', backgroundColor: 'cadetblue' }}
                  class="alert-dialog-content"
                >
                  <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
                  <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
                  <div style={{ display: 'flex', columnGap: '0.75rem' }}>
                    <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
                    <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
                    <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
                    <AlertDialog.Cancel>Alert dialog cancel 2</AlertDialog.Cancel>
                  </div>

                  <AlertDialog.Root>
                    <AlertDialog.Trigger>Open alert dialog 3</AlertDialog.Trigger>
                    <AlertDialog.Content
                      style={{ padding: '1rem', backgroundColor: 'violet' }}
                      class="alert-dialog-content"
                    >
                      <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
                      <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
                      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
                        <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
                        <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
                        <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
                        <AlertDialog.Cancel>Alert dialog cancel 3</AlertDialog.Cancel>
                      </div>
                    </AlertDialog.Content>
                  </AlertDialog.Root>
                </AlertDialog.Content>
              </AlertDialog.Root>
            </AlertDialog.Content>
          </AlertDialog.Root>
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
          <AlertDialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
            <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
              <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
              <div style={{ display: 'flex', columnGap: '0.75rem' }}>
                <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
                <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
                <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
                <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Root>
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
				.alert-dialog-content {
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
				
				.alert-dialog-content[data-state='open'] {
					animation: alert-dialog-content-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.alert-dialog-content[data-state='closed'] {
					animation: alert-dialog-content-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.alert-dialog-content::backdrop {
					background-color: rgba(0, 0, 0, 0.5);
				}
				
				.alert-dialog-content[data-state='open']::backdrop {
					animation: alert-dialog-content-backdrop-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.alert-dialog-content[data-state='closed']::backdrop {
					animation: alert-dialog-content-backdrop-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				@keyframes alert-dialog-content-show {
					0% {
						opacity: 0;
						transform: translate(-50%, -48%) scale(0.96);
					}
					100% {
						opacity: 1;
						transform: translate(-50%, -50%) scale(1);
					}
				}
				
				@keyframes alert-dialog-content-hide {
					0% {
						opacity: 1;
						transform: translate(-50%, -50%) scale(1);
					}
					100% {
						opacity: 0;
						transform: translate(-50%, -48%) scale(0.96);
					}
				}
				
				@keyframes alert-dialog-content-backdrop-show {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
				
				@keyframes alert-dialog-content-backdrop-hide {
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
          <AlertDialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
            <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
            <AlertDialog.Content class="alert-dialog-content">
              <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
              <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
              <div style={{ display: 'flex', columnGap: '0.75rem' }}>
                <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
                <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
                <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
                <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Root>
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
				.alert-dialog-content {
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
				
				.alert-dialog-content[data-state='open'] {
					animation: alert-dialog-content-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.alert-dialog-content[data-state='closed'] {
					animation: alert-dialog-content-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.alert-dialog-content::backdrop {
					background-color: rgba(0, 0, 0, 0.5);
				}
				
				.alert-dialog-content[data-state='open']::backdrop {
					animation: alert-dialog-content-backdrop-show 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				.alert-dialog-content[data-state='closed']::backdrop {
					animation: alert-dialog-content-backdrop-hide 1500ms cubic-bezier(0.16, 1, 0.3, 1);
				}
				
				@keyframes alert-dialog-content-show {
					0% {
						opacity: 0;
						transform: translate(-50%, -48%) scale(0.96);
					}
					100% {
						opacity: 1;
						transform: translate(-50%, -50%) scale(1);
					}
				}
				
				@keyframes alert-dialog-content-hide {
					0% {
						opacity: 1;
						transform: translate(-50%, -50%) scale(1);
					}
					100% {
						opacity: 0;
						transform: translate(-50%, -48%) scale(0.96);
					}
				}
				
				@keyframes alert-dialog-content-backdrop-show {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
				
				@keyframes alert-dialog-content-backdrop-hide {
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
          <AlertDialog.Root>
            <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
            <AlertDialog.Content class="alert-dialog-content">
              <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
              <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
              <div style={{ display: 'flex', columnGap: '0.75rem' }}>
                <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
                <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
                <AlertDialog.Action disabled={true}>Third alert dialog action (diabled)</AlertDialog.Action>
                <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Root>
          <div style={{ height: '200vh' }} />
        </>
      );
    });

    return <Animated />;
  },
};
