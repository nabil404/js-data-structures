"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var helpers_1 = require("../helpers");
var Stack = /** @class */ (function () {
    function Stack(data) {
        this._first = null;
        this._length = 0;
        if (data === null || data === void 0 ? void 0 : data.length) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var el = data_1[_i];
                this.push(el);
            }
        }
    }
    Object.defineProperty(Stack.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    Stack.prototype.toArray = function () {
        var array = [];
        var current = this._first;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    };
    Stack.prototype.push = function (value) {
        var newNode = new helpers_1.UniDirLink(value);
        if (!this._first) {
            this._first = newNode;
        }
        else {
            var temp = this._first;
            this._first = newNode;
            this._first.next = temp;
        }
        this._length++;
        return this;
    };
    Stack.prototype.pop = function () {
        if (!this._first)
            return null;
        var poppedNode = this._first;
        this._first = this._first.next;
        this._length--;
        return poppedNode.data;
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=index.js.map