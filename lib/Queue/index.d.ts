import { IQueue } from "./interface";
export declare class Queue<T> implements IQueue<T> {
    private _first;
    private _last;
    private _length;
    constructor(data?: T[]);
    get length(): number;
    toArray(): T[];
    enqueue(value: T): Queue<T>;
    dequeue(): T | null;
}
//# sourceMappingURL=index.d.ts.map