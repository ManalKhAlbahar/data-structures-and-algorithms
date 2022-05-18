'use strict'

const {Node,BinaryTree,HashMap}=require('../tree-intersection');


describe("tree-intersection()", () => {
    let binaryTree1;
    let binartTree2;
    beforeAll(() => {
      let nodeOne = new Node(150);
      let two = new Node(100);
      let three = new Node(250);
      let four = new Node(75);
      let five = new Node(160);
      let six = new Node(125);
      let seven = new Node(175);
      let eight = new Node(200);
      let nine = new Node(500);
      let ten = new Node(300);
      let eleven = new Node(350);
  
      nodeOne.left = two;
      nodeOne.right = three;
      two.left = four;
      two.right = five;
      five.left = six;
      five.right = seven;
      three.right = eight;
      three.left = nine;
      nine.left = ten;
      nine.right = eleven;
  
      let nodeOne2 = new Node(42);
      let two2 = new Node(100);
      let three2 = new Node(600);
      let four2 = new Node(15);
      let five2 = new Node(160);
      let six2 = new Node(125);
      let seven2 = new Node(175);
      let eight2 = new Node(200);
      let nine2 = new Node(500);
      let ten2 = new Node(4);
      let eleven2 = new Node(350);
  
      nodeOne2.left = two2;
      nodeOne2.right = three2;
      two2.left = four2;
      two2.right = five2;
      five2.left = six2;
      five2.right = seven2;
      three2.right = eight2;
      three2.left = nine2;
      nine2.left = ten2;
      nine2.right = eleven2;
  
      binaryTree1 = new BinaryTree(nodeOne);
      binartTree2 = new BinaryTree(nodeOne2);
    });
    test("  return a set of values found in both trees.", () => {
      let hashedTest = new HashMap(77);
      let results = [100, 160, 125, 175, 500, 350, 200];

  
      expect(hashedTest.treeIntersection(binaryTree1, binartTree2)).toEqual(
        results
      );
    });
  

    test(" return a set of values not found in both trees.", () => {
      let hashedTest = new HashMap(77);
      let results = [100, 160, 125, 175, 500, 350, 200];
      expect(hashedTest.treeIntersection(binaryTree1, binartTree2)).toEqual(
        results
      );
      expect(hashedTest.map[42].head.next).toBeNull();
      expect(hashedTest.map[100].head.next).toBeTruthy();
    });
});