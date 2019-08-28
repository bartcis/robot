import React, { useState } from 'react';

import Table from './components/Table';
import Controlers from './components/Controlers';

const App = () => {
  const [grid] = useState({
    width: 5,
    height: 5,
    unitSize: 100,
  });

  return (
    <section className="layout--main">
      <Controlers grid={grid} />
      <Table grid={grid} />
    </section>
  );
};

export default App;
