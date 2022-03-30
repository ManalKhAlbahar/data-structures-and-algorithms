'use strict';

const Node = require('./node')

class maxTree {
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
    maxTree() {
        if (!this.root) {
            return 'Tree is Empty'
        }
        let maxNode = this.root.value;
        const findMaxTree = (node) => {
            if (!node)
                return 'Tree is Empty';
            maxNode = node.value;
            let leftMax = findMaxTree(node.left);
            let rightMax = findMaxTree(node.right);
            if (leftMax > maxNode)
                maxNode = leftMax
            if (rightMax > maxNode)
                maxNode = rightMax;
            return maxNode
        }
        findMaxTree(this.root);
        return maxNode;
    }
}

module.exports = maxTree;