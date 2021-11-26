import { render, screen } from '@testing-library/react';
import { BaseField } from '.';
import { Input } from '../../atoms/input';
import { Label } from '../../atoms/label';

describe('BaseField default behavior', () => {
  test('renders without crashing', () => {
    render(
      <BaseField>
        <Label>Some label</Label>
        <Input />
      </BaseField>
    );
  });

  test('dont render alert unless error is sent inn', () => {
    const { rerender, container } = render(
      <BaseField>
        <Label>Some label</Label>
        <Input />
      </BaseField>
    );

    const errorNotMounted = container.querySelector('[aria-live="assertive"]');
    expect(errorNotMounted).toBeNull();

    rerender(
      <BaseField error="some error">
        <Label>Some label</Label>
        <Input />
      </BaseField>
    );

    const errorMounted = container.querySelector('[aria-live="assertive"]');
    expect(errorMounted).not.toBeNull();
  });

  test('input is invalid if error is sent in', () => {
    render(
      <BaseField error="some error">
        <Label>Some label</Label>
        <Input />
      </BaseField>
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  test('has aria-describedby when error exist', () => {
    const { rerender, container } = render(
      <BaseField>
        <Label>Some label</Label>
        <Input />
      </BaseField>
    );

    const input = screen.getByRole('textbox');
    expect(input).not.toHaveAttribute('aria-describedby');

    rerender(
      <BaseField error="some error">
        <Label>Some label</Label>
        <Input />
      </BaseField>
    );

    const error = container.querySelector('[aria-live="assertive"]');
    expect(error).not.toBeNull();

    const errorId = (error as Element).getAttribute('id');
    expect(input).toHaveAttribute('aria-describedby', errorId);
  });
});
