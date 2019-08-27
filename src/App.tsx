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
      <Table grid={grid} />
      <Controlers grid={grid} />
    </Layout>
  );
};

export default App;

const Layout = styled.section`
  max-width: 900px;
  margin: 2rem auto;
  box-sizing: border-box;
  text-align: center;
`;
