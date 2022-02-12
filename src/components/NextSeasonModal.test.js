import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  determinateCurrentSeason,
  determinateNextSeason,
} from '../modules/season.module';
import NextSeasonModal from './NextSeasonModal';

// Test suites
describe('NextSeasonModal Test', () => {
  let currentSeason = determinateCurrentSeason();
  let nextSeason = determinateNextSeason(currentSeason);

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 5, 28));

    currentSeason = determinateCurrentSeason();
    nextSeason = determinateNextSeason(currentSeason);
  });

  // Test case
  it('renders a title `Autumn 🍂`', () => {
    render(<NextSeasonModal nextSeason={nextSeason} />);
    expect(screen.getByText('Autumn 🍂')).toBeInTheDocument();
  });

  // Test case
  it('renders a text `Duration : 92 days`', () => {
    render(<NextSeasonModal nextSeason={nextSeason} />);
    expect(screen.getByText('Duration : 88 days')).toBeInTheDocument();
  });

  // Test case
  it('renders a text `Start in 87 days`', () => {
    render(<NextSeasonModal nextSeason={nextSeason} />);
    expect(screen.getByText('Start in 87 days')).toBeInTheDocument();
  });

  // Test case
  it('renders a button with label `Go back`', () => {
    render(<NextSeasonModal nextSeason={nextSeason} />);
    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();
  });
});
