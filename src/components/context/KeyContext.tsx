import { createContext } from 'react';

interface IProps {
  key: string;
  count: number;
}

const KeyContext = createContext<[any, (context: IProps) => void]>([
  {
    key: '',
    count: 0,
  },
  () => {},
]);

export default KeyContext;
