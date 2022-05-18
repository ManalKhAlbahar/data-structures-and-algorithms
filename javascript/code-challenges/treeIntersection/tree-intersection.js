'use strict'

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let resultArr = [];
        let traverse = (node) => {
            resultArr.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return resultArr;
    }

    inOrder() {
        let resultArr = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            resultArr.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return resultArr;
    }

    postOrder() {
        let resultArr = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            resultArr.push(node.value);
        }
        traverse(this.root);
        return resultArr;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let currentN = this.head;
            while (currentN.next) {
                currentN = currentN.next;
            }
            currentN.next = newNode;
        }
    }

    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class HashMap {

    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }


    getHash(key) {
        const assciSum = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
        const withPrime = assciSum * 599;
        return withPrime % this.size;
    }


    set(key, value) {

        let hash;
        if (typeof key == "number") {
            hash = key;
        } else {
            hash = this.getHash(key);
        }
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key]: value }
        this.map[hash].append(entry);
    }
    get(key) {
        let hash = this.getHash(key);
        if (!this.map[hash]) return null
        let index = this.map[hash];
        let current = index.head
        if (!current) return 'does not exiset'
        if (current.value[key]) return current.value[key]
        while (current.next) {
            current = current.next
            if (current.value[key]) return current.value[key]
        }
    }
    contains(key) {
        let hash = this.getHash(key)
        if (!this.map[hash]) return false;
        let index = this.map[hash];
        let current = index.head;
        if (!current) return false;
        if (current.value[key]) return true;

        while (current.next) {
            current = current.next;
            if (current.value[key]) return true;
        }

    }

    treeIntersection(firstTree, secondTree) {
        let key;
        let counter = 0;
        let hash;
        let results = [];
        let traverse = (node) => {
            key = node.value;
            this.set(key, "x");
            if (counter > 0) {
                typeof key == "number" ? (hash = key) : this.getHash(key);
                if (this.map[hash].head.next) {
                    results.push(hash);
                }
            }
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(firstTree.root);
        counter++;
        traverse(secondTree.root);
        return results;
    }
}

module.exports = { Node, BinaryTree, HashMap }