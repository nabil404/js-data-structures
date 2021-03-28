import { BiDirLink as Link } from "../helpers/BiDirLink";
export declare class DoublyLinkedList<T> {
    private _head;
    private _tail;
    private _length;
    private _isEmpty;
    constructor(data?: T[]);
    get length(): number;
    toArray(): T[];
    push(value: T): Link<T>;
    pop(): Link<T>;
    shift(): Link<T>;
    unshift(value: T): Link<T>;
}
//# sourceMappingURL=index.d.ts.map