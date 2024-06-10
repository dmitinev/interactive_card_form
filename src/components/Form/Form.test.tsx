import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormikForm as Form } from './Form';

jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
}));

describe('Form', () => {
  it('renders Form component', () => {
    render(<Form />);
    const formHeader = screen.getByRole('banner');
    const formFields = screen.getByTestId('formFields');

    expect(formHeader).toBeInTheDocument();
    expect(formFields).toBeInTheDocument();
  });
  it('form fields shows values after typing', async () => {
    render(<Form />);
    const cardholderNameField = screen.getByRole('textbox', {
      name: /cardholder's name/i,
    });
    const cardNumberField = screen.getByRole('textbox', {
      name: /card number/i,
    });
    const expireDateMonthField = screen.getByRole('textbox', {
      name: /exp\. date/i,
    });
    const expireDateYearField = screen.getByRole('textbox', {
      name: /\(mm\/yy\)/i,
    });
    const cvcField = screen.getByRole('textbox', { name: /cvc/i });

    await userEvent.type(cardholderNameField, 'John Doe');
    await userEvent.type(cardNumberField, '1234567812321234');
    await userEvent.type(expireDateMonthField, '12');
    await userEvent.type(expireDateYearField, '23');
    await userEvent.type(cvcField, '123');

    expect(cardholderNameField).toHaveValue('John Doe');
    expect(cardNumberField).toHaveValue('1234567812321234');
    expect(expireDateMonthField).toHaveValue('12');
    expect(expireDateYearField).toHaveValue('23');
    expect(cvcField).toHaveValue('123');
  });

  it('submits the form successfully', async () => {
    render(<Form />);
    const cardholderNameField = screen.getByRole('textbox', {
      name: /cardholder's name/i,
    });
    const cardNumberField = screen.getByRole('textbox', {
      name: /card number/i,
    });
    const expireDateMonthField = screen.getByRole('textbox', {
      name: /exp\. date/i,
    });
    const expireDateYearField = screen.getByRole('textbox', {
      name: /\(mm\/yy\)/i,
    });
    const cvcField = screen.getByRole('textbox', { name: /cvc/i });
    const submitButton = screen.getByRole('button', { name: /confirm/i });

    await userEvent.type(cardholderNameField, 'John Doe');
    await userEvent.type(cardNumberField, '1234567812321234');
    await userEvent.type(expireDateMonthField, '12');
    await userEvent.type(expireDateYearField, '23');
    await userEvent.type(cvcField, '123');
    userEvent.click(submitButton);

    const submitDialog = await screen.findByAltText(/success logo/i);
    const successText = screen.getByText(/THANK YOU!/i);
    expect(submitDialog).toBeInTheDocument();
    expect(successText).toBeInTheDocument();
  });
});
