"use strict";

const Node = require('../node');
const BinaryTree = require('../binaryTree')
let treeTest = null;

describe('BT testing', () => {

    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        three.left = four;
        three.right = five;
         treeTest = new BinaryTree(one);
    });

    test('constructor', () => {
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
        expect(treeTest.root.value).toBe(1);
    });

    test('preOrder test', () => {
        let expectedOutput = [1, 2, 6, 7, 3, 4, 5];
        let preOrder = treeTest.preOrder();
        expect(preOrder).toEqual(expectedOutput);
    });

    test('postOrder test', () => {
        let expectedOutput = [7, 6, 2, 4, 5, 3, 1];
        let postOrder = treeTest.postOrder();

        expect(postOrder).toEqual(expectedOutput);
    });
    test('inOrder test', () => {
        let expectedOutput = [6, 7, 2, 1, 4, 3, 5];
        let inOrder = treeTest.inOrder();

        expect(inOrder).toEqual(expectedOutput);
    });


});