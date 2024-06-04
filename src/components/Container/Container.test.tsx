import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
  it('renders Container with children', () => {
    render(
      <Container>
        <div data-testid="child"></div>
      </Container>,
    );
    const linkElement = screen.getByTestId('child');
    expect(linkElement).toBeInTheDocument();
  });
});

