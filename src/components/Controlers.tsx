import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
} from 'react';
import styled from 'styled-components';

import Button from './partials/Button';

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

const Controlers = ({ width, height }: IProps) => {
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
    <Container>
      <Place className="place-command"></Place>
      <Button className="left-command"></Button>
      <Button className="move-command"></Button>
      <Button className="right-command"></Button>
      <Report className="report-area"></Report>
    </Container>
  );
};

export default Controlers;

const Report = styled.div``;

const Place = styled.div``;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .place-command {
    grid-area: 1 / 1 / 3 / 4;
  }
  .left-command {
    grid-area: 4 / 1 / 5 / 2;
  }
  .move-command {
    grid-area: 3 / 2 / 4 / 3;
  }
  .right-command {
    grid-area: 4 / 3 / 5 / 4;
  }
  .report-area {
    grid-area: 1 / 5 / 5 / 6;
  }
`;
