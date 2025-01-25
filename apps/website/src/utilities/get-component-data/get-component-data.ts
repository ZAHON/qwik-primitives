import type { GetComponentDataParams } from './get-component-data.types';
import { getEntry } from 'astro:content';

export const getComponentData = async (params: GetComponentDataParams) => {
  const { id } = params;

  const componentData = await getEntry('componentsData', id);

  if (!componentData) {
    throw Error(`No data found for component with id ${id}`);
  }

  return componentData.data;
};
