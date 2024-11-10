import type { ComponentPropsTableProps } from './component-props-table.types';
import { component$ } from '@builder.io/qwik';
import { Table } from '@/ui/table';
import { Code } from '@/ui/code';
import { VisuallyHidden } from '@/ui/visually-hidden';
import { MinusIcon } from '@/icons/minus-icon';
import { twm } from '@/utilities/twm';
import { ComponentPropsPopover } from '../component-props-popover';
import { componentPropsTableStyles } from './component-props-table.styles';

export const ComponentPropsTable = component$<ComponentPropsTableProps>((props) => {
  const { data, class: className } = props;

  return (
    <Table.Root class={twm(componentPropsTableStyles(), className)}>
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
                    <ComponentPropsPopover
                      label={`See ${propName} prop description`}
                      title={`Prop ${propName} description`}
                    >
                      {propDescription}
                    </ComponentPropsPopover>
                  </div>
                </Table.RowHeaderCell>

                <Table.Cell>
                  {typeDescription ? (
                    <div class="flex items-center gap-x-1">
                      <Code.Root size="2" color="default">
                        {typeValue}
                      </Code.Root>
                      <ComponentPropsPopover
                        label={`See full ${typeValue} type definition`}
                        title={`Full ${typeValue} type definition`}
                      >
                        {typeDescription}
                      </ComponentPropsPopover>
                    </div>
                  ) : (
                    <Code.Root size="2" color="default">
                      {typeValue}
                    </Code.Root>
                  )}
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
