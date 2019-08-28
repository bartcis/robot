import { createContext } from 'react';

interface IProps {
  visible: boolean;
  xPosition: number;
  yPosition: number;
  direction: string;
  rotation: number;
}

const RobotContext = createContext<[any, (context: IProps) => void]>([
  {
    visible: false,
    xPosition: 0,
    yPosition: 0,
    direction: 0,
  },
  () => {},
]);

export default RobotContext;
