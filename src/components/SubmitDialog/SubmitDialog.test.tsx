import { render, screen } from '@testing-library/react';

import { SubmitDialog } from './SubmitDialog';

describe('SubmitDialog', () => {
  it('renders SubmitDialog component', () => {
    render(<SubmitDialog />);
    const submitHeading = screen.getByText('THANK YOU!');
    const submitText = screen.getByText('We’ve added your card details');
    const submitButton = screen.getByText('Continue');
    const successLogo = screen.getByAltText('success logo');
    expect(submitHeading).toBeInTheDocument();
    expect(submitText).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(successLogo).toBeInTheDocument();
  });
});
