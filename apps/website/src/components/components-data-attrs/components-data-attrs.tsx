import type { ComponentsDataAttrsProps } from './components-data-attrs.types';
import { component$ } from '@builder.io/qwik';
import { Table } from '@/ui/table';
import { Code } from '@/ui/code';

export const ComponentsDataAttrs = component$<ComponentsDataAttrsProps>((props) => {
  const { data, ...others } = props;

  return (
    <Table.Root {...others}>
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
                  <Code.Root size="2" color="default">
                    {values}
                  </Code.Root>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollArea>
    </Table.Root>
  );
});
