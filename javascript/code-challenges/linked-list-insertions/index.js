'use strict';

const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    includes(value) {
        if (this.head != null) {
            let headV = this.head;
            while (headV != null) {
                if (headV.value != value)
                    headV = headV.next;
                else return true;
            }
            return false;
        }
        else return false;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) { //means LL is empty
            this.head = node;
        } else { //means LL is not empty
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }

    toString() {
        let values = "";
        if (this.head != null) {
            let headV = this.head;
            while (headV != null) {
                values = values + `{ ${headV.value} } -> `;
                headV = headV.next;
            }
            values = values + `NULL`;
            return values;
        }
        else return "empty list";

    }

    getKth(k) {
        let currentNode = this.head;
        let count = 0;
        while (currentNode != null) {
            currentNode = currentNode.next;
            count++;
        }

        if (k > count || k < 0) return "Exception";

        currentNode = this.head;
        while (count != (k + 1)) {
            if (currentNode.next != null)
                currentNode = currentNode.next;
            count--;
        }

        return currentNode.value;
    }
}

module.exports = LinkedList;
