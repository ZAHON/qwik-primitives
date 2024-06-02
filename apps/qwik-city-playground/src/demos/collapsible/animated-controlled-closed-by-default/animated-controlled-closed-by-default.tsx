import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';

export const AnimatedControlledClosedByDefault = component$(() => {
  const open = useSignal(false);

  const id = 'CqPUhUdjAG';

  useStyles$(`
		.${id}-collapsible-panel[data-state='open'] {
			animation: ${id}-collapsible-panel-down 300ms ease-out;
		}
		
		.${id}-collapsible-panel[data-state='closed'] {
			animation: ${id}-collapsible-panel-up 300ms ease-out;
		}
		
		.${id}-collapsible-content {
			overflow: hidden;
		}
		
		@keyframes ${id}-collapsible-panel-down {
			0% {
				grid-template-rows: 0fr;
			}
			100% {
				grid-template-rows: 1fr;
			}
		}
		
		@keyframes ${id}-collapsible-panel-up {
			0% {
				grid-template-rows: 1fr;
			}
			100% {
				grid-template-rows: 0fr;
			}
		}
	`);

  return (
    <>
      <h2>Animated controlled closed by default</h2>
      <Collapsible.Root open={open}>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Panel class={`${id}-collapsible-panel`}>
          <Collapsible.Content class={`${id}-collapsible-content`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium necessitatibus
            rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus molestiae hic doloremque.
            Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus magni recusandae voluptatem,
            mollitia illo tenetur eum enim blanditiis, nam pariatur vitae necessitatibus, illum adipisci sit
            reprehenderit quas odit. Recusandae quas totam accusamus esse deleniti asperiores voluptatibus natus ut,
            tempora expedita tempore corrupti minima quaerat autem aliquam quisquam quidem nostrum nesciunt neque.
            Excepturi, nostrum. Eveniet, placeat consequatur, eligendi dolor quibusdam illum blanditiis officia sed
            nesciunt quia ipsam veritatis odio illo. Optio, perferendis?
          </Collapsible.Content>
        </Collapsible.Panel>
      </Collapsible.Root>
    </>
  );
});
