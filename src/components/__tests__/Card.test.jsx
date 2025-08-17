import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';

describe('Card Component', () => {
  const mockResident = 'https://rickandmortyapi.com/api/character/1';

  test('renderiza correctamente la información del personaje', async () => {
    render(<Card resident={mockResident} />);

    const characterName = await screen.findByRole('heading');
    expect(characterName).toBeInTheDocument();

    const statusElement = await screen.findByText(/Status:/i);
    expect(statusElement).toBeInTheDocument();

    const originElement = await screen.findByText(/Origin:/i);
    expect(originElement).toBeInTheDocument();

    const episodesElement = await screen.findByText(/Number of episodes:/i);
    expect(episodesElement).toBeInTheDocument();
  });
});
