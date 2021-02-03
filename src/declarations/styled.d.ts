// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface Fonts {
    body: string;
    heading: string;
    display: string;
    button?: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
  }

  export interface FontSizes {
    xs: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xlg: string;
    xxlg: string;
  }

  export interface FontWeights {
    light: number;
    normal: number;
    bold: number;
  }

  export interface LineHeights {
    xs: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xlg: string;
    xxlg: string;
  }

  export interface ThemeColor {
    base: string;
    contrast: string;
    shade: string;
    tint: string;
  }

  export interface Colors {
    black: string | string[];
    white: string | string[];
    primary: ThemeColor;
    secondary: ThemeColor;
    tertiary: ThemeColor;
    success: ThemeColor;
    warning: ThemeColor;
    danger: ThemeColor;
    dark: ThemeColor;
    medium: ThemeColor;
    light: ThemeColor;
  }

  export interface FormElements {
    input: {
      backgroundColor: string;
      border: string;
      borderRadius: string;
      height: string;
      padding: string;
      floatingLabel: string;
      requiredColor: string;
    };
    checkbox: {
      border: string;
      borderRadius: string;
      sizes?: {
        [key: string]: any;
      };
    };
    fileInput: {
      backgroundColor: string;
      color: string;
    };
    radio: {
      border: string;
      borderRadius: string;
      sizes?: {
        [key: string]: any;
      };
    };
  }

  export interface ColorVariant {
    [key: string]: any;
  }

  export interface DefaultTheme {
    borders: Array<number | string>;

    colors: Colors;

    formElements: FormElements;

    gridColumns: number;
    breakpoints: {
      [key: string]: string;
    };
    media: {
      [key: string]: string;
    };
    fonts: Fonts;
    fontSizes: FontSizes;
    fontWeights: FontWeights;
    lineHeights: LineHeights;

    siteMaxWidth: string;
    maxWidths: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    radii: string[];
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    space: string[];

    buttons: ColorVariant;
    buttonSizes: {
      small: {
        fontSize: string;
        padding: string;
      };
      medium: {
        fontSize: string;
        padding: string;
      };
      large: {
        fontSize: string;
        padding: string;
      };
    };
    modalSizes: {
      sm: any;
      md: any;
      lg: any;
    };
    wysiwyg: {
      maxWidth: string;
      tightness: {
        tight: any;
        default: any;
        loose: any;
      };
    };
  }
}
