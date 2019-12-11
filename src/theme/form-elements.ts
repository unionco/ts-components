export interface IFormElements {
  input: {
    backgroundColor: string;
    border: string;
    borderRadius: string;
    padding: string;
    floatingLabel: string;
    requiredColor: string; 
  }

  checkbox: {
    border: string;
    borderRadius: string;
    sizes?: {
      [key: string]: object;
    }
  }

  fileInput: {
    backgroundColor: string;
    color: string;
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
  input: {
    backgroundColor: '#eee',
    border: 'none',
    borderRadius: '0',
    padding: '22px',
    floatingLabel: 'translate(-10px, -40px) scale(0.75);',
    requiredColor: 'red',
  },
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
  fileInput: {
    backgroundColor: '#3880ff',
    color: '#fff',
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
  },
};