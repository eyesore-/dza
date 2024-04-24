type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class SLinkedList<T> {
  public length: number;

  constructor() {}

  append(item: T): void {}
  prepend(item: T): void {}
  get(i: number): T | undefined {}
  remove(i: number): T | undefined {}
  peek(): T | undefined {}
}
