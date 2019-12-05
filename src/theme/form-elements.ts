export interface IFormElements {
  checkbox: {
    border: string;
    borderRadius: string;
    sizes?: {
      [key: string]: object;
    }
  }
}

export const formElements: IFormElements = {
  checkbox: {
    border: 'none',
    borderRadius: '0',
    sizes: {
      small: {
        checkmark: '10px',
        height: '20px',
        width: '20px',
      },
      medium: {
        checkmark: '15px',
        height: '25px',
        width: '25px',
      },
      large: {
        checkmark: '20px',
        height: '30px',
        width: '30px',
      }
    }
  }
};