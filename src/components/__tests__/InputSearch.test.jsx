import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputSearch from '../InputSearch';

describe('InputSearch Component', () => {
  const mockSetSearchLocation = jest.fn();

  beforeEach(() => {
    render(<InputSearch setSearchLocation={mockSetSearchLocation} />);
  });

  test('valida el rango de números correctamente', () => {
    const input = screen.getByPlaceholderText('Input a dimension number from 1 to 126');
    const form = input.closest('form');

    // Prueba número válido
    fireEvent.change(input, { target: { value: '50' } });
    fireEvent.submit(form);
    expect(mockSetSearchLocation).toHaveBeenCalledWith(50);

    expect(input.style.borderColor).toMatch(/rgb\(203,\s*222,\s*93\)|#cbde5d/i);

    fireEvent.change(input, { target: { value: '200' } });
    fireEvent.submit(form);
    expect(mockSetSearchLocation).not.toHaveBeenCalledWith(200);
    expect(input.style.borderColor).toBe('red');
  });
});
