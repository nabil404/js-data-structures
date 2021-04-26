"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var UniDirLink_1 = require("../helpers/UniDirLink");
var Queue = /** @class */ (function () {
    function Queue(data) {
        this._first = null;
        this._last = null;
        this._length = 0;
        if (data === null || data === void 0 ? void 0 : data.length) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var el = data_1[_i];
                this.enqueue(el);
            }
        }
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.toArray = function () {
        var array = [];
        var current = this._first;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    };
    Queue.prototype.enqueue = function (value) {
        var newNode = new UniDirLink_1.UniDirLink(value);
        if (!this._first) {
            this._first = newNode;
            this._last = newNode;
        }
        else {
            this._last.next = newNode;
            this._last = newNode;
        }
        this._length++;
        return this;
    };
    Queue.prototype.dequeue = function () {
        if (!this._first)
            return null;
        var dequeuedNode = this._first;
        this._first = this._first.next;
        if (this._first === this._last) {
            this._last = null;
        }
        this._length--;
        return dequeuedNode.data;
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=index.js.map