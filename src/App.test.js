import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

// Test suites
describe('App Test', () => {
  // Test case
  it('renders the content', () => {
    render(<App />);
    expect(screen.getByTestId('app-content')).toBeInTheDocument();
  });

  // Test case
  it('renders the season card', () => {
    render(<App />);
    expect(screen.getByTestId('season-card')).toBeInTheDocument();
  });

  // Test case
  it('renders the new season modal lazily', async () => {
    render(<App />);

    // Get the button
    const actionButton = screen.getByRole('button', { name: 'And after ?' });

    // Simulate a click
    actionButton.click();

    // Try to get the season modal
    await waitFor(() =>
      expect(screen.getByTestId('next-season-modal')).toBeInTheDocument()
    );
  });
});
