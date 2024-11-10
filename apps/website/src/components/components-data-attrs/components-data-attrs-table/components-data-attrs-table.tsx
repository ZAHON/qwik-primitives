import type { ComponentsDataAttrsTableProps } from './components-data-attrs-table.types';
import { component$ } from '@builder.io/qwik';
import { Table } from '@/ui/table';
import { Code } from '@/ui/code';
import { twm } from '@/utilities/twm';
import { componentsDataAttrsTableStyles } from './components-data-attrs-table.styles';

export const ComponentsDataAttrsTable = component$<ComponentsDataAttrsTableProps>((props) => {
  const { data, class: className } = props;

  return (
    <Table.Root class={twm(componentsDataAttrsTableStyles(), className)}>
      <Table.ScrollArea>
        <Table.Content>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Data attribute</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Values</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map(({ name, values }) => (
              <Table.Row key={name}>
                <Table.RowHeaderCell>
                  <Code.Root size="2">{name}</Code.Root>
                </Table.RowHeaderCell>

                <Table.Cell>
                  {typeof values === 'string' ? (
                    <Code.Root size="2" color="default">
                      {values}
                    </Code.Root>
                  ) : (
                    values
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
