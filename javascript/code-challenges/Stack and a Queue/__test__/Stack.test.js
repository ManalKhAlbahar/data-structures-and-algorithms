'use strict';

const Stack = require('../Stack');

describe('testing the stack', () => {
    it('test creaing a Stack',()=>{
        let newStack = new Stack();
        expect(newStack).toBeDefined();
        expect(newStack.top).toBeNull();
    });

    it('testing push to the stack',()=>{
        let newStack = new Stack();
        newStack.push(2);
        newStack.push(4);
        newStack.push(6);
        expect(newStack.top.value).toEqual(6)
        expect(newStack.top.next.value).toEqual(4)
    })

    it('testing pop from the stack',()=>{
        let newStack = new Stack();
        newStack.push(6);
        newStack.push(8);
        newStack.push(10);
        expect(newStack.pop()).toEqual(10);
        expect(newStack.top.value).toBe(8);
    })
    it('testing peak Stack', () => {
        const newStack = new Stack();
        const stack = new Stack();
        newStack.push(7)
        newStack.push(9)
        expect(newStack.peek().value).toBe(9)
        expect(stack.peek()).toBe('Exception : Empty Stack')
    })

    it('testing isEmpty Stack', () => {
        const newStack = new Stack();
        const stack = new Stack();
        newStack.push(7)
        newStack.push(9)
        expect(newStack.isEmpty()).toBeFalsy();
        expect(stack.isEmpty()).toBeFalsy();

    })
});