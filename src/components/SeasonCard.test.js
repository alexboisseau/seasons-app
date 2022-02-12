import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SeasonCard from './SeasonCard';

import data from '../data/data.json';

// Test suites
describe('SeasonCard Test', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 5, 28));
  });

  // Test case
  it('renders a title `Summer ☀️`', () => {
    const summerSeason = data.seasons.summer;
    render(<SeasonCard season={summerSeason} />);
    expect(screen.getByText('Summer ☀️')).toBeInTheDocument();
  });

  // Test case
  it('renders a text `Since 7 days ago`', () => {
    const summerSeason = data.seasons.summer;
    render(<SeasonCard season={summerSeason} />);
    expect(screen.getByText('Since 7 days ago')).toBeInTheDocument();
  });

  // Test case
  it('renders a button with label `And after ?`', () => {
    const summerSeason = data.seasons.summer;
    render(<SeasonCard season={summerSeason} />);
    expect(
      screen.getByRole('button', { name: 'And after ?' })
    ).toBeInTheDocument();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
