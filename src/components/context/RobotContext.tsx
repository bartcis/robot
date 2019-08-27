import { createContext } from 'react';

const RobotContext = createContext<[any, (context: object) => void]>([
  {
    visible: false,
    xPosition: 0,
    yPosition: 0,
    direction: 0,
  },
  () => {},
]);

export default RobotContext;
