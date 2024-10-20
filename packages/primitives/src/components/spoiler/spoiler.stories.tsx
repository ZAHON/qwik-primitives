import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import * as Spoiler from '.';

const meta: Meta<typeof Spoiler.Root> = {
  title: 'Components/Spoiler',
};

export default meta;
type Story = StoryObj<typeof Spoiler.Root>;

export const Uncontrolled: Story = {
  render: () => {
    return (
      <>
        <h2>Uncontrolled closed by default</h2>
        <Spoiler.Root defaultOpen={false}>
          <Spoiler.Trigger>Toggle</Spoiler.Trigger>
          <Spoiler.Panel minHeight="40px">
            <Spoiler.Content>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium necessitatibus
              rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus molestiae hic
              doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus magni recusandae
              voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae necessitatibus, illum adipisci
              sit reprehenderit quas odit. Recusandae quas totam accusamus esse deleniti asperiores voluptatibus natus
              ut, tempora expedita tempore corrupti minima quaerat autem aliquam quisquam quidem nostrum nesciunt neque.
              Excepturi, nostrum. Eveniet, placeat consequatur, eligendi dolor quibusdam illum blanditiis officia sed
              nesciunt quia ipsam veritatis odio illo. Optio, perferendis?
            </Spoiler.Content>
          </Spoiler.Panel>
        </Spoiler.Root>

        <h2>Uncontrolled open by default</h2>
        <Spoiler.Root defaultOpen={true}>
          <Spoiler.Trigger>Toggle</Spoiler.Trigger>
          <Spoiler.Panel minHeight="40px">
            <Spoiler.Content>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium necessitatibus
              rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus molestiae hic
              doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus magni recusandae
              voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae necessitatibus, illum adipisci
              sit reprehenderit quas odit. Recusandae quas totam accusamus esse deleniti asperiores voluptatibus natus
              ut, tempora expedita tempore corrupti minima quaerat autem aliquam quisquam quidem nostrum nesciunt neque.
              Excepturi, nostrum. Eveniet, placeat consequatur, eligendi dolor quibusdam illum blanditiis officia sed
              nesciunt quia ipsam veritatis odio illo. Optio, perferendis?
            </Spoiler.Content>
          </Spoiler.Panel>
        </Spoiler.Root>
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
          <Spoiler.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
            <Spoiler.Trigger>Toggle</Spoiler.Trigger>
            <Spoiler.Panel minHeight="40px">
              <Spoiler.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Spoiler.Content>
            </Spoiler.Panel>
          </Spoiler.Root>
        </>
      );
    });

    const ControlledOpenByDefault = component$(() => {
      const isOpen = useSignal(true);

      return (
        <>
          <h2>Controlled open by default</h2>
          <Spoiler.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
            <Spoiler.Trigger>Toggle</Spoiler.Trigger>
            <Spoiler.Panel minHeight="40px">
              <Spoiler.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Spoiler.Content>
            </Spoiler.Panel>
          </Spoiler.Root>
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

export const Disabled: Story = {
  render: () => {
    return (
      <>
        <h2>Disabled closed by default</h2>
        <Spoiler.Root disabled={true} defaultOpen={false}>
          <Spoiler.Trigger>Toggle</Spoiler.Trigger>
          <Spoiler.Panel minHeight="40px">
            <Spoiler.Content>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium necessitatibus
              rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus molestiae hic
              doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus magni recusandae
              voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae necessitatibus, illum adipisci
              sit reprehenderit quas odit. Recusandae quas totam accusamus esse deleniti asperiores voluptatibus natus
              ut, tempora expedita tempore corrupti minima quaerat autem aliquam quisquam quidem nostrum nesciunt neque.
              Excepturi, nostrum. Eveniet, placeat consequatur, eligendi dolor quibusdam illum blanditiis officia sed
              nesciunt quia ipsam veritatis odio illo. Optio, perferendis?
            </Spoiler.Content>
          </Spoiler.Panel>
        </Spoiler.Root>

        <h2>Disabled open by default</h2>
        <Spoiler.Root disabled={true} defaultOpen={true}>
          <Spoiler.Trigger>Toggle</Spoiler.Trigger>
          <Spoiler.Panel minHeight="40px">
            <Spoiler.Content>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium necessitatibus
              rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus molestiae hic
              doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus magni recusandae
              voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae necessitatibus, illum adipisci
              sit reprehenderit quas odit. Recusandae quas totam accusamus esse deleniti asperiores voluptatibus natus
              ut, tempora expedita tempore corrupti minima quaerat autem aliquam quisquam quidem nostrum nesciunt neque.
              Excepturi, nostrum. Eveniet, placeat consequatur, eligendi dolor quibusdam illum blanditiis officia sed
              nesciunt quia ipsam veritatis odio illo. Optio, perferendis?
            </Spoiler.Content>
          </Spoiler.Panel>
        </Spoiler.Root>
      </>
    );
  },
};

export const Animated: Story = {
  render: () => {
    const AnimatedClosedByDefault = component$(() => {
      const id = 'TRvBtEQoBF';

      useStyles$(`
				.${id}-spoiler-panel[data-state='open'] {
					animation: ${id}-spoiler-panel-down 300ms ease-out;
				}
				
				.${id}-spoiler-panel[data-state='closed'] {
					animation: ${id}-spoiler-panel-up 300ms ease-out;
				}
				
				@keyframes ${id}-spoiler-panel-down {
					0% {
						height: var(--qwik-primitives-spoiler-panel-min-height);
					}
					100% {
						height: var(--qwik-primitives-spoiler-panel-max-height);
					}
				}
				
				@keyframes ${id}-spoiler-panel-up {
					0% {
						height: var(--qwik-primitives-spoiler-panel-max-height);
					}
					100% {
						height: var(--qwik-primitives-spoiler-panel-min-height);
					}
				}
			`);

      return (
        <>
          <h2>Animated closed by default</h2>
          <Spoiler.Root defaultOpen={false}>
            <Spoiler.Trigger>Toggle</Spoiler.Trigger>
            <Spoiler.Panel minHeight="40px" class={`${id}-spoiler-panel`}>
              <Spoiler.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Spoiler.Content>
            </Spoiler.Panel>
          </Spoiler.Root>
        </>
      );
    });

    const AnimatedOpenByDefault = component$(() => {
      const id = 'vXcHEMVAof';

      useStyles$(`
				.${id}-spoiler-panel[data-state='open'] {
					animation: ${id}-spoiler-panel-down 300ms ease-out;
				}
				
				.${id}-spoiler-panel[data-state='closed'] {
					animation: ${id}-spoiler-panel-up 300ms ease-out;
				}
				
				@keyframes ${id}-spoiler-panel-down {
					0% {
						height: var(--qwik-primitives-spoiler-panel-min-height);
					}
					100% {
						height: var(--qwik-primitives-spoiler-panel-max-height);
					}
				}
				
				@keyframes ${id}-spoiler-panel-up {
					0% {
						height: var(--qwik-primitives-spoiler-panel-max-height);
					}
					100% {
						height: var(--qwik-primitives-spoiler-panel-min-height);
					}
				}
			`);

      return (
        <>
          <h2>Animated open by default</h2>
          <Spoiler.Root defaultOpen={true}>
            <Spoiler.Trigger>Toggle</Spoiler.Trigger>
            <Spoiler.Panel minHeight="40px" class={`${id}-spoiler-panel`}>
              <Spoiler.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Spoiler.Content>
            </Spoiler.Panel>
          </Spoiler.Root>
        </>
      );
    });

    return (
      <>
        <AnimatedClosedByDefault />
        <AnimatedOpenByDefault />
      </>
    );
  },
};

export const Responsive: Story = {
  render: () => {
    const ResponsiveClosedByDefault = component$(() => {
      const id = 'bEcHYMVBkR';

      useStyles$(`
				.${id}-spoiler-panel {
					--spoiler-panel-min-height: 20px;
					background-color: red;
				}

				@media screen and (min-width: 640px) {
					.${id}-spoiler-panel {
						--spoiler-panel-min-height: 40px;
						background-color: blue;
					}
				}	
			`);

      return (
        <>
          <h2>Responsive closed by default</h2>
          <Spoiler.Root defaultOpen={false}>
            <Spoiler.Trigger>Toggle</Spoiler.Trigger>
            <Spoiler.Panel minHeight="var(--spoiler-panel-min-height)" class={`${id}-spoiler-panel`}>
              <Spoiler.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Spoiler.Content>
            </Spoiler.Panel>
          </Spoiler.Root>
        </>
      );
    });

    const ResponsiveOpenByDefault = component$(() => {
      const id = 'jEcHYPfyLQ';

      useStyles$(`
				.${id}-spoiler-panel {
					--spoiler-panel-min-height: 20px;
					background-color: red;
				}

				@media screen and (min-width: 640px) {
					.${id}-spoiler-panel {
						--spoiler-panel-min-height: 40px;
						background-color: blue;
					}
				}	
			`);

      return (
        <>
          <h2>Responsive open by default</h2>
          <Spoiler.Root defaultOpen={true}>
            <Spoiler.Trigger>Toggle</Spoiler.Trigger>
            <Spoiler.Panel minHeight="var(--spoiler-panel-min-height)" class={`${id}-spoiler-panel`}>
              <Spoiler.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium
                necessitatibus rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus
                molestiae hic doloremque. Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus
                magni recusandae voluptatem, mollitia illo tenetur eum enim blanditiis, nam pariatur vitae
                necessitatibus, illum adipisci sit reprehenderit quas odit. Recusandae quas totam accusamus esse
                deleniti asperiores voluptatibus natus ut, tempora expedita tempore corrupti minima quaerat autem
                aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum. Eveniet, placeat consequatur,
                eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam veritatis odio illo. Optio,
                perferendis?
              </Spoiler.Content>
            </Spoiler.Panel>
          </Spoiler.Root>
        </>
      );
    });

    return (
      <>
        <ResponsiveClosedByDefault />
        <ResponsiveOpenByDefault />
      </>
    );
  },
};
