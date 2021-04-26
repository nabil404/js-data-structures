"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
var helpers_1 = require("../helpers");
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this._root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new helpers_1.BiTreeNode(value);
        if (!this._root) {
            this._root = newNode;
            return this;
        }
        var current = this._root;
        while (true) {
            if (value === current.data)
                return null;
            if (value < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else if (value > current.data) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    };
    BinarySearchTree.prototype.find = function (value) {
        if (!this._root)
            return false;
        var current = this._root;
        var found = false;
        while (current && !found) {
            if (value < current.data) {
                current = current.left;
            }
            else if (value > current.data) {
                current = current.right;
            }
            else {
                found = true;
            }
        }
        return found;
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
//# sourceMappingURL=index.js.map