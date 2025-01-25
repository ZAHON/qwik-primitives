import type { GetComponentPartDataParams } from './get-component-part-data.types';
import { getEntry } from 'astro:content';

export const getComponentPartData = async (params: GetComponentPartDataParams) => {
  const { id, part } = params;

  const componentData = await getEntry('componentsData', id);
  const partData = componentData?.data.parts.find(({ part: componentPart }) => componentPart === part);

  if (!partData) {
    throw Error(`No data found for part ${part} of component with id ${id}`);
  }

  return partData;
};
