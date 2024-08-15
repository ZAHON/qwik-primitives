export const removeLinks = (items: HTMLElement[]) => {
  return items.filter((item) => item.tagName !== 'A');
};
