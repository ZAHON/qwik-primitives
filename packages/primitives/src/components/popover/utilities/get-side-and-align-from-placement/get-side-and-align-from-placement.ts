import type { Placement } from '@floating-ui/dom';
import type { Side, Align } from './get-side-and-align-from-placement.types';

export const getSideAndAlignFromPlacement = (placement: Placement) => {
  const [side, align = 'center'] = placement.split('-');

  return { side: side as Side, align: align as Align };
};
