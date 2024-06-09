import { render, screen } from '@testing-library/react';

import { CardImage } from './CardImage';

jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
  useFormikContext: jest.fn(() => ({
    values: {
      cardNumber: '1234567891234567',
      cardholderName: 'Jane Appleseed',
      expireDateMonth: '12',
      expireDateYear: '23',
      cardCvc: '123',
    },
  })),
}));

describe('CardImage', () => {
  it('renders CardImage component with image url prop', () => {
    const url = 'https://www.example.com/image.png';
    render(<CardImage url={url} />);

    const imageElement = screen.getByAltText('credit card');
    expect(imageElement).toHaveAttribute('src', url);
    expect(imageElement).toHaveAttribute('alt', 'credit card');
  });
});
