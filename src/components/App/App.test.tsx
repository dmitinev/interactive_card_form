import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByTestId('app');
    expect(linkElement).not.toBe(null);
  });
});
