import { BiDirLink as Link } from "../helpers/BiDirLink";

export class DoublyLinkedList<T> {
  private _head: Link<T> | null;
  private _tail: Link<T> | null;
  private _length: number;

  constructor(data?: T[]) {
    this._head = null;
    this._tail = null;
    this._length = 0;
    if (data?.length) {
      for (let el of data) {
        this.push(el);
      }
    }
  }

  get length(): number {
    return this._length;
  }

  toArray(): T[] {
    let array: T[] = [];
    let current = this._head;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  push(value: T): Link<T> {
    const newNode = new Link<T>(value);
    if (!this._head) {
      this._head = newNode;
      this._tail = this._head;
    } else {
      this._tail!.next = newNode;
      newNode.prev = this._tail;
      this._tail = newNode;
    }
    this._length++;
    return newNode;
  }

  pop(): Link<T> | null {
    if (this._length < 1) return null;
    const poppedNode = this._tail;
    if (this._length === 1) {
      this._head = null;
      this._tail = null;
    } else {
      this._tail = poppedNode!.prev;
      this._tail!.next = null;
      poppedNode!.prev = null;
    }
    this._length--;
    return poppedNode!;
  }

  shift(): Link<T> | null {
    if (this._length < 1) return null;
    const shiftedHead = this._head;
    if (this._length === 1) {
      this._head = this._tail = null;
    } else {
      this._head = shiftedHead!.next;
      this._head!.prev = null;
      shiftedHead!.next = null;
    }
    this._length--;
    return shiftedHead!;
  }

  unshift(value: T): Link<T> {
    const newNode = new Link<T>(value);
    if (this._length === 0) return this.push(value);
    this._head!.prev = newNode;
    newNode.next = this._head;
    this._head = newNode;
    this._length++;
    return newNode;
  }

  get(index: number): Link<T> | null {
    if (index >= this._length || index < 0) return null;
    let count, current;
    if (index < this._length / 2) {
      count = 0;
      current = this._head;
      while (count != index) {
        current = current!.next;
        count++;
      }
    } else {
      count = this._length - 1;
      current = this._tail;
      while (count != index) {
        current = current!.prev;
        count--;
      }
    }
    return current;
  }

  set(index: number, value: T): boolean {
    if (index >= this._length || index < 0) return false;
    const node = this.get(index);
    node!.data = value;
    return true;
  }
}
