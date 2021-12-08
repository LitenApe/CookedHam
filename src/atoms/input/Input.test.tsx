import { render, screen } from '@testing-library/react';

import { Field } from '../field';
import { Input } from '.';

describe('Input default behavior', () => {
  test('renders without crashing', () => {
    render(<Input />);
  });

  test('renders as "input" by default', () => {
    render(<Input />);
    const element = screen.getByRole('textbox');
    expect(element.nodeName).toBe('INPUT');
  });

  test('renders as "textarea" when specified', () => {
    render(<Input as="textarea" />);
    const element = screen.getByRole('textbox');
    expect(element.nodeName).toBe('TEXTAREA');
  });

  test('has type "text" by default', () => {
    render(<Input />);
    const element = screen.getByRole('textbox');
    expect(element).toHaveAttribute('type', 'text');
  });

  test('has no type if rendered as textarea', () => {
    render(<Input as="textarea" />);
    const element = screen.getByRole('textbox');
    expect(element).not.toHaveAttribute('type');
  });

  test('has type "tel" when specified', () => {
    render(<Input type="tel" />);
    const element = screen.getByRole('textbox');
    expect(element).toHaveAttribute('type', 'tel');
  });

  test('prefix is related to input', () => {
    render(<Input prefix="😁" />);
    const element = screen.getByRole('textbox');
    const prefixId = element.getAttribute('aria-describedby');
    const prefix = screen.queryByText('😁');

    expect(prefix).toHaveAttribute('id', prefixId);
  });

  test('postfix is related to input', () => {
    render(<Input postfix="😁" />);
    const element = screen.getByRole('textbox');
    const postfixId = element.getAttribute('aria-describedby');
    const postfix = screen.queryByText('😁');

    expect(postfix).toHaveAttribute('id', postfixId);
  });

  test('has "id" when wrapped by "Field"', () => {
    render(
      <Field>
        <Input />
      </Field>
    );
    const element = screen.getByRole('textbox');
    expect(element).toHaveAttribute('id');
  });

  test('prefix on Field is passed down to Input', () => {
    render(
      <Field prefix="😁">
        <Input />
      </Field>
    );

    const element = screen.getByRole('textbox');
    const prefixId = element.getAttribute('aria-describedby');
    const prefix = screen.queryByText('😁');

    expect(prefix).toHaveAttribute('id', prefixId);
  });

  test('postfix on Field is passed down to Input', () => {
    render(
      <Field postfix="😁">
        <Input />
      </Field>
    );

    const element = screen.getByRole('textbox');
    const postfixId = element.getAttribute('aria-describedby');
    const postfix = screen.queryByText('😁');

    expect(postfix).toHaveAttribute('id', postfixId);
  });
});
