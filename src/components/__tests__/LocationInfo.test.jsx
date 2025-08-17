import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LocationInfo from '../LocationInfo';

describe('LocationInfo Component', () => {
  const mockLocation = {
    name: 'Earth',
    type: 'Planet',
    dimension: 'Dimension C-137',
    residents: ['resident1', 'resident2'],
  };

  test('renderiza correctamente la información de la ubicación', () => {
    render(<LocationInfo location={mockLocation} />);

    expect(
      screen.getByText((content, element) => {
        return element.textContent === 'Name: Earth';
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText((content, element) => {
        return element.textContent === 'Type: Planet';
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText((content, element) => {
        return element.textContent === 'Dimension: Dimension C-137';
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText((content, element) => {
        return element.textContent === 'Population: 2';
      })
    ).toBeInTheDocument();
  });
});
