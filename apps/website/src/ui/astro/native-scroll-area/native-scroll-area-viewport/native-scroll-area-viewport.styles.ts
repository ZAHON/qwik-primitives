import { cva } from 'class-variance-authority';

export const nativeScrollAreaViewportStyles = cva([
  '[@media(pointer:fine)]:[@media(overflow-inline:scroll)]:-mb-3',
  '[@media(pointer:fine)]:[@media(overflow-inline:scroll)]:[@-moz-document_url-prefix()]:-mb-0',
]);
