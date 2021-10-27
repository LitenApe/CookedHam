import { isNull } from '../../../utils/functions/isNull';
import { isUndefined } from '../../../utils/functions/isUndefined';
import { sortNodes } from './utils';

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
}
