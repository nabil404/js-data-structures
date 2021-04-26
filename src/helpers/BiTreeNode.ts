export class BiTreeNode<T> {
  public left: BiTreeNode<T> | null;
  public right: BiTreeNode<T> | null;
  constructor(public data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
