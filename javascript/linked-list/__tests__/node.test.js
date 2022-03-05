'use strict';

const Node = require('../node.js');

describe('testing Node class', () => {
    it('test creating a Node ',()=>{
        const value = 'value for node';
        const node = new Node(value);
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    })
});