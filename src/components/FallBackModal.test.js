import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import FallBackModal from './FallBackModal';

// Test suites
describe('FallBackModal Test', () => {
  // Test case
  it('returns content', () => {
    render(<FallBackModal />);
    expect(screen.getByTestId('fallbackmodal-content')).toBeInTheDocument();
  });
});
