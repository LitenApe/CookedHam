import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from '.';
import { AccordionContext } from './Accordion';

describe('Accordion general behavior', () => {
  describe('Accordion main wrapping component', () => {
    test('renders without crashing', () => {
      render(<Accordion></Accordion>);
    });

    test('open is "false" by default', () => {
      render(
        <Accordion>
          <AccordionContext.Consumer>
            {(value) => <p data-testid="test-container">{`${value?.open}`}</p>}
          </AccordionContext.Consumer>
        </Accordion>
      );

      const container = screen.getByTestId('test-container');
      expect(container).toHaveTextContent('false');
    });

    test('initial sets initial open state', () => {
      render(
        <Accordion initial={true}>
          <AccordionContext.Consumer>
            {(value) => <p data-testid="test-container">{`${value?.open}`}</p>}
          </AccordionContext.Consumer>
        </Accordion>
      );

      const container = screen.getByTestId('test-container');
      expect(container).toHaveTextContent('true');
    });

    test('onClick toggles open state', () => {
      render(
        <Accordion>
          <AccordionContext.Consumer>
            {(value) => (
              <button onClick={value?.onClick}>{`${value?.open}`}</button>
            )}
          </AccordionContext.Consumer>
        </Accordion>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('false');

      userEvent.click(button);
      expect(button).toHaveTextContent('true');

      userEvent.click(button);
      expect(button).toHaveTextContent('false');
    });

    test('onClick prop is invoked with requested open state', () => {
      const mock = jest.fn();
      const { rerender } = render(
        <Accordion open={false} onClick={mock}>
          <AccordionContext.Consumer>
            {(value) => (
              <button onClick={value?.onClick}>{`${value?.open}`}</button>
            )}
          </AccordionContext.Consumer>
        </Accordion>
      );

      expect(mock).not.toHaveBeenCalled();
      const button = screen.getByRole('button');

      userEvent.click(button);
      expect(mock).toBeCalledTimes(1);
      expect(mock.mock.calls[0][1]).toBe(true);

      rerender(
        <Accordion open={true} onClick={mock}>
          <AccordionContext.Consumer>
            {(value) => (
              <button onClick={value?.onClick}>{`${value?.open}`}</button>
            )}
          </AccordionContext.Consumer>
        </Accordion>
      );

      userEvent.click(button);
      expect(mock).toBeCalledTimes(2);
      expect(mock.mock.calls[1][1]).toBe(false);
    });

    test('Accordion context provides an id', () => {
      render(
        <Accordion>
          <AccordionContext.Consumer>
            {(value) => <p data-testid="test-container">{`${value?.id}`}</p>}
          </AccordionContext.Consumer>
        </Accordion>
      );

      const container = screen.getByTestId('test-container');
      expect(container).toHaveTextContent(/accordion-\d+/);
    });
  });

  describe('Accordion Header general behavior', () => {
    test('renders without crashing', () => {
      render(
        <Accordion>
          <Accordion.Header>content</Accordion.Header>
        </Accordion>
      );
    });

    test('renders with aria-attributes', () => {
      render(
        <Accordion>
          <Accordion.Header>content</Accordion.Header>
          <AccordionContext.Consumer>
            {(value) => <p data-testid="test-container">{`${value?.id}`}</p>}
          </AccordionContext.Consumer>
        </Accordion>
      );

      const id = screen.getByTestId('test-container').innerHTML;
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('id', `${id}_button`);
      expect(button).toHaveAttribute('aria-controls', `${id}_content`);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    test('toggles open state on click', () => {
      render(
        <Accordion>
          <Accordion.Header>content</Accordion.Header>
        </Accordion>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');

      userEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');

      userEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Accordion Panel general behavior', () => {
    test('renders without crashing', () => {
      render(
        <Accordion>
          <Accordion.Panel></Accordion.Panel>
        </Accordion>
      );
    });

    test('renders with aria-attributes', () => {
      render(
        <Accordion>
          <Accordion.Panel data-testid="accordion-panel"></Accordion.Panel>
          <AccordionContext.Consumer>
            {(value) => (
              <>
                <p data-testid="test-id-container">{value?.id}</p>
                <p data-testid="test-state-container">{`${value?.open}`}</p>
              </>
            )}
          </AccordionContext.Consumer>
        </Accordion>
      );

      const panel = screen.getByTestId('accordion-panel');
      const id = screen.getByTestId('test-id-container').innerHTML;
      const open = screen.getByTestId('test-state-container');

      expect(panel).toHaveAttribute('id', `${id}_content`);
      expect(panel).toHaveAttribute('aria-labelledby', `${id}_button`);
      expect(panel).toHaveAttribute(
        'aria-hidden',
        open.innerHTML === 'true' ? 'false' : 'true'
      );
    });

    test('aria-hidden value is determined by open state', () => {
      const { rerender } = render(
        <Accordion open={false}>
          <Accordion.Panel data-testid="accordion-panel"></Accordion.Panel>
        </Accordion>
      );

      const panel = screen.getByTestId('accordion-panel');

      expect(panel).toHaveAttribute('aria-hidden', 'true');

      rerender(
        <Accordion open={true}>
          <Accordion.Panel data-testid="accordion-panel"></Accordion.Panel>
        </Accordion>
      );

      expect(panel).toHaveAttribute('aria-hidden', 'false');
    });
  });
});
