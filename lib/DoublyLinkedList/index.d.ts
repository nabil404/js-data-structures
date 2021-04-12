import { BiDirLink as Link } from "../helpers/BiDirLink";
import { IDoublyLinkedList } from "./interface";
export declare class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
    private _head;
    private _tail;
    private _length;
    constructor(data?: T[]);
    get length(): number;
    toArray(): T[];
    push(value: T): Link<T>;
    pop(): Link<T> | null;
    shift(): Link<T> | null;
    unshift(value: T): Link<T>;
    get(index: number): Link<T> | null;
    set(index: number, value: T): boolean;
    insert(index: number, value: T): boolean;
    remove(index: number): boolean;
    reverse(): DoublyLinkedList<T>;
}
//# sourceMappingURL=index.d.ts.map