import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
} from 'react';
import styled from 'styled-components';

import { useMediaQuery } from './helpers/MediaQuery';

interface IProps {
  width: number;
  height: number;
}

interface IStyles {
  width: string;
  height: string;
  overflow: {
    (options?: ScrollToOptions | undefined): void;
    (x: number, y: number): void;
  };
}

const Table = ({ width, height }: IProps) => {
  const isMobile = useMediaQuery('(min-width: 600px)');

  const buildTable = (xDimension: number, yDimension: number) => {
    let gridArray = [];

    for (let i = 0; i < xDimension * yDimension; i++) {
      gridArray.push(i);
    }
    return gridArray;
  };

  const inlineStyles = {
    table: (isMobile: IStyles) => ({
      width: isMobile ? `${width * 100}px` : `${width * 50}px`,
      height: isMobile ? `${height * 100}px` : `${width * 50}px`,
      overflow: scroll,
    }),
  };

  return (
    <Container style={inlineStyles.table(isMobile)}>
      {buildTable(width, height).map(field => (
        <Element key={field} />
      ))}
    </Container>
  );
};

export default Table;

const Element = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.styles.colors.leadColorLight};
  box-sizing: border-box;
  @media (min-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  border: 1px solid ${({ theme }) => theme.styles.colors.leadColorDark};
`;
