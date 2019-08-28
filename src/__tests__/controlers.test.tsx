import React from 'react';
import { cleanup } from '@testing-library/react';
import Controlers from '../components/Controlers';
import 'jest-styled-components';
import styled, { ThemeProvider } from 'styled-components';
import styledTheme from '../components/designSystem/ThemeExport';
import { shallow } from 'enzyme';

afterEach(cleanup);

test('Search component', () => {
  const shallowWithTheme = (tree: any, theme: any) => {
    const context = shallow(<ThemeProvider theme={theme} />)
      .instance()
      .getChildContext();
    return shallow(tree, { context });
  };
  const grid = {
    width: 50,
    height: 50,
    unitSize: 50,
  };
  const wrapper = shallowWithTheme(<Controlers grid={grid} />, styledTheme);
  expect(wrapper).toContain('Provide X coordinate');
});
