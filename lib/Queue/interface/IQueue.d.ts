import { Queue } from "..";
export interface IQueue<T> {
    enqueue(value: T): Queue<T>;
    dequeue(): T | null;
}
//# sourceMappingURL=IQueue.d.ts.map