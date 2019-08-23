import React, { useState } from 'react';
import styled from 'styled-components';

import Table from './components/Table';

const App = () => {
  const [grid] = useState({ width: 3, height: 3 });

  return (
    <Layout>
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
