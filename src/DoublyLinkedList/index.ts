import { BiDirLink as Link } from "../helpers/BiDirLink";

export class DoublyLinkedList<T> {
  private _head: Link<T> | null;
  private _tail: Link<T> | null;
  private _length: number;
  private _isEmpty(): void {
    if (this._length < 1) throw new Error("List is empty");
  }

  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }
}
