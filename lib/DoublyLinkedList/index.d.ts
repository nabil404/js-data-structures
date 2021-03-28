import { BiDirLink as Link } from "../helpers/BiDirLink";
export declare class DoublyLinkedList<T> {
    private _head;
    private _tail;
    private _length;
    private _isEmpty;
    constructor(data?: T[]);
    get length(): number;
    push(value: T): Link<T>;
    pop(): Link<T>;
}
//# sourceMappingURL=index.d.ts.map