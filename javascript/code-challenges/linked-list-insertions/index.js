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
        if (!this.head) {
            this.head = node;
        } else {
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
                values = values + `{${headV.value}} ->`;
                headV = headV.next;
            }
            values = values + `Null`;
            return values;
        }
        else return "empty list";

    }

    insertBefore(value, newValue) {
        const node = new Node(newValue);
        let currentNode = this.head;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
            if (currentNode.next.value == value) {
                node.next = currentNode.next;
                currentNode.next = node;
                return null;
            }
        }
    }
    insertAfter(value, newValue) {
        const node = new Node(newValue);
        let currentNode = this.head;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
            if (currentNode.value == value) {
                node.next = currentNode.next;
                currentNode.next = node;
                return null;
            }
        }

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

    zipLists(list1, list2) {

        let listOne = list1.head;
        let listTwo = list2.head;

        while (listOne || listTwo) {
            if (listOne) {
                this.append(listOne.value);
                listOne = listOne.next;
            }
            if (listTwo) {
                this.append(listTwo.value);
                listTwo = listTwo.next;
            }
        }
    }
    reverseList (head) {
        let prev = null;
        while (head !== null) {
            let next = head.next;
            head.next = prev;
            prev = head
            head = next;
        }
        return prev;
    
    }

}



module.exports = LinkedList;
