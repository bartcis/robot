import React, { useState } from 'react';
import Report from './Report';
import MovementControler from './MovmentControler';
import PlacementControler from './PlacementControler';
import GridControler from './GridControler';

const Controlers = () => {
  const [controlers, setControlers] = useState(false);

  const showControlers = (state: boolean) => {
    setControlers(state);
  };

  return (
    <aside className="layout--controlers">
      <GridControler tests={false} />
      <PlacementControler parentCallback={showControlers} tests={false} />
      {controlers === true ? <MovementControler tests={false} /> : ''}
      {controlers === true ? <Report /> : ''}
    </aside>
  );
};

export default Controlers;
