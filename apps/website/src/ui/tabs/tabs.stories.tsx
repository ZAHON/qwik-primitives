import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Text } from '@/ui/text';
import { Tabs } from '.';

type TabsRootSize = PropsOf<typeof Tabs.Root>['size'];
type TabsProps = PropsOf<typeof Tabs.Root> & Pick<PropsOf<typeof Tabs.List>, 'loop' | 'justify'>;
type Story = StoryObj<TabsProps>;

const meta: Meta<TabsProps> = {
  title: 'UI/Tabs',
  component: Tabs.Root,
  args: {
    defaultValue: 'account',
    activationMode: 'automatic',
    size: '2',
    color: 'primary',
    highContrast: undefined,
    loop: true,
    justify: 'start',
  },
  argTypes: {
    defaultValue: { options: ['account', 'documents', 'settings'], control: 'select' },
    activationMode: { options: ['automatic', 'manual'], control: 'select' },
    size: { options: ['1', '2'], control: 'select' },
    color: { options: ['default', 'primary'], control: 'select' },
    highContrast: { control: 'boolean' },
    loop: { control: 'boolean', name: 'loop (Tabs.List prop)' },
    justify: { options: ['start', 'center', 'end'], control: 'select', name: 'justify (Tabs.List prop)' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { loop, justify, ...others } = props;

    const listProps = { loop, justify };

    return (
      <Tabs.Root {...others}>
        <Tabs.List {...listProps}>
          <Tabs.Trigger value="account">
            <Tabs.TriggerContent>Account</Tabs.TriggerContent>
          </Tabs.Trigger>
          <Tabs.Trigger value="documents">
            <Tabs.TriggerContent>Documents</Tabs.TriggerContent>
          </Tabs.Trigger>
          <Tabs.Trigger value="settings">
            <Tabs.TriggerContent>Settings</Tabs.TriggerContent>
          </Tabs.Trigger>
        </Tabs.List>
        <div style={{ paddingTop: '0.75rem' }}>
          <Tabs.Content value="account">
            <Text.Root>Make changes to your account.</Text.Root>
          </Tabs.Content>
          <Tabs.Content value="documents">
            <Text.Root>Access and update your documents.</Text.Root>
          </Tabs.Content>
          <Tabs.Content value="settings">
            <Text.Root>Edit your profile or update contact information.</Text.Root>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    );
  },
};

export const WithoutDefaultValue: Story = {
  argTypes: {
    defaultValue: { control: false },
  },
  render: (props) => {
    const { loop, justify, ...others } = props;

    const listProps = { loop, justify };

    return (
      <Tabs.Root {...others} defaultValue={undefined}>
        <Tabs.List {...listProps}>
          <Tabs.Trigger value="account">
            <Tabs.TriggerContent>Account</Tabs.TriggerContent>
          </Tabs.Trigger>
          <Tabs.Trigger value="documents">
            <Tabs.TriggerContent>Documents</Tabs.TriggerContent>
          </Tabs.Trigger>
          <Tabs.Trigger value="settings">
            <Tabs.TriggerContent>Settings</Tabs.TriggerContent>
          </Tabs.Trigger>
        </Tabs.List>
        <div style={{ paddingTop: '0.75rem' }}>
          <Tabs.Content value="account">
            <Text.Root>Make changes to your account.</Text.Root>
          </Tabs.Content>
          <Tabs.Content value="documents">
            <Text.Root>Access and update your documents.</Text.Root>
          </Tabs.Content>
          <Tabs.Content value="settings">
            <Text.Root>Edit your profile or update contact information.</Text.Root>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    );
  },
};

export const WithDisabledTrigger: Story = {
  render: (props) => {
    const { loop, justify, ...others } = props;

    const listProps = { loop, justify };

    return (
      <Tabs.Root {...others}>
        <Tabs.List {...listProps}>
          <Tabs.Trigger value="account">
            <Tabs.TriggerContent>Account</Tabs.TriggerContent>
          </Tabs.Trigger>
          <Tabs.Trigger value="documents" disabled={true}>
            <Tabs.TriggerContent>Documents</Tabs.TriggerContent>
          </Tabs.Trigger>
          <Tabs.Trigger value="settings">
            <Tabs.TriggerContent>Settings</Tabs.TriggerContent>
          </Tabs.Trigger>
        </Tabs.List>
        <div style={{ paddingTop: '0.75rem' }}>
          <Tabs.Content value="account">
            <Text.Root>Make changes to your account.</Text.Root>
          </Tabs.Content>
          <Tabs.Content value="documents">
            <Text.Root>Access and update your documents.</Text.Root>
          </Tabs.Content>
          <Tabs.Content value="settings">
            <Text.Root>Edit your profile or update contact information.</Text.Root>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    );
  },
};

export const Size: Story = {
  argTypes: {
    size: { control: false },
  },
  render: (props) => {
    const { loop, justify, ...others } = props;

    const listProps = { loop, justify };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <Tabs.Root {...others} size="1">
          <Tabs.List {...listProps}>
            <Tabs.Trigger value="account">
              <Tabs.TriggerContent>Account</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="documents">
              <Tabs.TriggerContent>Documents</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="settings">
              <Tabs.TriggerContent>Settings</Tabs.TriggerContent>
            </Tabs.Trigger>
          </Tabs.List>
          <div style={{ paddingTop: '0.75rem' }}>
            <Tabs.Content value="account">
              <Text.Root>Make changes to your account.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="documents">
              <Text.Root>Access and update your documents.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="settings">
              <Text.Root>Edit your profile or update contact information.</Text.Root>
            </Tabs.Content>
          </div>
        </Tabs.Root>

        <Tabs.Root {...others} size="2">
          <Tabs.List {...listProps}>
            <Tabs.Trigger value="account">
              <Tabs.TriggerContent>Account</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="documents">
              <Tabs.TriggerContent>Documents</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="settings">
              <Tabs.TriggerContent>Settings</Tabs.TriggerContent>
            </Tabs.Trigger>
          </Tabs.List>
          <div style={{ paddingTop: '0.75rem' }}>
            <Tabs.Content value="account">
              <Text.Root>Make changes to your account.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="documents">
              <Text.Root>Access and update your documents.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="settings">
              <Text.Root>Edit your profile or update contact information.</Text.Root>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    );
  },
};

export const Color: Story = {
  argTypes: {
    color: { control: false },
  },
  render: (props) => {
    const { loop, justify, ...others } = props;

    const listProps = { loop, justify };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <Tabs.Root {...others} color="default">
          <Tabs.List {...listProps}>
            <Tabs.Trigger value="account">
              <Tabs.TriggerContent>Account</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="documents">
              <Tabs.TriggerContent>Documents</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="settings">
              <Tabs.TriggerContent>Settings</Tabs.TriggerContent>
            </Tabs.Trigger>
          </Tabs.List>
          <div style={{ paddingTop: '0.75rem' }}>
            <Tabs.Content value="account">
              <Text.Root>Make changes to your account.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="documents">
              <Text.Root>Access and update your documents.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="settings">
              <Text.Root>Edit your profile or update contact information.</Text.Root>
            </Tabs.Content>
          </div>
        </Tabs.Root>

        <Tabs.Root {...others} color="primary">
          <Tabs.List {...listProps}>
            <Tabs.Trigger value="account">
              <Tabs.TriggerContent>Account</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="documents">
              <Tabs.TriggerContent>Documents</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="settings">
              <Tabs.TriggerContent>Settings</Tabs.TriggerContent>
            </Tabs.Trigger>
          </Tabs.List>
          <div style={{ paddingTop: '0.75rem' }}>
            <Tabs.Content value="account">
              <Text.Root>Make changes to your account.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="documents">
              <Text.Root>Access and update your documents.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="settings">
              <Text.Root>Edit your profile or update contact information.</Text.Root>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    );
  },
};

export const HighContrast: Story = {
  argTypes: {
    highContrast: { control: false },
  },
  render: (props) => {
    const { loop, justify, ...others } = props;

    const listProps = { loop, justify };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <Tabs.Root {...others} highContrast={false}>
          <Tabs.List {...listProps}>
            <Tabs.Trigger value="account">
              <Tabs.TriggerContent>Account</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="documents">
              <Tabs.TriggerContent>Documents</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="settings">
              <Tabs.TriggerContent>Settings</Tabs.TriggerContent>
            </Tabs.Trigger>
          </Tabs.List>
          <div style={{ paddingTop: '0.75rem' }}>
            <Tabs.Content value="account">
              <Text.Root>Make changes to your account.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="documents">
              <Text.Root>Access and update your documents.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="settings">
              <Text.Root>Edit your profile or update contact information.</Text.Root>
            </Tabs.Content>
          </div>
        </Tabs.Root>

        <Tabs.Root {...others} highContrast={true}>
          <Tabs.List {...listProps}>
            <Tabs.Trigger value="account">
              <Tabs.TriggerContent>Account</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="documents">
              <Tabs.TriggerContent>Documents</Tabs.TriggerContent>
            </Tabs.Trigger>
            <Tabs.Trigger value="settings">
              <Tabs.TriggerContent>Settings</Tabs.TriggerContent>
            </Tabs.Trigger>
          </Tabs.List>
          <div style={{ paddingTop: '0.75rem' }}>
            <Tabs.Content value="account">
              <Text.Root>Make changes to your account.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="documents">
              <Text.Root>Access and update your documents.</Text.Root>
            </Tabs.Content>
            <Tabs.Content value="settings">
              <Text.Root>Edit your profile or update contact information.</Text.Root>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    );
  },
};

export const TriggersWithIcon: Story = {
  render: (props) => {
    const { size, loop, justify, ...others } = props;

    const listProps = { loop, justify };

    const AvatarIcon = component$<{ size: TabsRootSize }>((props) => {
      const { size } = props;

      const getIconSize = (size: TabsRootSize) => {
        switch (size) {
          case '1': {
            return 14;
          }
          case '2': {
            return 16;
          }
          default: {
            throw Error(`Unknown variant: ${size}`);
          }
        }
      };

      return (
        <svg
          aria-hidden="true"
          focusable="false"
          width={getIconSize(size)}
          height={getIconSize(size)}
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      );
    });

    const FileIcon = component$<{ size: TabsRootSize }>((props) => {
      const { size } = props;

      const getIconSize = (size: TabsRootSize) => {
        switch (size) {
          case '1': {
            return 14;
          }
          case '2': {
            return 16;
          }
          default: {
            throw Error(`Unknown variant: ${size}`);
          }
        }
      };

      return (
        <svg
          aria-hidden="true"
          focusable="false"
          width={getIconSize(size)}
          height={getIconSize(size)}
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      );
    });

    const GearIcon = component$<{ size: TabsRootSize }>((props) => {
      const { size } = props;

      const getIconSize = (size: TabsRootSize) => {
        switch (size) {
          case '1': {
            return 14;
          }
          case '2': {
            return 16;
          }
          default: {
            throw Error(`Unknown variant: ${size}`);
          }
        }
      };

      return (
        <svg
          aria-hidden="true"
          focusable="false"
          width={getIconSize(size)}
          height={getIconSize(size)}
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      );
    });

    return (
      <Tabs.Root {...others} size={size}>
        <Tabs.List {...listProps}>
          <Tabs.Trigger value="account">
            <Tabs.TriggerContent>
              <AvatarIcon size={size} />
              Account
            </Tabs.TriggerContent>
          </Tabs.Trigger>
          <Tabs.Trigger value="documents">
            <Tabs.TriggerContent>
              <FileIcon size={size} />
              Documents
            </Tabs.TriggerContent>
          </Tabs.Trigger>
          <Tabs.Trigger value="settings">
            <Tabs.TriggerContent>
              <GearIcon size={size} />
              Settings
            </Tabs.TriggerContent>
          </Tabs.Trigger>
        </Tabs.List>
        <div style={{ paddingTop: '0.75rem' }}>
          <Tabs.Content value="account">
            <Text.Root>Make changes to your account.</Text.Root>
          </Tabs.Content>
          <Tabs.Content value="documents">
            <Text.Root>Access and update your documents.</Text.Root>
          </Tabs.Content>
          <Tabs.Content value="settings">
            <Text.Root>Edit your profile or update contact information.</Text.Root>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    );
  },
};
