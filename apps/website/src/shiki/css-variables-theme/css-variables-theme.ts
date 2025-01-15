import { createCssVariablesTheme } from 'shiki/core';

export const cssVariablesTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--syntax-highlighter-',
  variableDefaults: {},
  fontStyle: true,
});
