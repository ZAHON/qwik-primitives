import type { HeadingLinkStoreValue } from './heading-link-store.types';
import { map } from 'nanostores';

export const $headingLinkStore = map<HeadingLinkStoreValue>({
  id: undefined,
  size: undefined,
});
