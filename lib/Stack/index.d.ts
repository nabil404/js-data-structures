import { IStack } from "./interface";
export declare class Stack<T> implements IStack<T> {
    private _first;
    private _length;
    constructor(data?: T[]);
    get length(): number;
    toArray(): T[];
    push(value: T): Stack<T>;
    pop(): T | null;
}
//# sourceMappingURL=index.d.ts.map