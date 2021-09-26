import { render, screen } from '@testing-library/react';
import Legend from './Legend';

describe('Legend default behavior', () => {
  test('renders without crashing', () => {
    render(<Legend></Legend>);
  });

  test('renders children', () => {
    render(<Legend>text content</Legend>);
    screen.getByText('text content');
  });
});
