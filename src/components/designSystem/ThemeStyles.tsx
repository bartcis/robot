export const styles: ITypes = {
  colors: {
    leadColorDark: '#0295ff',
    leadColorMid: '#58bdfc',
    leadColorLight: '#a2e0f9',
    backgroundBody: '#fafbfd',
    backgroundButon: '#fff',
    unactive: '#a6b5c6',
    border: '#eaeef1',
    error: '#FF3333',
    font: '#141414',
    contrast1: '#80e30e',
    contrast2: '#fdc935',
  },
  boxModel: {
    full: '1rem',
    vertical: '1rem 0',
    horizontal: '0 1rem',
    center: '1rem auto',
  },
};

interface ITypes {
  colors: {
    leadColorDark: string;
    leadColorMid: string;
    leadColorLight: string;
    backgroundBody: string;
    backgroundButon: string;
    unactive: string;
    border: string;
    error: string;
    font: string;
    contrast1: string;
    contrast2: string;
  };
  boxModel: {
    full: string;
    vertical: string;
    horizontal: string;
    center: string;
  };
}
