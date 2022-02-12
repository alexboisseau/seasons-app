import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ActionButton from './ActionButton';

// Test suites
describe('Action Button Test', () => {
  // Test case
  it('return a label', () => {
    render(
      <ActionButton label={'Go back'} action={() => console.log('Action')} />
    );
    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();
  });

  // Test case
  it('calls `action` on click', () => {
    const action = jest.fn();

    render(<ActionButton label={'Go back'} action={action} />);
    fireEvent.click(screen.getByRole('button', { name: 'Go back' }));

    expect(action).toHaveBeenCalled();
  });
});
