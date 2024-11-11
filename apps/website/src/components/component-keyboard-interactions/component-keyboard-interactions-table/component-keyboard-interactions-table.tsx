import type { ComponentKeyboardInteractionsTableProps } from './component-keyboard-interactions-table.types';
import { component$ } from '@builder.io/qwik';
import { Table } from '@/ui/table';
import { Kbd } from '@/ui/kbd';
import { Text } from '@/ui/text';
import { twm } from '@/utilities/twm';
import { componentKeyboardInteractionsTableStyles } from './component-keyboard-interactions-table.styles';

export const ComponentKeyboardInteractionsTable = component$<ComponentKeyboardInteractionsTableProps>((props) => {
  const { data, class: className } = props;

  return (
    <Table.Root class={twm(componentKeyboardInteractionsTableStyles(), className)}>
      <Table.ScrollArea>
        <Table.Content>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Key</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map(({ key, description }) => (
              <Table.Row key={key}>
                <Table.RowHeaderCell>
                  <Kbd.Root size="2">{key}</Kbd.Root>
                </Table.RowHeaderCell>

                <Table.Cell>
                  {typeof description === 'string' ? <Text.Root size="2">{description}</Text.Root> : description}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollArea>
    </Table.Root>
  );
});
