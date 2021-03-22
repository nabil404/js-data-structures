"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
var UniDirLink_1 = require("../helpers/UniDirLink");
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList(data) {
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
    SinglyLinkedList.prototype._isEmpty = function () {
        if (this._length < 1)
            throw new Error("List is empty");
    };
    SinglyLinkedList.prototype.toArray = function () {
        var array = [];
        var current = this._head;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    };
    Object.defineProperty(SinglyLinkedList.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    SinglyLinkedList.prototype.push = function (value) {
        var newNode = new UniDirLink_1.UniDirLink(value);
        if (!this._head) {
            this._head = newNode;
            this._tail = this._head;
        }
        else {
            this._tail.next = newNode;
            this._tail = newNode;
        }
        this._length++;
        return newNode;
    };
    SinglyLinkedList.prototype.pop = function () {
        this._isEmpty();
        var current = this._head;
        var temp = current;
        while (current === null || current === void 0 ? void 0 : current.next) {
            temp = current;
            current = current.next;
        }
        this._tail = temp;
        this._tail.next = null;
        this._length--;
        if (this._length === 0) {
            this._head = this._tail = null;
        }
        return current;
    };
    SinglyLinkedList.prototype.shift = function () {
        this._isEmpty();
        var currrent = this._head;
        this._head = this._head.next;
        this._length--;
        if (this._length === 0) {
            this._head = this._tail = null;
        }
        return currrent;
    };
    SinglyLinkedList.prototype.unshift = function (value) {
        var newNode = new UniDirLink_1.UniDirLink(value);
        if (this._length < 1) {
            this._head = newNode;
            this._tail = this._head;
            this._length++;
            return newNode;
        }
        newNode.next = this._head;
        this._head = newNode;
        this._length++;
        return newNode;
    };
    SinglyLinkedList.prototype.get = function (index) {
        if (index >= this._length || index < 0)
            throw new Error("Invalid index");
        var counter = 0;
        var current = this._head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    };
    SinglyLinkedList.prototype.set = function (index, value) {
        if (index >= this._length || index < 0)
            throw new Error("Invalid index");
        var counter = 0;
        var current = this._head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        current.data = value;
        return true;
    };
    SinglyLinkedList.prototype.insert = function (index, value) {
        if (index > this._length || index < 0)
            throw new Error("Invalid index");
        if (index === this._length)
            return !!this.push(value);
        if (index === 0)
            return !!this.unshift(value);
        var newNode = new UniDirLink_1.UniDirLink(value);
        var prev = this.get(index - 1);
        if (prev) {
            var temp = prev.next;
            prev.next = newNode;
            newNode.next = temp;
            this._length++;
        }
        return true;
    };
    SinglyLinkedList.prototype.remove = function (index) {
        if (index > this._length || index < 0)
            throw new Error("Invalid index");
        if (index === this._length - 1)
            return !!this.pop();
        if (index === 0)
            return !!this.shift();
        var prev = this.get(index - 1);
        if (prev) {
            var temp = prev.next;
            prev.next = temp.next;
            this._length--;
        }
        return true;
    };
    return SinglyLinkedList;
}());
exports.SinglyLinkedList = SinglyLinkedList;
//# sourceMappingURL=index.js.map