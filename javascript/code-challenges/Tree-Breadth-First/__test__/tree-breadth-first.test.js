"use strict";

const Node = require('../node');
const breadthFirst = require('../tree-breadth-first')
const BinaryTree = require('../binaryTree');
let treeTest = null;

describe('breadthFirst test', () => {
    test('breadthFirst function', () => {
        let a = new Node(1);
        let b = new Node(2);
        let c = new Node(3);
        let d = new Node(4);
        let e = new Node(5);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;

        let treeTest = new BinaryTree(a);
        let resultArr = [1, 2, 3, 4, 5];
        expect(breadthFirst(treeTest)).toEqual(resultArr);
    });
})