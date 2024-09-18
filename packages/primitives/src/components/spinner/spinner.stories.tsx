import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { component$, useStyles$ } from '@builder.io/qwik';
import * as Spinner from '.';

const meta: Meta<typeof Spinner.Root> = {
  title: 'Components/Spinner',
};

export default meta;
type Story = StoryObj<typeof Spinner.Root>;

export const WithLabel: Story = {
  render: () => {
    return (
      <>
        <h2>With label</h2>
        <Spinner.Root>
          <Spinner.Label visuallyHidden={false}>Loading, plase wait</Spinner.Label>
        </Spinner.Root>
      </>
    );
  },
};

export const CSSSpinner: Story = {
  render: () => {
    const CSSSpinner = component$(() => {
      useStyles$(`
				.my-spinner {
					position: relative;
					display: block;
					height: 1.5rem;
					width: 1.5rem;
				}
				
				.my-spinner::before {
					content: '';
					position: absolute;
					inset: 0;
					opacity: 0.5;
					border: 3px solid currentColor;
					border-radius: 9999px;
				}
				
				.my-spinner::after {
					content: '';
					position: absolute;
					inset: 0;
					border: 3px solid currentColor;
					border-right-color: transparent;
					border-bottom-color: transparent;
					border-left-color: transparent;
					border-radius: 9999px;
					animation: spin 1s linear infinite;
				}
				
				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}			
			`);

      return (
        <>
          <h2>CSS Spinner</h2>
          <Spinner.Root>
            <span class="my-spinner" />
            <Spinner.Label>Loading, plase wait</Spinner.Label>
          </Spinner.Root>
        </>
      );
    });

    return <CSSSpinner />;
  },
};

export const SVGSpinner: Story = {
  render: () => {
    return (
      <>
        <h2>SVG Spinner</h2>
        <Spinner.Root>
          <svg
            width="1.5rem"
            height="1.5rem"
            stroke="currentColor"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(2.5 2.5)" stroke-width="5">
                <circle stroke-opacity=".5" cx="16" cy="16" r="16"></circle>
                <path d="M32 16c0-9.94-8.06-16-16-16">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 16 16"
                    to="360 16 16"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </svg>
          <Spinner.Label>Loading, plase wait</Spinner.Label>
        </Spinner.Root>
      </>
    );
  },
};
