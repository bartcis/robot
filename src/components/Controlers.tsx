import React, { useState } from 'react';
import Report from './Report';
import MovementControler from './MovmentControler';
import PlacementControler from './PlacementControler';
import GridControler from './GridController';

const Controlers = () => {
  const [controlers, setControlers] = useState(false);

  const showControlers = (state: boolean) => {
    setControlers(state);
  };

  return (
    <aside className="layout--controlers">
      <GridControler />
      <PlacementControler parentCallback={showControlers} />
      {controlers === true ? <MovementControler /> : ''}
      {controlers === true ? <Report /> : ''}
    </aside>
  );
};

export default Controlers;
