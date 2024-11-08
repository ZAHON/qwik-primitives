export const getIconSize = (size: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9') => {
  switch (size) {
    case '1': {
      return 10;
    }
    case '2': {
      return 12;
    }
    case '3': {
      return 14;
    }
    case '4': {
      return 16;
    }
    case '5': {
      return 18;
    }
    case '6': {
      return 20;
    }
    case '7': {
      return 22;
    }
    case '8': {
      return 29;
    }
    case '9': {
      return 54;
    }
    default: {
      throw Error(`Unknown size: ${size}`);
    }
  }
};
