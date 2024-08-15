import { component$, useStyles$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';

export const Animated = component$(() => {
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
			animation: dialog-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
		}
		
		.dialog-content[data-state='closed'] {
			animation: dialog-content-hide 150ms cubic-bezier(0.16, 1, 0.3, 1);
		}
		
		.dialog-content::backdrop {
			background-color: rgba(0, 0, 0, 0.5);
		}
		
		.dialog-content[data-state='open']::backdrop {
			animation: dialog-content-backdrop-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
		}
		
		.dialog-content[data-state='closed']::backdrop {
			animation: dialog-content-backdrop-hide 150ms cubic-bezier(0.16, 1, 0.3, 1);
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
          <Dialog.Close>Close dialog</Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
      <div style={{ height: '200vh' }} />
    </>
  );
});
