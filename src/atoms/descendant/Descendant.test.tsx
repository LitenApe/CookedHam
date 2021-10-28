import { act, render, screen, waitFor } from '@testing-library/react';
import { createRef } from 'react';
import { Descendant, useDescendant } from '.';
import { useMount } from '../../utils/hooks/useMount';
import { DescendantManager } from './bones/DescendantManager';

describe('Descendant default behavior', () => {
  describe('DescendantManager', () => {
    test('initiates without crashing', () => {
      new DescendantManager();
    });

    test('registered node has an index', () => {
      const ref = createRef<HTMLParagraphElement>();
      render(<p ref={ref}></p>);
      const manager = new DescendantManager();

      manager.register(ref.current);
      const index = manager.getIndex(ref.current);

      expect(index).toBe(0);
    });

    test('not registered node has -1 as index', () => {
      const ref = createRef<HTMLParagraphElement>();
      render(<p ref={ref}></p>);
      const manager = new DescendantManager();

      const index = manager.getIndex(ref.current);

      expect(index).toBe(-1);
    });

    test('unregistered node loses index', () => {
      const ref = createRef<HTMLParagraphElement>();
      render(<p ref={ref}></p>);
      const manager = new DescendantManager();

      manager.register(ref.current);
      const initialIndex = manager.getIndex(ref.current);

      expect(initialIndex).toBe(0);

      manager.unregister(ref.current);
      const finalIndex = manager.getIndex(ref.current);

      expect(finalIndex).toBe(-1);
    });

    test('getIndex returns -1 on null', () => {
      const manager = new DescendantManager();
      expect(manager.getIndex(null)).toBe(-1);
    });

    test('nothing happens when sending null as argument to register', () => {
      const manager = new DescendantManager();
      expect(manager.getIndex(null)).toBe(-1);

      manager.register(null);

      expect(manager.getIndex(null)).toBe(-1);
    });

    test('nothing happens when sending null as argument to unregister', () => {
      const manager = new DescendantManager();
      expect(manager.getIndex(null)).toBe(-1);

      manager.unregister(null);

      expect(manager.getIndex(null)).toBe(-1);
    });
  });

  describe('Descendant', () => {
    function TestComponent({ id }: { id: number }) {
      const ref = createRef<HTMLParagraphElement>();
      const { index, register } = useDescendant();

      useMount(() => {
        register(ref.current);
      });

      return (
        <p ref={ref} data-id={index} data-testid={`test-component-${id}`}>
          index {`${index}`}
        </p>
      );
    }

    test('renders without crashing', () => {
      render(<Descendant></Descendant>);
    });

    test('assign consumer an id', () => {
      render(
        <Descendant>
          <TestComponent id={1} />
        </Descendant>
      );

      const container = screen.getByTestId('test-component-1');
      expect(container).toHaveAttribute('data-id', '0');
    });

    test("consumers are assigned id's in ascending order", () => {
      render(
        <Descendant>
          <TestComponent id={1} />
          <div>
            <TestComponent id={2} />
          </div>
          <div>
            <div>
              <TestComponent id={3} />
            </div>
          </div>
          <TestComponent id={4} />
        </Descendant>
      );

      const first = screen.getByTestId('test-component-1');
      expect(first).toHaveAttribute('data-id', '0');

      const second = screen.getByTestId('test-component-2');
      expect(second).toHaveAttribute('data-id', '1');

      const third = screen.getByTestId('test-component-3');
      expect(third).toHaveAttribute('data-id', '2');

      const fourth = screen.getByTestId('test-component-4');
      expect(fourth).toHaveAttribute('data-id', '3');
    });

    test('throws error if not wrapped by Descendant', () => {
      const original = global.console.error;
      global.console.error = jest.fn();
      function renderComponent() {
        render(<TestComponent id={0} />);
      }

      expect(renderComponent).toThrowError();
      global.console.error = original;
    });
  });
});
