import type { ComponentsDataAttrsDataListProps } from './components-data-attrs-data-list.types';
import { component$ } from '@builder.io/qwik';
import { DataList } from '@/ui/data-list';
import { Code } from '@/ui/code';
import { Separator } from '@/ui/separator';
import { twm } from '@/utilities/twm';
import { componentsDataAttrsDataListStyles } from './components-data-attrs-data-list.styles';

export const ComponentsDataAttrsDataList = component$<ComponentsDataAttrsDataListProps>((props) => {
  const { data, class: className } = props;

  return (
    <div class={twm(componentsDataAttrsDataListStyles(), className)}>
      <div class="flex flex-col gap-y-8">
        {data.map(({ name, values }) => (
          <div key={name}>
            <Code.Root size="3">{name}</Code.Root>
            <Separator.Root decorative={true} class="my-2" />

            <DataList.Root orientation="vertical">
              <DataList.Item>
                <DataList.Label highContrast={true} class="text-balance font-bold">
                  Values
                </DataList.Label>
                <DataList.Value>
                  {typeof values === 'string' ? (
                    <Code.Root size="2" color="default">
                      {values}
                    </Code.Root>
                  ) : (
                    values
                  )}
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </div>
        ))}
      </div>
    </div>
  );
});
