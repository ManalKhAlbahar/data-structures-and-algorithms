'use strict'

const Node = require('./node')
class BST {
    constructor(root = null) {
        this.root = root;
    }
    add(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
            return
        }
        let current = this.root;
        while (current) {
            if (current.value > node.value) {
                if (!current.left) {
                    current.left = node;
                    return;
                }
                else {
                    current = current.left;
                }
            } else {
                if (!current.right) {
                    current.right = node;
                    return;
                } else {
                    current = current.right;
                }
            }
        }
        return this.root
    }
    contains(value) {
        if (!this.root) {
            return 'BSt is Empty';
        }
        let current = this.root;
        while (current) {
            if (current.value === value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            }
            if(value>current.value){
                current=current.right;
            }
        }
        return false;
    }
}
module.exports= BST;

