import { BiDirLink } from "../../helpers";
import { DoublyLinkedList } from "..";

export interface IDoublyLinkedList<T> {
  toArray(): T[];
  push(value: T): DoublyLinkedList<T>;
  pop(): BiDirLink<T> | null;
  shift(): BiDirLink<T> | null;
  unshift(value: T): DoublyLinkedList<T>;
  get(index: number): BiDirLink<T> | null;
  set(index: number, value: any): boolean;
  insert(index: number, value: T): boolean;
  remove(index: number): boolean;
  reverse(): DoublyLinkedList<T>;
}
