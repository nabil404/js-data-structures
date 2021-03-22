export class UniDirLink<T> {
  public data: T;
  public next: UniDirLink<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
