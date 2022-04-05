'use strict'
const Node = require('../node')
const BinaryTree=require('../binaryTree')
const fizzBuzzTree=require('../tree-fizz-buzz');


        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        one.left = two;
        one.right = three;
        two.left = six;
        three.left = four;
        three.right = five;
      


       describe('binary Tree', ()=>{ 
       let tree = new BinaryTree(one);
         it ('fizzBuzz()' ,()=>{
                let result=[
                    "1",
                    "buzz",
                    "fizz",
                    "fizz",
                    "4",
                    "5",
                ]
                let testTree=new BinaryTree()
                expect(fizzBuzzTree(tree)).toEqual(result)
                expect(testTree.root).toBeNull()
                expect(fizzBuzzTree(testTree)).toBe(-1)

         })

       })