import React, { useState } from 'react';
import styled from 'styled-components';

import Table from './components/Table';

const App = () => {
  const [grid] = useState({ width: 5, height: 5 });

  return (
    <Layout>
      <h1>Dancing Robot</h1>
      <Table width={grid.width} height={grid.height} />
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
