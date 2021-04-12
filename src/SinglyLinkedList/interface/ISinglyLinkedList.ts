import { SinglyLinkedList } from "..";
import { UniDirLink } from "../../helpers";

export interface ISinglyLinkedList<T> {
  toArray(): T[];
  push(value: T): SinglyLinkedList<T>;
  pop(): UniDirLink<T> | null;
  shift(): UniDirLink<T> | null;
  unshift(value: T): SinglyLinkedList<T>;
  get(index: number): UniDirLink<T> | null;
  set(index: number, value: any): boolean;
  insert(index: number, value: T): boolean;
  remove(index: number): boolean;
  reverse(): SinglyLinkedList<T>;
}
