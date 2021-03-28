export class BiDirLink<T> {
  public data: T;
  public next: BiDirLink<T> | null;
  public prev: BiDirLink<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
