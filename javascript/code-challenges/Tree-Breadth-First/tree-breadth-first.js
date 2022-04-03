'use strict'

const Node = require('./node');
const breadthFirst = (tree) => {
    let resultArr = [];
    resultArr.push(tree.root.value);
    const breadth = (node) => {
        resultArr.push(node.left.value);
        resultArr.push(node.right.value);
        if (node.left.left) {
            breadth(node.left);
        }
        if (node.right.right) {
            breadth(node.right);
        }
    };
    breadth(tree.root);
    return resultArr
}

module.exports = breadthFirst;