import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion, AccordionHeader } from '../../atoms/accordion';
import AccordionGroup from './AccordionGroup';

describe('AccordionGroup general behavior', () => {
  test('renders without crashing', () => {
    render(<AccordionGroup>{}</AccordionGroup>);
  });

  test('all accordions are closed by default', () => {
    render(
      <AccordionGroup>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
      </AccordionGroup>
    );

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(3);
    buttons.forEach((button) =>
      expect(button).toHaveAttribute('aria-expanded', 'false')
    );
  });

  test('initial open accordion is open when specified', () => {
    render(
      <AccordionGroup initial={1}>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
      </AccordionGroup>
    );

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'false');
  });

  test('only one accordion is open at the time', () => {
    render(
      <AccordionGroup>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
      </AccordionGroup>
    );

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'false');

    act(() => userEvent.click(buttons[2]));
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'true');

    act(() => userEvent.click(buttons[0]));
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'false');

    act(() => userEvent.click(buttons[1]));
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'false');

    act(() => userEvent.click(buttons[1]));
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'false');
  });

  test('onClick is called with index of clicked button and requested new state', () => {
    const mock = jest.fn();
    const { rerender } = render(
      <AccordionGroup onClick={mock} open={-1}>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
      </AccordionGroup>
    );

    const buttons = screen.getAllByRole('button');

    expect(mock).not.toHaveBeenCalled();

    userEvent.click(buttons[1]);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock.mock.calls[0][1]).toBe(1);
    expect(mock.mock.calls[0][2]).toBe(true);

    rerender(
      <AccordionGroup onClick={mock} open={1}>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
      </AccordionGroup>
    );

    userEvent.click(buttons[1]);
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock.mock.calls[1][1]).toBe(1);
    expect(mock.mock.calls[1][2]).toBe(false);
  });

  test('onClick is suppressed when onClick handler is supplied but open is not', () => {
    const original = global.console.warn;
    global.console.warn = jest.fn();

    const mock = jest.fn();
    render(
      <AccordionGroup onClick={mock}>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
      </AccordionGroup>
    );

    const buttons = screen.getAllByRole('button');

    expect(mock).not.toHaveBeenCalled();
    userEvent.click(buttons[1]);
    expect(mock).not.toHaveBeenCalled();

    global.console.warn = original;
  });

  test('invalid childrens are ignored', () => {
    const original = global.console.warn;
    global.console.warn = jest.fn();

    render(
      <AccordionGroup>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <p data-testid="test-container">fsjks</p>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
        <Accordion>
          <AccordionHeader></AccordionHeader>
        </Accordion>
      </AccordionGroup>
    );

    const testContainer = screen.queryByTestId('test-container');
    expect(testContainer).toBeNull();

    global.console.warn = original;
  });
});
