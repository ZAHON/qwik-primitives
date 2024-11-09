import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Callout } from '.';

type CalloutPropsWithChildren = PropsOf<typeof Callout.Root> & { children: string };
type Story = StoryObj<CalloutPropsWithChildren>;

const meta: Meta<CalloutPropsWithChildren> = {
  title: 'UI/Callout',
  args: {
    children: 'Access denied. Please contact the network administrator to view this page.',
    size: '2',
    color: 'default',
    alert: undefined,
    highContrast: undefined,
  },
  argTypes: {
    children: { control: 'text' },
    size: { control: 'select', options: ['1', '2', '3'] },
    color: { control: 'select', options: ['default', 'primary', 'success', 'warning', 'danger'] },
    alert: { control: 'boolean' },
    highContrast: { control: 'boolean' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return (
      <Callout.Root {...others}>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>
    );
  },
};

export const Size: Story = {
  argTypes: {
    size: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
        <Callout.Root {...others} size="1">
          <Callout.Text>{children}</Callout.Text>
        </Callout.Root>

        <Callout.Root {...others} size="2">
          <Callout.Text>{children}</Callout.Text>
        </Callout.Root>

        <Callout.Root {...others} size="3">
          <Callout.Text>{children}</Callout.Text>
        </Callout.Root>
      </div>
    );
  },
};

export const Color: Story = {
  argTypes: {
    color: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
        <Callout.Root {...others} color="default">
          <Callout.Text>{children}</Callout.Text>
        </Callout.Root>

        <Callout.Root {...others} color="primary">
          <Callout.Text>{children}</Callout.Text>
        </Callout.Root>

        <Callout.Root {...others} color="success">
          <Callout.Text>{children}</Callout.Text>
        </Callout.Root>

        <Callout.Root {...others} color="warning">
          <Callout.Text>{children}</Callout.Text>
        </Callout.Root>

        <Callout.Root {...others} color="danger">
          <Callout.Text>{children}</Callout.Text>
        </Callout.Root>
      </div>
    );
  },
};

export const HighContrast: Story = {
  argTypes: {
    highContrast: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
        <Callout.Root {...others} highContrast={false}>
          <Callout.Text>{children}</Callout.Text>
        </Callout.Root>

        <Callout.Root {...others} highContrast={true}>
          <Callout.Text>{children}</Callout.Text>
        </Callout.Root>
      </div>
    );
  },
};

export const AsAlert: Story = {
  argTypes: {
    alert: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props;

    return (
      <Callout.Root {...others} alert={true}>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>
    );
  },
};

export const WithIcon: Story = {
  render: (props) => {
    const { children, ...others } = props;

    const InfoCircledIcon = component$(() => {
      return (
        <svg
          aria-hidden="true"
          focusable="false"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      );
    });

    return (
      <Callout.Root {...others}>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>{children}</Callout.Text>
      </Callout.Root>
    );
  },
};
