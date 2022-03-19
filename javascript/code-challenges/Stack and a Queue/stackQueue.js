'use strict'
const stack = require('./Stack')

class stackQueue {

    constructor() {
        this.s1 = new stack();
        this.s2 = new stack();
    }

    enqueue(value) {
        this.s1.push(value);
    }

    dequeue() {
        if (this.s1.top == null) {
            return "S is Empty";
        }
        else {
            this.s2.push(this.s1.top.value);
            this.s1.pop();
        }
    }
}
module.exports = stackQueue;