import { render, screen } from '@testing-library/react';

import { CardImage } from './CardImage';

describe('CardImage', () => {
  it('renders CardImage component with image url prop', () => {
    const url = 'https://www.example.com/image.png';
    render(<CardImage url={url} />);
    const imageElement = screen.getByAltText('credit card');
    expect(imageElement).toHaveAttribute('src', url);
    expect(imageElement).toHaveAttribute('alt', 'credit card');
  });
});

