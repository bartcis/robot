export const styles: ITypes = {
  colors: {
    leadColorDark: '#0295ff',
    leadColorMid: '#58bdfc',
    leadColorLight: '#a2e0f9',
    backgroundBody: '#fafbfd',
    backgroundHeader: '#fff',
    backgroundFooter: '#fff',
    backgroundSide: '#fff',
    unactive: '#a6b5c6',
    border: '#eaeef1',
    shadow: '#dddddd',
    font: '#141414',
    contrast1: '#80e30e',
    contrast2: '#fdc935',
  },
  boxModel: {
    paddingFull: '1rem',
    paddingVertical: '1rem 0',
    paddingHorizontal: '0 1rem',
    marginFull: '1rem',
    marginVertical: '1rem 0',
    marginHorizontal: '0 1rem',
  },
};

interface ITypes {
  colors: {
    leadColorDark: string;
    leadColorMid: string;
    leadColorLight: string;
    backgroundBody: string;
    backgroundHeader: string;
    backgroundFooter: string;
    backgroundSide: string;
    unactive: string;
    border: string;
    shadow: string;
    font: string;
    contrast1: string;
    contrast2: string;
  };
  boxModel: {
    paddingFull: string;
    paddingVertical: string;
    paddingHorizontal: string;
    marginFull: string;
    marginVertical: string;
    marginHorizontal: string;
  };
}
