import { UniDirLink as Link } from "../helpers";
import { IStack } from "./interface";

export class Stack<T> implements IStack<T> {
  private _first: Link<T> | null;
  private _length: number;

  constructor(data?: T[]) {
    this._first = null;
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
    let current = this._first;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  push(value: T): Stack<T> {
    const newNode = new Link<T>(value);
    if (!this._first) {
      this._first = newNode;
    } else {
      const temp = this._first;
      this._first = newNode;
      this._first.next = temp;
    }
    this._length++;
    return this;
  }

  pop(): T | null {
    if (!this._first) return null;
    const poppedNode = this._first;
    this._first = this._first.next;
    this._length--;
    return poppedNode.data;
  }
}
