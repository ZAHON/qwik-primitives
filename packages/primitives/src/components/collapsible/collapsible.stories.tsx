import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import * as Collapsible from '.';

const meta: Meta<typeof Collapsible.Root> = {
  title: 'Components/Collapsible',
};

export default meta;
type Story = StoryObj<typeof Collapsible.Root>;

export const Uncontrolled: Story = {
  render: () => {
    return (
      <>
        <h2>Uncontrolled closed by default</h2>
        <Collapsible.Root defaultOpen={false}>
          <Collapsible.Trigger>Toggle</Collapsible.Trigger>
          <Collapsible.Panel>
            <Collapsible.Content>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium necessitatibus
              rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus molestiae hic
              doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus magni recusandae
              voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae necessitatibus, illum adipisci
              sit reprehenderit quas odit. Recusandae quas totam accusamus esse deleniti asperiores voluptatibus natus
              ut, tempora expedita tempore corrupti minima quaerat autem aliquam quisquam quidem nostrum nesciunt neque.
              Excepturi, nostrum. Eveniet, placeat consequatur, eligendi dolor quibusdam illum blanditiis officia sed
              nesciunt quia ipsam veritatis odio illo. Optio, perferendis?
            </Collapsible.Content>
          </Collapsible.Panel>
        </Collapsible.Root>

        <h2>Uncontrolled open by default</h2>
        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Trigger>Toggle</Collapsible.Trigger>
          <Collapsible.Panel>
            <Collapsible.Content>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium necessitatibus
              rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus molestiae hic
              doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus magni recusandae
              voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae necessitatibus, illum adipisci
              sit reprehenderit quas odit. Recusandae quas totam accusamus esse deleniti asperiores voluptatibus natus
              ut, tempora expedita tempore corrupti minima quaerat autem aliquam quisquam quidem nostrum nesciunt neque.
              Excepturi, nostrum. Eveniet, placeat consequatur, eligendi dolor quibusdam illum blanditiis officia sed
              nesciunt quia ipsam veritatis odio illo. Optio, perferendis?
            </Collapsible.Content>
          </Collapsible.Panel>
        </Collapsible.Root>
      </>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const ControlledClosedByDefault = component$(() => {
      const isOpen = useSignal(false);

      return (
        <>
          <h2>Controlled closed by default</h2>
          <Collapsible.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
            <Collapsible.Trigger>Toggle</Collapsible.Trigger>
            <Collapsible.Panel>
              <Collapsible.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Collapsible.Content>
            </Collapsible.Panel>
          </Collapsible.Root>
        </>
      );
    });

    const ControlledOpenByDefault = component$(() => {
      const isOpen = useSignal(true);

      return (
        <>
          <h2>Controlled open by default</h2>
          <Collapsible.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
            <Collapsible.Trigger>Toggle</Collapsible.Trigger>
            <Collapsible.Panel>
              <Collapsible.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Collapsible.Content>
            </Collapsible.Panel>
          </Collapsible.Root>
        </>
      );
    });

    return (
      <>
        <ControlledClosedByDefault />
        <ControlledOpenByDefault />
      </>
    );
  },
};

export const AnimatedUncontrolled: Story = {
  render: () => {
    const AnimatedUncontrolledClosedByDefault = component$(() => {
      const id = 'TRvBtEQoBF';

      useStyles$(`
				.${id}-collapsible-panel[data-state='open'] {
					animation: ${id}-collapsible-panel-down 300ms ease-out;
				}
				
				.${id}-collapsible-panel[data-state='closed'] {
					animation: ${id}-collapsible-panel-up 300ms ease-out;
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
          <h2>Animated uncontrolled closed by default</h2>
          <Collapsible.Root defaultOpen={false}>
            <Collapsible.Trigger>Toggle</Collapsible.Trigger>
            <Collapsible.Panel class={`${id}-collapsible-panel`}>
              <Collapsible.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Collapsible.Content>
            </Collapsible.Panel>
          </Collapsible.Root>
        </>
      );
    });

    const AnimatedUncontrolledOpenByDefault = component$(() => {
      const id = 'vXcHEMVAof';

      useStyles$(`
				.${id}-collapsible-panel[data-state='open'] {
					animation: ${id}-collapsible-panel-down 300ms ease-out;
				}
				
				.${id}-collapsible-panel[data-state='closed'] {
					animation: ${id}-collapsible-panel-up 300ms ease-out;
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
          <h2>Animated uncontrolled open by default</h2>
          <Collapsible.Root defaultOpen={true}>
            <Collapsible.Trigger>Toggle</Collapsible.Trigger>
            <Collapsible.Panel class={`${id}-collapsible-panel`}>
              <Collapsible.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Collapsible.Content>
            </Collapsible.Panel>
          </Collapsible.Root>
        </>
      );
    });

    return (
      <>
        <AnimatedUncontrolledClosedByDefault />
        <AnimatedUncontrolledOpenByDefault />
      </>
    );
  },
};

export const AnimatedControlled: Story = {
  render: () => {
    const AnimatedControlledClosedByDefault = component$(() => {
      const isOpen = useSignal(false);

      const id = 'CqPUhUdjAG';

      useStyles$(`
				.${id}-collapsible-panel[data-state='open'] {
					animation: ${id}-collapsible-panel-down 300ms ease-out;
				}
				
				.${id}-collapsible-panel[data-state='closed'] {
					animation: ${id}-collapsible-panel-up 300ms ease-out;
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
          <Collapsible.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
            <Collapsible.Trigger>Toggle</Collapsible.Trigger>
            <Collapsible.Panel class={`${id}-collapsible-panel`}>
              <Collapsible.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Collapsible.Content>
            </Collapsible.Panel>
          </Collapsible.Root>
        </>
      );
    });

    const AnimatedControlledOpenByDefault = component$(() => {
      const isOpen = useSignal(true);

      const id = 'AWfwqgHzXz';

      useStyles$(`
				.${id}-collapsible-panel[data-state='open'] {
					animation: ${id}-collapsible-panel-down 300ms ease-out;
				}
				
				.${id}-collapsible-panel[data-state='closed'] {
					animation: ${id}-collapsible-panel-up 300ms ease-out;
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
          <h2>Animated controlled open by default</h2>
          <Collapsible.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
            <Collapsible.Trigger>Toggle</Collapsible.Trigger>
            <Collapsible.Panel class={`${id}-collapsible-panel`}>
              <Collapsible.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Collapsible.Content>
            </Collapsible.Panel>
          </Collapsible.Root>
        </>
      );
    });

    return (
      <>
        <AnimatedControlledClosedByDefault />
        <AnimatedControlledOpenByDefault />
      </>
    );
  },
};
