import type { ComponentKeyboardInteractionsDataListProps } from './component-keyboard-interactions-data-list.types';
import { component$ } from '@builder.io/qwik';
import { DataList } from '@/ui/data-list';
import { Kbd } from '@/ui/kbd';
import { Text } from '@/ui/text';
import { Separator } from '@/ui/separator';
import { twm } from '@/utilities/twm';
import { componentKeyboardInteractionsDataListStyles } from './component-keyboard-interactions-data-list.styles';

export const ComponentKeyboardInteractionsDataList = component$<ComponentKeyboardInteractionsDataListProps>((props) => {
  const { data, class: className } = props;

  return (
    <div class={twm(componentKeyboardInteractionsDataListStyles(), className)}>
      <div class="flex flex-col gap-y-8">
        {data.map(({ key, description }) => (
          <div key={key}>
            <Kbd.Root size="3">{key}</Kbd.Root>
            <Separator.Root decorative={true} class="my-2" />

            <DataList.Root orientation="vertical">
              <DataList.Item>
                <DataList.Label highContrast={true} class="text-balance font-bold">
                  Description
                </DataList.Label>
                <DataList.Value>
                  {typeof description === 'string' ? <Text.Root size="2">{description}</Text.Root> : description}
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </div>
        ))}
      </div>
    </div>
  );
});
