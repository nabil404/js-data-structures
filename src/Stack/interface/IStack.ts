import { Stack } from "..";

export interface IStack<T> {
  push(value: T): Stack<T>;
  pop(): T | null;
}
