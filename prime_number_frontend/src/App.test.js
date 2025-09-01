import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App basic UI', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders theme toggle and toggles between light and dark', () => {
    render(<App />);

    // initial theme is light, button should suggest switching to dark
    const toggleButton = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(toggleButton).toBeInTheDocument();

    // Clicking toggles to dark; aria-label should update to suggest switching back to light
    fireEvent.click(toggleButton);
    const toggleBackButton = screen.getByRole('button', { name: /switch to light mode/i });
    expect(toggleBackButton).toBeInTheDocument();

    // verify the displayed theme text updates as well
    expect(screen.getByText(/current theme:/i)).toHaveTextContent(/dark/i);

    // Toggle back to light
    fireEvent.click(toggleBackButton);
    expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument();
    expect(screen.getByText(/current theme:/i)).toHaveTextContent(/light/i);
  });
});
