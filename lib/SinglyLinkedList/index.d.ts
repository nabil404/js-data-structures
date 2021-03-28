import { ISinglyLinkedList } from "./interface/ISinglyLinkedList";
import { UniDirLink as Link } from "../helpers/UniDirLink";
export declare class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
    private _head;
    private _tail;
    private _length;
    private _isEmpty;
    constructor(data?: T[]);
    toArray(): T[];
    get length(): number;
    push(value: T): Link<T>;
    pop(): Link<T>;
    shift(): Link<T>;
    unshift(value: T): Link<T>;
    get(index: number): Link<T>;
    set(index: number, value: T): boolean;
    insert(index: number, value: T): boolean;
    remove(index: number): boolean;
    reverse(): SinglyLinkedList<T>;
}
//# sourceMappingURL=index.d.ts.map