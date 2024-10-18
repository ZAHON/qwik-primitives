const stack: string[] = [];

export const topLayersStack = {
  add: (id: string) => {
    const activeTopLayer = stack[stack.length - 1];

    if (activeTopLayer !== id) {
      stack.push(id);
    }
  },
  remove: (id: string) => {
    const activeTopLayer = stack[stack.length - 1];

    if (activeTopLayer === id) {
      stack.pop();
    }
  },
  isActiveTopLayer: (id: string) => {
    const activeTopLayer = stack[stack.length - 1];

    return activeTopLayer === id;
  },
};
