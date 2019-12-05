export interface IFormElements {
  checkbox: {
    border: string;
    borderRadius: string;
    sizes?: {
      [key: string]: object;
    }
  }

  radio: {
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
  },
  radio: {
    border: 'none',
    borderRadius: '50px',
    sizes: {
      small: {
        innerCircle: '8px',
        height: '20px',
        width: '20px',
      },
      medium: {
        innerCircle: '13px',
        height: '25px',
        width: '25px',
      },
      large: {
        innerCircle: '18px',
        height: '30px',
        width: '30px',
      }
    }
  }
};