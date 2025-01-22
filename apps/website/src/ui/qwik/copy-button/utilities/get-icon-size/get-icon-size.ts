export const getIconSize = (size: '1' | '2' | '3' | '4') => {
  switch (size) {
    case '1': {
      return 15;
    }
    case '2': {
      return 16;
    }
    case '3': {
      return 18;
    }
    case '4': {
      return 20;
    }
    default: {
      throw Error(`Unknown size: ${size}`);
    }
  }
};
