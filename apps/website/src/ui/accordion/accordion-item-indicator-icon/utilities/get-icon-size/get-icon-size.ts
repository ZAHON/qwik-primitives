export const getIconSize = (size: '1' | '2' | '3') => {
  switch (size) {
    case '1': {
      return 16;
    }
    case '2': {
      return 16;
    }
    case '3': {
      return 18;
    }
    default: {
      throw Error(`Unknown size: ${size}`);
    }
  }
};
