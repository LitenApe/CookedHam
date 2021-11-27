import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckboxField } from '.';

describe('CheckboxField default behaviour', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders without crashing', () => {
    render(<CheckboxField label="field" />);
  });

  test('label is associated with checkbox', () => {
    render(<CheckboxField label="field" />);
    const checkbox = screen.getByLabelText('field');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  test('onClick is invoked on click', () => {
    const mockFn = jest.fn();
    render(<CheckboxField label="field" onClick={mockFn} />);
    const checkbox = screen.getByLabelText('field');

    expect(mockFn).not.toHaveBeenCalled();
    userEvent.click(checkbox);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('error is associated with input', () => {
    const errorText = 'This is an error';
    render(<CheckboxField label="field" error={errorText} />);

    jest.runAllTimers();

    const checkbox = screen.getByLabelText('field');
    const error = checkbox.getAttribute('aria-describedby');
    const errorBox = screen.getByText(errorText);

    expect(error).toBe(errorBox.id);
  });
});
