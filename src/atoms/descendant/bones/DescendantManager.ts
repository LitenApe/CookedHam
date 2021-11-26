import { isNull } from '../../../utils/functions/isNull';
import { isUndefined } from '../../../utils/functions/isUndefined';
import { getNextIndex, getPreviousIndex, sortNodes } from './utils';

export class DescendantManager {
  private descendant = new Map<HTMLElement, number>();

  register(node: HTMLElement | null): void {
    if (isNull(node)) {
      return;
    }

    this.descendant.set(node, -1);

    const keys = Array.from(this.descendant.keys());
    const sorted = sortNodes(keys);
    sorted.forEach((node, index) => this.descendant.set(node, index));
  }

  unregister(node: HTMLElement | null): void {
    if (isNull(node)) {
      return;
    }

    this.descendant.delete(node);
  }

  getIndex(node: HTMLElement | null): number {
    if (isNull(node)) {
      return -1;
    }

    const position = this.descendant.get(node);
    return isUndefined(position) ? -1 : position;
  }

  values(): Array<[HTMLElement, number]> {
    const entries = Array.from(this.descendant);
    return entries.sort((a, b) => a[1] - b[1]);
  }

  item(index: number): HTMLElement | undefined {
    if (this.descendant.size < index) {
      return undefined;
    }
    return this.values()[index][0];
  }

  next(index: number, loop: boolean = true): HTMLElement | undefined {
    const next = getNextIndex(index, this.descendant.size, loop);
    return this.item(next);
  }

  prev(index: number, loop: boolean = true): HTMLElement | undefined {
    const prev = getPreviousIndex(index, this.descendant.size, loop);
    return this.item(prev);
  }
}
