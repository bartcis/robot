import React from 'react';
import { render, cleanup } from '@testing-library/react';

import pet, {
  ANIMALS,
  _breeds,
  _dogs,
} from '../../__mocks__/@frontendmasters/pet';
import SearchParams from '../components/global/search';

afterEach(cleanup);

test('Search component', async () => {
  const { container, getByTestId, getByText } = render(<SearchParams />);

  const animalDropdown = getByTestId('use-dropdown-animal');
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

  expect(pet.breeds).toHaveBeenCalled();

  const breedDropdown = getByTestId('use-dropdown-breed');
  expect(breedDropdown.children.length).toEqual(_breeds.length + 1);
});
