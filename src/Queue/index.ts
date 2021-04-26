import { UniDirLink as Link } from "../helpers/UniDirLink";
import { IQueue } from "./interface";

export class Queue<T> implements IQueue<T> {
  private _first: Link<T> | null;
  private _last: Link<T> | null;
  private _length: number;

  constructor(data?: T[]) {
    this._first = null;
    this._last = null;
    this._length = 0;
    if (data?.length) {
      for (let el of data) {
        this.enqueue(el);
      }
    }
  }

  get length(): number {
    return this._length;
  }

  toArray(): T[] {
    let array: T[] = [];
    let current = this._first;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  enqueue(value: T): Queue<T> {
    const newNode = new Link<T>(value);
    if (!this._first) {
      this._first = newNode;
      this._last = newNode;
    } else {
      this._last!.next = newNode;
      this._last = newNode;
    }
    this._length++;
    return this;
  }

  dequeue(): T | null {
    if (!this._first) return null;
    const dequeuedNode = this._first;
    this._first = this._first.next;
    if (this._first === this._last) {
      this._last = null;
    }
    this._length--;
    return dequeuedNode.data;
  }
}
