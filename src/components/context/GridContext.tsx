import { createContext } from 'react';

interface IProps {
  height: number;
  width: number;
  unitSize: number;
}

const GridContext = createContext<[any, (context: IProps) => void]>([
  {
    height: 5,
    width: 5,
    unitSize: 100,
  },
  () => {},
]);

export default GridContext;
