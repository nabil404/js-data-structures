import { BiTreeNode as Link } from "../helpers";

export class BinarySearchTree<T> {
  private _root: Link<T> | null;
  constructor() {
    this._root = null;
  }

  insert(value: T): BinarySearchTree<T> | null {
    const newNode = new Link<T>(value);
    if (!this._root) {
      this._root = newNode;
      return this;
    }
    let current = this._root;
    while (true) {
      if (value === current.data) return null;
      if (value < current.data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.data) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value: T): boolean {
    if (!this._root) return false;
    let current = this._root;
    let found = false;
    while (current && !found) {
      if (value < current.data) {
        current = current.left!;
      } else if (value > current.data) {
        current = current.right!;
      } else {
        found = true;
      }
    }
    return found;
  }
}
