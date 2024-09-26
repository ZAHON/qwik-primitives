import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { component$, useSignal, $ } from '@builder.io/qwik';
import * as Popover from '.';

const meta: Meta<typeof Popover.Root> = {
  title: 'Components/Popover',
};

export default meta;
type Story = StoryObj<typeof Popover.Root>;

export const Uncontrolled: Story = {
  render: () => {
    return (
      <>
        <h2>Uncontrolled</h2>
        <Popover.Root>
          <Popover.Trigger>Open popover</Popover.Trigger>
          <Popover.Content style={{ border: '1px solid red' }}>
            <Popover.Arrow style={{ fill: 'red' }} />
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input</label>
              <input id="first-input" type="text" placeholder="First input" />

              <label for="second-input">Second input</label>
              <input id="second-input" type="text" placeholder="Second input" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Popover.Close>Close popover</Popover.Close>
            </div>
          </Popover.Content>
        </Popover.Root>
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
          <Popover.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
            <Popover.Trigger>Open popover</Popover.Trigger>
            <Popover.Content style={{ border: '1px solid red' }}>
              <Popover.Arrow style={{ fill: 'red' }} />
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <Popover.Close>Close popover</Popover.Close>
              </div>
            </Popover.Content>
          </Popover.Root>
          <div style={{ height: '200vh' }} />
        </>
      );
    });

    return <Controlled />;
  },
};

export const WitchAnchor: Story = {
  render: () => {
    return (
      <>
        <h2>Witch anchor</h2>
        <Popover.Root>
          <Popover.Trigger>Open popover</Popover.Trigger>
          <Popover.Anchor style={{ margin: '4rem', width: '10rem', border: '1px solid red' }}>
            Popover anchor
          </Popover.Anchor>
          <Popover.Content style={{ border: '1px solid red' }}>
            <Popover.Arrow style={{ fill: 'red' }} />
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
              <label for="first-input">First input</label>
              <input id="first-input" type="text" placeholder="First input" />

              <label for="second-input">Second input</label>
              <input id="second-input" type="text" placeholder="Second input" />

              <label for="third-input">Third input (disabled)</label>
              <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

              <Popover.Close>Close popover</Popover.Close>
            </div>
          </Popover.Content>
        </Popover.Root>
        <div style={{ height: '200vh' }} />
      </>
    );
  },
};

export const SideAndAlign: Story = {
  render: () => {
    const SideAndAlign = component$(() => {
      const side = useSignal<'top' | 'right' | 'bottom' | 'left'>('bottom');
      const align = useSignal<'start' | 'center' | 'end'>('center');

      const handleSideChange$ = $((event: Event, currentTarget: HTMLInputElement) => {
        side.value = currentTarget.value as typeof side.value;
      });

      const handleAlignChange$ = $((event: Event, currentTarget: HTMLInputElement) => {
        align.value = currentTarget.value as typeof align.value;
      });

      return (
        <>
          <h2>Side & Align</h2>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem' }}>
            <fieldset>
              <legend>Side</legend>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
                {['top', 'right', 'bottom', 'left'].map((sideOption) => (
                  <div key={sideOption} style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
                    <input
                      id={`side-${sideOption}`}
                      type="radio"
                      name="side"
                      value={sideOption}
                      checked={side.value === sideOption}
                      onChange$={handleSideChange$}
                    />
                    <label for={`side-${sideOption}`}>{sideOption}</label>
                  </div>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Align</legend>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
                {['start', 'center', 'end'].map((alignOption) => (
                  <div key={alignOption} style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
                    <input
                      id={`align-${alignOption}`}
                      type="radio"
                      name="align"
                      value={alignOption}
                      checked={side.value === alignOption}
                      onChange$={handleAlignChange$}
                    />
                    <label for={`align-${alignOption}`}>{alignOption}</label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
          <Popover.Root>
            <div style={{ marginBlock: '44rem', display: 'flex', justifyContent: 'center' }}>
              <Popover.Trigger>Open popover</Popover.Trigger>
            </div>
            <Popover.Content side={side.value} align={align.value} style={{ border: '1px solid red' }}>
              <Popover.Arrow style={{ fill: 'red' }} />
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
                <label for="first-input">First input</label>
                <input id="first-input" type="text" placeholder="First input" />

                <label for="second-input">Second input</label>
                <input id="second-input" type="text" placeholder="Second input" />

                <label for="third-input">Third input (disabled)</label>
                <input disabled={true} id="third-input" type="text" placeholder="Third input (disabled)" />

                <Popover.Close>Close popover</Popover.Close>
              </div>
            </Popover.Content>
          </Popover.Root>
          <div style={{ height: '200vh' }} />
        </>
      );
    });

    return <SideAndAlign />;
  },
};
