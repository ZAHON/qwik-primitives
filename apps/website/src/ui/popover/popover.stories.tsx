import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Code } from '@/ui/code';
import { Popover } from '.';

type PopoverProps = Omit<PropsOf<typeof Popover.Content>, 'collisionPadding'> & {
  collisionPaddingTop: number;
  collisionPaddingRight: number;
  collisionPaddingBottom: number;
  collisionPaddingLeft: number;
};
type Story = StoryObj<PopoverProps>;

const meta: Meta<PopoverProps> = {
  title: 'UI/Popover',
  parameters: {
    layout: 'centered',
  },
  args: {
    side: 'bottom',
    sideOffset: 8,
    align: 'start',
    alignOffset: 0,
    avoidCollisions: true,
    collisionPaddingTop: 56,
    collisionPaddingRight: 16,
    collisionPaddingBottom: 16,
    collisionPaddingLeft: 16,
    arrowPadding: 0,
    sticky: 'partial',
    hideWhenDetached: undefined,
    loop: true,
    autoFocus: true,
    restoreFocus: true,
    closeOnEscapeKeyDown: true,
    closeOnClickOutside: true,
    size: '2',
  },
  argTypes: {
    side: { options: ['top', 'right', 'bottom', 'left'], control: 'select' },
    sideOffset: { control: 'number' },
    align: { options: ['start', 'center', 'end'], control: 'select' },
    alignOffset: { control: 'number' },
    avoidCollisions: { control: 'boolean' },
    collisionPaddingTop: { control: 'number' },
    collisionPaddingRight: { control: 'number' },
    collisionPaddingBottom: { control: 'number' },
    collisionPaddingLeft: { control: 'number' },
    arrowPadding: { control: 'number' },
    sticky: { options: ['partial', 'always'], control: 'select' },
    hideWhenDetached: { control: 'boolean' },
    loop: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
    restoreFocus: { control: 'boolean' },
    closeOnEscapeKeyDown: { control: 'boolean' },
    closeOnClickOutside: { control: 'boolean' },
    size: { options: ['1', '2', '3', '4'], control: 'select' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { collisionPaddingTop, collisionPaddingRight, collisionPaddingBottom, collisionPaddingLeft, ...others } =
      props;

    const collisionPadding: PropsOf<typeof Popover.Content>['collisionPadding'] = {
      top: collisionPaddingTop,
      right: collisionPaddingRight,
      bottom: collisionPaddingBottom,
      left: collisionPaddingLeft,
    };

    return (
      <Popover.Root>
        <Popover.Trigger>Open popover</Popover.Trigger>
        <Popover.Content {...others} collisionPadding={collisionPadding}>
          <Popover.Section>
            <Popover.Header>
              <Popover.Title>Popover Title</Popover.Title>
              <Popover.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel tempore ex
                dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat minus officia dolore
                tenetur.
              </Popover.Description>
            </Popover.Header>
            <Popover.Footer>
              <Popover.Footer style={{ display: 'flex', justifyContent: 'end', columnGap: '0.75rem' }}>
                <Popover.Close>Close</Popover.Close>
                <Popover.Close variant="solid" color="primary">
                  Action
                </Popover.Close>
              </Popover.Footer>
            </Popover.Footer>
          </Popover.Section>
        </Popover.Content>
      </Popover.Root>
    );
  },
};

export const Size: Story = {
  argTypes: {
    size: { control: false },
  },
  render: (props) => {
    const { collisionPaddingTop, collisionPaddingRight, collisionPaddingBottom, collisionPaddingLeft, ...others } =
      props;

    const collisionPadding: PropsOf<typeof Popover.Content>['collisionPadding'] = {
      top: collisionPaddingTop,
      right: collisionPaddingRight,
      bottom: collisionPaddingBottom,
      left: collisionPaddingLeft,
    };

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        <Popover.Root>
          <Popover.Trigger>Size 1</Popover.Trigger>
          <Popover.Content {...others} collisionPadding={collisionPadding} size="1">
            <Popover.Section>
              <Popover.Header>
                <Popover.Title>Popover Title</Popover.Title>
                <Popover.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel tempore
                  ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat minus officia
                  dolore tenetur.
                </Popover.Description>
              </Popover.Header>
              <Popover.Footer>
                <Popover.Footer style={{ display: 'flex', justifyContent: 'end', columnGap: '0.75rem' }}>
                  <Popover.Close>Close</Popover.Close>
                  <Popover.Close variant="solid" color="primary">
                    Action
                  </Popover.Close>
                </Popover.Footer>
              </Popover.Footer>
            </Popover.Section>
          </Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger>Size 1</Popover.Trigger>
          <Popover.Content {...others} collisionPadding={collisionPadding} size="2">
            <Popover.Section>
              <Popover.Header>
                <Popover.Title>Popover Title</Popover.Title>
                <Popover.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel tempore
                  ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat minus officia
                  dolore tenetur.
                </Popover.Description>
              </Popover.Header>
              <Popover.Footer>
                <Popover.Footer style={{ display: 'flex', justifyContent: 'end', columnGap: '0.75rem' }}>
                  <Popover.Close>Close</Popover.Close>
                  <Popover.Close variant="solid" color="primary">
                    Action
                  </Popover.Close>
                </Popover.Footer>
              </Popover.Footer>
            </Popover.Section>
          </Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger>Size 1</Popover.Trigger>
          <Popover.Content {...others} collisionPadding={collisionPadding} size="3">
            <Popover.Section>
              <Popover.Header>
                <Popover.Title>Popover Title</Popover.Title>
                <Popover.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel tempore
                  ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat minus officia
                  dolore tenetur.
                </Popover.Description>
              </Popover.Header>
              <Popover.Footer>
                <Popover.Footer style={{ display: 'flex', justifyContent: 'end', columnGap: '0.75rem' }}>
                  <Popover.Close>Close</Popover.Close>
                  <Popover.Close variant="solid" color="primary">
                    Action
                  </Popover.Close>
                </Popover.Footer>
              </Popover.Footer>
            </Popover.Section>
          </Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger>Size 1</Popover.Trigger>
          <Popover.Content {...others} collisionPadding={collisionPadding} size="4">
            <Popover.Section>
              <Popover.Header>
                <Popover.Title>Popover Title</Popover.Title>
                <Popover.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel tempore
                  ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat minus officia
                  dolore tenetur.
                </Popover.Description>
              </Popover.Header>
              <Popover.Footer>
                <Popover.Footer style={{ display: 'flex', justifyContent: 'end', columnGap: '0.75rem' }}>
                  <Popover.Close>Close</Popover.Close>
                  <Popover.Close variant="solid" color="primary">
                    Action
                  </Popover.Close>
                </Popover.Footer>
              </Popover.Footer>
            </Popover.Section>
          </Popover.Content>
        </Popover.Root>
      </div>
    );
  },
};

export const Nested: Story = {
  render: (props) => {
    const { collisionPaddingTop, collisionPaddingRight, collisionPaddingBottom, collisionPaddingLeft, ...others } =
      props;

    const collisionPadding: PropsOf<typeof Popover.Content>['collisionPadding'] = {
      top: collisionPaddingTop,
      right: collisionPaddingRight,
      bottom: collisionPaddingBottom,
      left: collisionPaddingLeft,
    };

    const footerStyle = { display: 'flex', justifyContent: 'end', columnGap: '0.75rem' };

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        <Popover.Root>
          <Popover.Trigger>Open popover 1</Popover.Trigger>
          <Popover.Content {...others} collisionPadding={collisionPadding}>
            <Popover.Section>
              <Popover.Header>
                <Popover.Title>Popover Title 1</Popover.Title>
                <Popover.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel tempore
                  ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat minus officia
                  dolore tenetur.
                </Popover.Description>
              </Popover.Header>
              <Popover.Footer>
                <Popover.Footer style={footerStyle}>
                  <Popover.Close>Close 1</Popover.Close>

                  <Popover.Root>
                    <Popover.Trigger>Open popover 2</Popover.Trigger>
                    <Popover.Content {...others} collisionPadding={collisionPadding}>
                      <Popover.Section>
                        <Popover.Header>
                          <Popover.Title>Popover Title 2</Popover.Title>
                          <Popover.Description>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel
                            tempore ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat
                            minus officia dolore tenetur.
                          </Popover.Description>
                        </Popover.Header>
                        <Popover.Footer>
                          <Popover.Footer style={footerStyle}>
                            <Popover.Close>Close 2</Popover.Close>

                            <Popover.Root>
                              <Popover.Trigger>Open popover 3</Popover.Trigger>
                              <Popover.Content {...others} collisionPadding={collisionPadding}>
                                <Popover.Section>
                                  <Popover.Header>
                                    <Popover.Title>Popover Title 3</Popover.Title>
                                    <Popover.Description>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis
                                      cupiditate vel tempore ex dicta quidem incidunt, minus corrupti? Inventore debitis
                                      at quidem nulla quaerat minus officia dolore tenetur.
                                    </Popover.Description>
                                  </Popover.Header>
                                  <Popover.Footer>
                                    <Popover.Footer style={footerStyle}>
                                      <Popover.Close>Close 3</Popover.Close>

                                      <Popover.Root>
                                        <Popover.Trigger>Open popover 4</Popover.Trigger>
                                        <Popover.Content {...others} collisionPadding={collisionPadding}>
                                          <Popover.Section>
                                            <Popover.Header>
                                              <Popover.Title>Popover Title 4</Popover.Title>
                                              <Popover.Description>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque
                                                debitis cupiditate vel tempore ex dicta quidem incidunt, minus corrupti?
                                                Inventore debitis at quidem nulla quaerat minus officia dolore tenetur.
                                              </Popover.Description>
                                            </Popover.Header>
                                            <Popover.Footer>
                                              <Popover.Footer style={footerStyle}>
                                                <Popover.Close>Close 4</Popover.Close>

                                                <Popover.Root>
                                                  <Popover.Trigger>Open popover 5</Popover.Trigger>
                                                  <Popover.Content {...others} collisionPadding={collisionPadding}>
                                                    <Popover.Section>
                                                      <Popover.Header>
                                                        <Popover.Title>Popover Title 5</Popover.Title>
                                                        <Popover.Description>
                                                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                          Magnam neque debitis cupiditate vel tempore ex dicta quidem
                                                          incidunt, minus corrupti? Inventore debitis at quidem nulla
                                                          quaerat minus officia dolore tenetur.
                                                        </Popover.Description>
                                                      </Popover.Header>
                                                      <Popover.Footer>
                                                        <Popover.Footer style={footerStyle}>
                                                          <Popover.Close>Close 5</Popover.Close>
                                                        </Popover.Footer>
                                                      </Popover.Footer>
                                                    </Popover.Section>
                                                  </Popover.Content>
                                                </Popover.Root>
                                              </Popover.Footer>
                                            </Popover.Footer>
                                          </Popover.Section>
                                        </Popover.Content>
                                      </Popover.Root>
                                    </Popover.Footer>
                                  </Popover.Footer>
                                </Popover.Section>
                              </Popover.Content>
                            </Popover.Root>
                          </Popover.Footer>
                        </Popover.Footer>
                      </Popover.Section>
                    </Popover.Content>
                  </Popover.Root>
                </Popover.Footer>
              </Popover.Footer>
            </Popover.Section>
          </Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger>Open popover 1</Popover.Trigger>
          <Popover.Content {...others} collisionPadding={collisionPadding}>
            <Popover.Section>
              <Popover.Header>
                <Popover.Title>Popover Title 1</Popover.Title>
                <Popover.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel tempore
                  ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat minus officia
                  dolore tenetur.
                </Popover.Description>
              </Popover.Header>
              <Popover.Footer>
                <Popover.Footer style={footerStyle}>
                  <Popover.Close>Close 1</Popover.Close>

                  <Popover.Root>
                    <Popover.Trigger>Open popover 2</Popover.Trigger>
                    <Popover.Content {...others} collisionPadding={collisionPadding}>
                      <Popover.Section>
                        <Popover.Header>
                          <Popover.Title>Popover Title 2</Popover.Title>
                          <Popover.Description>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel
                            tempore ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat
                            minus officia dolore tenetur.
                          </Popover.Description>
                        </Popover.Header>
                        <Popover.Footer>
                          <Popover.Footer style={footerStyle}>
                            <Popover.Close>Close 2</Popover.Close>

                            <Popover.Root>
                              <Popover.Trigger>Open popover 3</Popover.Trigger>
                              <Popover.Content {...others} collisionPadding={collisionPadding}>
                                <Popover.Section>
                                  <Popover.Header>
                                    <Popover.Title>Popover Title 3</Popover.Title>
                                    <Popover.Description>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis
                                      cupiditate vel tempore ex dicta quidem incidunt, minus corrupti? Inventore debitis
                                      at quidem nulla quaerat minus officia dolore tenetur.
                                    </Popover.Description>
                                  </Popover.Header>
                                  <Popover.Footer>
                                    <Popover.Footer style={footerStyle}>
                                      <Popover.Close>Close 3</Popover.Close>

                                      <Popover.Root>
                                        <Popover.Trigger>Open popover 4</Popover.Trigger>
                                        <Popover.Content {...others} collisionPadding={collisionPadding}>
                                          <Popover.Section>
                                            <Popover.Header>
                                              <Popover.Title>Popover Title 4</Popover.Title>
                                              <Popover.Description>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque
                                                debitis cupiditate vel tempore ex dicta quidem incidunt, minus corrupti?
                                                Inventore debitis at quidem nulla quaerat minus officia dolore tenetur.
                                              </Popover.Description>
                                            </Popover.Header>
                                            <Popover.Footer>
                                              <Popover.Footer style={footerStyle}>
                                                <Popover.Close>Close 4</Popover.Close>

                                                <Popover.Root>
                                                  <Popover.Trigger>Open popover 5</Popover.Trigger>
                                                  <Popover.Content {...others} collisionPadding={collisionPadding}>
                                                    <Popover.Section>
                                                      <Popover.Header>
                                                        <Popover.Title>Popover Title 5</Popover.Title>
                                                        <Popover.Description>
                                                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                          Magnam neque debitis cupiditate vel tempore ex dicta quidem
                                                          incidunt, minus corrupti? Inventore debitis at quidem nulla
                                                          quaerat minus officia dolore tenetur.
                                                        </Popover.Description>
                                                      </Popover.Header>
                                                      <Popover.Footer>
                                                        <Popover.Footer style={footerStyle}>
                                                          <Popover.Close>Close 5</Popover.Close>
                                                        </Popover.Footer>
                                                      </Popover.Footer>
                                                    </Popover.Section>
                                                  </Popover.Content>
                                                </Popover.Root>
                                              </Popover.Footer>
                                            </Popover.Footer>
                                          </Popover.Section>
                                        </Popover.Content>
                                      </Popover.Root>
                                    </Popover.Footer>
                                  </Popover.Footer>
                                </Popover.Section>
                              </Popover.Content>
                            </Popover.Root>
                          </Popover.Footer>
                        </Popover.Footer>
                      </Popover.Section>
                    </Popover.Content>
                  </Popover.Root>
                </Popover.Footer>
              </Popover.Footer>
            </Popover.Section>
          </Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger>Open popover 1</Popover.Trigger>
          <Popover.Content {...others} collisionPadding={collisionPadding}>
            <Popover.Section>
              <Popover.Header>
                <Popover.Title>Popover Title 1</Popover.Title>
                <Popover.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel tempore
                  ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat minus officia
                  dolore tenetur.
                </Popover.Description>
              </Popover.Header>
              <Popover.Footer>
                <Popover.Footer style={footerStyle}>
                  <Popover.Close>Close 1</Popover.Close>

                  <Popover.Root>
                    <Popover.Trigger>Open popover 2</Popover.Trigger>
                    <Popover.Content {...others} collisionPadding={collisionPadding}>
                      <Popover.Section>
                        <Popover.Header>
                          <Popover.Title>Popover Title 2</Popover.Title>
                          <Popover.Description>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel
                            tempore ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat
                            minus officia dolore tenetur.
                          </Popover.Description>
                        </Popover.Header>
                        <Popover.Footer>
                          <Popover.Footer style={footerStyle}>
                            <Popover.Close>Close 2</Popover.Close>

                            <Popover.Root>
                              <Popover.Trigger>Open popover 3</Popover.Trigger>
                              <Popover.Content {...others} collisionPadding={collisionPadding}>
                                <Popover.Section>
                                  <Popover.Header>
                                    <Popover.Title>Popover Title 3</Popover.Title>
                                    <Popover.Description>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis
                                      cupiditate vel tempore ex dicta quidem incidunt, minus corrupti? Inventore debitis
                                      at quidem nulla quaerat minus officia dolore tenetur.
                                    </Popover.Description>
                                  </Popover.Header>
                                  <Popover.Footer>
                                    <Popover.Footer style={footerStyle}>
                                      <Popover.Close>Close 3</Popover.Close>

                                      <Popover.Root>
                                        <Popover.Trigger>Open popover 4</Popover.Trigger>
                                        <Popover.Content {...others} collisionPadding={collisionPadding}>
                                          <Popover.Section>
                                            <Popover.Header>
                                              <Popover.Title>Popover Title 4</Popover.Title>
                                              <Popover.Description>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque
                                                debitis cupiditate vel tempore ex dicta quidem incidunt, minus corrupti?
                                                Inventore debitis at quidem nulla quaerat minus officia dolore tenetur.
                                              </Popover.Description>
                                            </Popover.Header>
                                            <Popover.Footer>
                                              <Popover.Footer style={footerStyle}>
                                                <Popover.Close>Close 4</Popover.Close>

                                                <Popover.Root>
                                                  <Popover.Trigger>Open popover 5</Popover.Trigger>
                                                  <Popover.Content {...others} collisionPadding={collisionPadding}>
                                                    <Popover.Section>
                                                      <Popover.Header>
                                                        <Popover.Title>Popover Title 5</Popover.Title>
                                                        <Popover.Description>
                                                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                          Magnam neque debitis cupiditate vel tempore ex dicta quidem
                                                          incidunt, minus corrupti? Inventore debitis at quidem nulla
                                                          quaerat minus officia dolore tenetur.
                                                        </Popover.Description>
                                                      </Popover.Header>
                                                      <Popover.Footer>
                                                        <Popover.Footer style={footerStyle}>
                                                          <Popover.Close>Close 5</Popover.Close>
                                                        </Popover.Footer>
                                                      </Popover.Footer>
                                                    </Popover.Section>
                                                  </Popover.Content>
                                                </Popover.Root>
                                              </Popover.Footer>
                                            </Popover.Footer>
                                          </Popover.Section>
                                        </Popover.Content>
                                      </Popover.Root>
                                    </Popover.Footer>
                                  </Popover.Footer>
                                </Popover.Section>
                              </Popover.Content>
                            </Popover.Root>
                          </Popover.Footer>
                        </Popover.Footer>
                      </Popover.Section>
                    </Popover.Content>
                  </Popover.Root>
                </Popover.Footer>
              </Popover.Footer>
            </Popover.Section>
          </Popover.Content>
        </Popover.Root>
      </div>
    );
  },
};

export const WithWideContent: Story = {
  render: (props) => {
    const { collisionPaddingTop, collisionPaddingRight, collisionPaddingBottom, collisionPaddingLeft, ...others } =
      props;

    const collisionPadding: PropsOf<typeof Popover.Content>['collisionPadding'] = {
      top: collisionPaddingTop,
      right: collisionPaddingRight,
      bottom: collisionPaddingBottom,
      left: collisionPaddingLeft,
    };

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        <Popover.Root>
          <Popover.Trigger>Open popover</Popover.Trigger>
          <Popover.Content {...others} collisionPadding={collisionPadding}>
            <Popover.Section>
              <Popover.Header>
                <Popover.Title>Popover Title</Popover.Title>
                <Popover.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel tempore
                  ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat minus officia
                  dolore tenetur.
                </Popover.Description>
              </Popover.Header>
              <Popover.Body>
                <Code.Root>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatum dignissimos aut vero
                  similique ea autem maiores, ipsam numquam consequuntur, saepe animi? Numquam consequuntur amet
                  blanditiis dolor obcaecati iste deleniti illum nisi ad earum aut minus sed quidem tempore quisquam
                  delectus commodi recusandae, exercitationem nostrum nam sint error enim veritatis.
                </Code.Root>
              </Popover.Body>
              <Popover.Footer>
                <Popover.Footer style={{ display: 'flex', justifyContent: 'end', columnGap: '0.75rem' }}>
                  <Popover.Close>Close</Popover.Close>
                  <Popover.Close variant="solid" color="primary">
                    Action
                  </Popover.Close>
                </Popover.Footer>
              </Popover.Footer>
            </Popover.Section>
          </Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger>Open popover</Popover.Trigger>
          <Popover.Content {...others} collisionPadding={collisionPadding}>
            <Popover.Section>
              <Popover.Header>
                <Popover.Title>Popover Title</Popover.Title>
                <Popover.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque debitis cupiditate vel tempore
                  ex dicta quidem incidunt, minus corrupti? Inventore debitis at quidem nulla quaerat minus officia
                  dolore tenetur.
                </Popover.Description>
              </Popover.Header>
              <Popover.Body style={{ maxWidth: '100%', overflowX: 'auto' }}>
                <Code.Root>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatum dignissimos aut vero
                  similique ea autem maiores, ipsam numquam consequuntur, saepe animi? Numquam consequuntur amet
                  blanditiis dolor obcaecati iste deleniti illum nisi ad earum aut minus sed quidem tempore quisquam
                  delectus commodi recusandae, exercitationem nostrum nam sint error enim veritatis.
                </Code.Root>
              </Popover.Body>
              <Popover.Footer>
                <Popover.Footer style={{ display: 'flex', justifyContent: 'end', columnGap: '0.75rem' }}>
                  <Popover.Close>Close</Popover.Close>
                  <Popover.Close variant="solid" color="primary">
                    Action
                  </Popover.Close>
                </Popover.Footer>
              </Popover.Footer>
            </Popover.Section>
          </Popover.Content>
        </Popover.Root>
      </div>
    );
  },
};
