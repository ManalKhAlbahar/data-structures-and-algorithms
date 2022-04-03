'use strict';

const Node = require('./node')

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

module.exports = BinaryTree;