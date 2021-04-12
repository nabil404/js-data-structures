"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
var UniDirLink_1 = require("../helpers/UniDirLink");
__exportStar(require("./interface"), exports);
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
        return this;
    };
    SinglyLinkedList.prototype.pop = function () {
        if (this._length < 1)
            return null;
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
        if (this._length < 1)
            return null;
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
            return this;
        }
        newNode.next = this._head;
        this._head = newNode;
        this._length++;
        return this;
    };
    SinglyLinkedList.prototype.get = function (index) {
        if (index >= this._length || index < 0)
            return null;
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
            return false;
        var node = this.get(index);
        node.data = value;
        return true;
    };
    SinglyLinkedList.prototype.insert = function (index, value) {
        if (index > this._length || index < 0)
            return false;
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
    SinglyLinkedList.prototype.reverse = function () {
        if (this._length <= 1)
            return this;
        var node = this._head;
        this._head = this._tail;
        this._tail = node;
        var prev = null;
        var next;
        for (var i = 0; i < this._length; i++) {
            next = node === null || node === void 0 ? void 0 : node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    };
    return SinglyLinkedList;
}());
exports.SinglyLinkedList = SinglyLinkedList;
//# sourceMappingURL=index.js.map