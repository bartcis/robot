import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
} from 'react';
import styled from 'styled-components';

interface IProps {
  width: number;
  height: number;
}

const Table = ({ width, height }: IProps) => {
  const buildTable = (xDimension: number, yDimension: number) => {
    let gridArray = [];

    for (let i = 0; i < xDimension * yDimension; i++) {
      gridArray.push(i);
    }
    return gridArray;
  };

  return (
    <Container>
      {buildTable(width, height).map(field => (
        <Element
          key={field}
          style={{
            width: `${100 / width}%`,
            height: `${100 / height}%`,
          }}
        />
      ))}
    </Container>
  );
};

export default Table;

const Element = styled.div`
  width: 100px;
  height: 100px;
`;

const Container = styled.section`
  width: 500px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  border: 1px solid ${({ theme }) => theme.styles.colors.leadColorDark};
  div:nth-child(2n) {
    background-color: ${({ theme }) => theme.styles.colors.leadColorLight};
  }
`;
