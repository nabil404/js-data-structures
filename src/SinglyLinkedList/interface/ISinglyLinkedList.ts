import { UniDirLink } from "../../helpers/UniDirLink";

export interface ISinglyLinkedList<T> {
  toArray(): T[];
  push(value: T): UniDirLink<T>;
  pop(): UniDirLink<T>;
  shift(): UniDirLink<T>;
  unshift(value: T): UniDirLink<T>;
  get(index: number): UniDirLink<T>;
  set(index: number, value: any): boolean;
  insert(index: number, value: T): boolean;
  remove(index: number): boolean;
}
