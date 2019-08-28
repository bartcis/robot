import React, { useState } from 'react';
import styled from 'styled-components';

import Table from './components/Table';
import Controlers from './components/Controlers';

const App = () => {
  const [grid] = useState({
    width: 5,
    height: 5,
    unitSize: 100,
  });

  return (
    <Layout>
      <Controlers grid={grid} />
      <Table grid={grid} />
    </Layout>
  );
};

export default App;

const Layout = styled.section`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  text-align: center;
`;
