import { ISinglyLinkedList } from "./interface/ISinglyLinkedList";
import { UniDirLink as Link } from "../helpers/UniDirLink";

export * from "./interface";

export class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
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

  toArray(): T[] {
    let array: T[] = [];
    let current = this._head;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  get length(): number {
    return this._length;
  }

  push(value: T): Link<T> {
    const newNode: Link<T> = new Link<T>(value);
    if (!this._head) {
      this._head = newNode;
      this._tail = this._head;
    } else {
      this._tail!.next = newNode;
      this._tail = newNode;
    }
    this._length++;
    return newNode;
  }

  pop(): Link<T> | null {
    if (this._length < 1) return null;
    let current = this._head;
    let temp = current;
    while (current?.next) {
      temp = current;
      current = current.next;
    }
    this._tail = temp;
    this._tail!.next = null;
    this._length--;
    if (this._length === 0) {
      this._head = this._tail = null;
    }
    return current!;
  }

  shift(): Link<T> | null {
    if (this._length < 1) return null;
    let currrent = this._head;
    this._head = this._head!.next;
    this._length--;
    if (this._length === 0) {
      this._head = this._tail = null;
    }
    return currrent!;
  }

  unshift(value: T): Link<T> {
    const newNode: Link<T> = new Link<T>(value);
    if (this._length < 1) {
      this._head = newNode;
      this._tail = this._head;
      this._length++;
      return newNode;
    }
    newNode.next = this._head;
    this._head = newNode;
    this._length++;
    return newNode;
  }

  get(index: number): Link<T> | null {
    if (index >= this._length || index < 0) return null;
    let counter = 0;
    let current = this._head;
    while (counter !== index) {
      current = current!.next;
      counter++;
    }
    return current!;
  }

  set(index: number, value: T): boolean {
    if (index >= this._length || index < 0) return false;
    const node = this.get(index);
    node!.data = value;
    return true;
  }

  insert(index: number, value: T): boolean {
    if (index > this._length || index < 0) return false;
    if (index === this._length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Link<T>(value);
    const prev = this.get(index - 1);
    if (prev) {
      const temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this._length++;
    }
    return true;
  }

  remove(index: number): boolean {
    if (index > this._length || index < 0) throw new Error("Invalid index");
    if (index === this._length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    const prev = this.get(index - 1);
    if (prev) {
      const temp = prev.next;
      prev.next = temp!.next;
      this._length--;
    }
    return true;
  }

  reverse(): SinglyLinkedList<T> {
    if (this._length <= 1) return this;
    let node = this._head;
    this._head = this._tail;
    this._tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this._length; i++) {
      next = node?.next;
      node!.next = prev;
      prev = node;
      node = next!;
    }
    return this;
  }
}
