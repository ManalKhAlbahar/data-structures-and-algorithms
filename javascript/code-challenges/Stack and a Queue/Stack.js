'use strict';

const Node = require('./node')

class Stack {
    constructor() {
        this.top = null;
        this.count = 0;
    }

    push(value) {
        let node = new Node(value);
        if (this.top == null) {
            this.top = node
            this.count++;
        }
        else {
            node.next = this.top;
            this.top = node
        }

    }

    pop() {
        if (this.top == null) {
            return ('Exception : Empty Stack');
        }
        else {
            let popValue = this.top;
            this.top = popValue.next;
            popValue.next = null;
            this.count--;
            return popValue.value;
        }
    }

    peek() {
        if (this.top == null) {
            return 'Exception : Empty Stack';
        }
        return this.top;
    }

    isEmpty() {
        if (this.top = null) {
            return true;
        } else {
            return false;
        }

    }

}

module.exports = Stack;