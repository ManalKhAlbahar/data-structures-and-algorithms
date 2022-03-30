"use strict";
const Node = require('../node');
const BST = require('../binarySearchTree');


describe("BST tests", () => {
  test("Can successfully instantiate an empty tree", () => {
    let BSTresult = new BST();
    expect(BSTresult.root).toBe(null);
  });

  test(" add one root value", () => {
    let BSTresult = new BST();
    BSTresult.add("2");
    expect(BSTresult.root.value).toBe("2");
    expect(BSTresult.root.left).toBe(null);
    expect(BSTresult.root.right).toBe(null);
  });

test("create tree using add ()", () => {
  let tree = new BST();
  tree.add(4);
  tree.add(62);

  expect(tree.root.value).toBe(4);
  expect(tree.root.right.value).toBe(62);
  expect(tree.root.left).toBeNull();
 

});

test("add multiple nodes using add ()", () => {
  let BSTTree = new BST();
  BSTTree.add("40");
  BSTTree.add("25");
  BSTTree.add("75");

  expect(BSTTree.root.value).toBe("40");
  expect(BSTTree.root.left.value).toBe("25");
  expect(BSTTree.root.right.value).toBe("75");
  expect(BSTTree.root.left.left).toBeNull;
  expect(BSTTree.root.left.right).toBeNull;
  expect(BSTTree.root.right.left).toBeNull;
  expect(BSTTree.root.right.right).toBeNull;
});
test(" Contains()", () => {
  let BSTresult;
  BSTresult = new BST();
  BSTresult.add(2);
  BSTresult.add(3);
  BSTresult.add(5);
  BSTresult.add(8);
  expect(BSTresult.contains(8)).toBe(true);
  expect(BSTresult.contains(75)).toBe(false);
  expect(BSTresult.contains(15)).toBe(false);
  expect(BSTresult.contains(2)).toBe(true);
  expect(BSTresult.contains(66)).toBe(false);
});})