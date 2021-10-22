import { render, screen, waitFor } from '@testing-library/react';
import { Backdrop } from '.';

describe('Backdrop general behavior', () => {
  test('renders without crashing', () => {
    render(<Backdrop />);
  });

  test('renders when "visible" is "true"', async () => {
    const { rerender } = render(
      <Backdrop data-testid="test-element" visible />
    );

    const backdrop = screen.getByTestId('test-element');
    expect(backdrop).toBeInTheDocument();
    rerender(<Backdrop data-testid="test-element" />);
    await waitFor(() => expect(backdrop).not.toBeInTheDocument());
  });
});
