import type { ComponentPropsDataListProps } from './component-props-data-list.types';
import { component$ } from '@builder.io/qwik';
import { Code } from '@/ui/code';
import { DataList } from '@/ui/data-list';
import { Separator } from '@/ui/separator';
import { VisuallyHidden } from '@/ui/visually-hidden';
import { MinusIcon } from '@/icons/minus-icon';
import { twm } from '@/utilities/twm';
import { ComponentPropsPopover } from '../component-props-popover';
import { componentPropsDataListStyles } from './component-props-data-list.styles';

export const ComponentPropsDataList = component$<ComponentPropsDataListProps>((props) => {
  const { data, class: className } = props;

  return (
    <div class={twm(componentPropsDataListStyles(), className)}>
      <div class="flex flex-col gap-y-8">
        {data.map(({ propName, propDescription, typeValue, typeDescription, defaultValue }) => (
          <div key={propName}>
            <Code.Root size="3">{propName}</Code.Root>
            <Separator.Root decorative={true} class="my-2" />

            <DataList.Root orientation="vertical">
              <DataList.Item>
                <DataList.Label highContrast={true} class="text-balance font-bold">
                  Description
                </DataList.Label>
                <DataList.Value>
                  <div>{propDescription}</div>
                </DataList.Value>
              </DataList.Item>

              <Separator.Root decorative={true} />

              <DataList.Item>
                <DataList.Label highContrast={true} class="text-balance font-bold">
                  Type
                </DataList.Label>
                <DataList.Value>
                  <div class="flex items-center gap-x-1">
                    <Code.Root size="2" color="default">
                      {typeValue}
                    </Code.Root>
                    {typeDescription && (
                      <ComponentPropsPopover
                        label={`See full ${typeValue} type definition`}
                        title={`Full ${typeValue} type definition`}
                      >
                        {typeDescription}
                      </ComponentPropsPopover>
                    )}
                  </div>
                </DataList.Value>
              </DataList.Item>

              <Separator.Root decorative={true} />

              <DataList.Item>
                <DataList.Label highContrast={true} class="text-balance font-bold">
                  Default
                </DataList.Label>
                <DataList.Value>
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
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </div>
        ))}
      </div>
    </div>
  );
});
