import React, { useContext } from 'react';

import Table from './components/Table';
import Controlers from './components/Controlers';
import { HotKeys } from 'react-hotkeys';
import KeyContext from './components/context/KeyContext';

const App = () => {
  const [currentKey, setCurrentKey] = useContext(KeyContext);

  const keyMap = {
    ROTATE_LEFT: 'a',
    ROTATE_RIGHT: 'd',
    FORWARD: 'w',
  };

  const handlers = {
    ROTATE_LEFT: (e: any) =>
      setCurrentKey({ ...currentKey, key: 'a', count: currentKey.count++ }),
    ROTATE_RIGHT: (e: any) =>
      setCurrentKey({ ...currentKey, key: 'd', count: currentKey.count++ }),
    FORWARD: (e: any) =>
      setCurrentKey({ ...currentKey, key: 'w', count: currentKey.count++ }),
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <section className="layout--main">
        <Controlers />
        <Table />
      </section>
    </HotKeys>
  );
};

export default App;
