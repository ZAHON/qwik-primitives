import { useId, $ } from '@builder.io/qwik';

const topLayersStack: string[] = [];

export const useTopLayer = () => {
  const autoId = useId();

  const add$ = $(() => {
    const activeTopLayer = topLayersStack[topLayersStack.length - 1];

    if (activeTopLayer !== autoId) {
      topLayersStack.push(autoId);
    }
  });

  const remove$ = $(() => {
    const activeTopLayer = topLayersStack[topLayersStack.length - 1];

    if (activeTopLayer === autoId) {
      topLayersStack.pop();
    }
  });

  const isActiveTopLayer$ = $(() => {
    const activeTopLayer = topLayersStack[topLayersStack.length - 1];

    return activeTopLayer === autoId;
  });

  return { add$, remove$, isActiveTopLayer$ };
};
