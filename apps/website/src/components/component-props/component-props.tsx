import type { ComponentPropsProps } from './component-props.types';
import { component$ } from '@builder.io/qwik';
import { Table } from '@/ui/table';
import { Code } from '@/ui/code';
import { VisuallyHidden } from '@/ui/visually-hidden';
import { MinusIcon } from '@/icons/minus-icon';
import { ComponentPropsPopover } from './component-props-popover';

export const ComponentProps = component$<ComponentPropsProps>((props) => {
  const { data, ...others } = props;

  return (
    <Table.Root {...others}>
      <Table.ScrollArea>
        <Table.Content>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Prop</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map(({ propName, propDescription, typeValue, typeDescription, defaultValue }) => (
              <Table.Row key={propName}>
                <Table.RowHeaderCell>
                  <div class="flex items-center gap-x-1">
                    <Code.Root size="2">{propName}</Code.Root>
                    {propDescription && (
                      <ComponentPropsPopover triggerLabel="Prop description">{propDescription}</ComponentPropsPopover>
                    )}
                  </div>
                </Table.RowHeaderCell>

                <Table.Cell>
                  <div class="flex items-center gap-x-1">
                    <Code.Root size="2" color="default">
                      {typeValue}
                    </Code.Root>
                    {typeDescription && (
                      <ComponentPropsPopover triggerLabel="See full type">{typeDescription}</ComponentPropsPopover>
                    )}
                  </div>
                </Table.Cell>

                <Table.Cell>
                  {defaultValue ? (
                    <Code.Root size="2" color="default">
                      {defaultValue}
                    </Code.Root>
                  ) : (
                    <div class="flex h-5 items-center text-default-alpha-11">
                      <MinusIcon height={14} width={14} />
                      <VisuallyHidden.Root>No default value</VisuallyHidden.Root>
                    </div>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollArea>
    </Table.Root>
  );
});
