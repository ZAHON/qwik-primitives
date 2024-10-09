/** @type {import('prettier').Config} */

module.exports = {
  printWidth: 120,
  semi: true,
  trailingComma: "es5",
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["cva"],
  plugins: ["prettier-plugin-tailwindcss"],
};
