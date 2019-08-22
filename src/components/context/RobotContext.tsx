import { createContext } from 'react';

const RobotContext = createContext<[any, (context: object) => void]>([
  '',
  () => {},
]);

export default RobotContext;
