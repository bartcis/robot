import React, { useContext } from 'react';
import GridContext from './context/GridContext';

interface IProps {
  tests: boolean;
}

const GridControler = ({ tests }: IProps) => {
  const [gridState, setGridState] = useContext(GridContext);
  const gridOptions = [3, 4, 5, 6, 7, 8, 9];

  const handleChange = (event: any) => {
    switch (event.currentTarget.name) {
      case 'y-axis':
        setGridState({
          ...gridState,
          height: Number(event.currentTarget.value),
        });
        break;
      case 'x-axis':
        setGridState({
          ...gridState,
          width: Number(event.currentTarget.value),
        });
        break;
      default:
        throw new Error();
    }
  };

  const testRender = (
    <>
      <div data-testid="gridHookTest">
        {`h: ${String(gridState.height)}, w: ${String(gridState.width)}`}
      </div>
    </>
  );

  return (
    <>
      <label>
        Set Grid Size (x, y)
        <div className="wrapper--selects">
          <select
            name="x-axis"
            value={gridState.width}
            onChange={handleChange}
            data-testid="changeXsize"
          >
            {gridOptions.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <select
            name="y-axis"
            value={gridState.height}
            onChange={handleChange}
            data-testid="changeYsize"
          >
            {gridOptions.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </label>
      {tests === true ? testRender : ''}
    </>
  );
};

export default GridControler;
