'use strict';
const Node = require('./node')

class Queue {
    constructor() {
        this.front = null;
        this.last = null;
        this.count = 0;
    }

    enqueue(value) {
        let node = new Node(value);
        if (this.front == null) {
            this.front = node;
            this.last = node;
        }
        this.last.next = node;
        this.last = node;
    }

    dequeue() {
        if (this.front == null) {
            return 'Exception : Empty Queue';
        }
        let dequeueValue = this.front;
        this.front = dequeueValue.next;
        dequeueValue.next = null;
        this.count--;
        return dequeueValue.value;
    }

    peek() {
        if (this.front == null) {
            return 'Exception : Empty Stack';
        }
        return this.front;
    }
    isEmpty() {
        if (this.front = null) {
            return true;
        } else {
            return false;
        }

    }

}

module.exports = Queue;