import { ISinglyLinkedList } from "./interface/ISinglyLinkedList";
import { UniDirLink as Link } from "../helpers/UniDirLink";
export * from "./interface";
export declare class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
    private _head;
    private _tail;
    private _length;
    constructor(data?: T[]);
    toArray(): T[];
    get length(): number;
    push(value: T): SinglyLinkedList<T>;
    pop(): Link<T> | null;
    shift(): Link<T> | null;
    unshift(value: T): SinglyLinkedList<T>;
    get(index: number): Link<T> | null;
    set(index: number, value: T): boolean;
    insert(index: number, value: T): boolean;
    remove(index: number): boolean;
    reverse(): SinglyLinkedList<T>;
}
//# sourceMappingURL=index.d.ts.map