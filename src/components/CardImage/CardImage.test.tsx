import { render, screen } from '@testing-library/react';
import cardLogo from '../../assets/card-logo.svg';
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
    render(<CardImage url={cardLogo} />);
    const cardNumberElement = screen.getByText(/1234 5678 9123 4567/i);
    const cardName = screen.getByText(/jane appleseed/i);
    const cardDate = screen.getByText(/12\/23/i);
    const imageElement = screen.getByAltText('credit card');
    expect(imageElement).toHaveAttribute('alt', 'credit card');
    expect(cardNumberElement).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
    expect(cardDate).toBeInTheDocument();
  });
});
