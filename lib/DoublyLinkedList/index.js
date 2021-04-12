"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
var BiDirLink_1 = require("../helpers/BiDirLink");
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(data) {
        this._head = null;
        this._tail = null;
        this._length = 0;
        if (data === null || data === void 0 ? void 0 : data.length) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var el = data_1[_i];
                this.push(el);
            }
        }
    }
    Object.defineProperty(DoublyLinkedList.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    DoublyLinkedList.prototype.toArray = function () {
        var array = [];
        var current = this._head;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    };
    DoublyLinkedList.prototype.push = function (value) {
        var newNode = new BiDirLink_1.BiDirLink(value);
        if (!this._head) {
            this._head = newNode;
            this._tail = this._head;
        }
        else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
        this._length++;
        return newNode;
    };
    DoublyLinkedList.prototype.pop = function () {
        if (this._length < 1)
            return null;
        var poppedNode = this._tail;
        if (this._length === 1) {
            this._head = null;
            this._tail = null;
        }
        else {
            this._tail = poppedNode.prev;
            this._tail.next = null;
            poppedNode.prev = null;
        }
        this._length--;
        return poppedNode;
    };
    DoublyLinkedList.prototype.shift = function () {
        if (this._length < 1)
            return null;
        var shiftedHead = this._head;
        if (this._length === 1) {
            this._head = this._tail = null;
        }
        else {
            this._head = shiftedHead.next;
            this._head.prev = null;
            shiftedHead.next = null;
        }
        this._length--;
        return shiftedHead;
    };
    DoublyLinkedList.prototype.unshift = function (value) {
        var newNode = new BiDirLink_1.BiDirLink(value);
        if (this._length === 0)
            return this.push(value);
        this._head.prev = newNode;
        newNode.next = this._head;
        this._head = newNode;
        this._length++;
        return newNode;
    };
    DoublyLinkedList.prototype.get = function (index) {
        if (index >= this._length || index < 0)
            return null;
        var count, current;
        if (index < this._length / 2) {
            count = 0;
            current = this._head;
            while (count != index) {
                current = current.next;
                count++;
            }
        }
        else {
            count = this._length - 1;
            current = this._tail;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    };
    DoublyLinkedList.prototype.set = function (index, value) {
        if (index >= this._length || index < 0)
            return false;
        var node = this.get(index);
        node.data = value;
        return true;
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
//# sourceMappingURL=index.js.map