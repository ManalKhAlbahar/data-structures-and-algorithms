'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');
describe('testing Linked List', () => {
    it('test creating an LL instance', () => {
        const ll = new LinkedLilst();
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();    
    })
})

describe('insert to the beginning of the LL', () => {
    it('add to an empty LL', () => {
        const ll = new LinkedLilst();
        ll.insert('a'); // create a new node (value=a)
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();        

    })
    it('add to a non-empty LL',()=>{
        const ll = new LinkedLilst();
        ll.insert('a');
        ll.insert('b');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
    })
})


describe('ll is exit or not', () => {
    it('exit or not LL', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insetr('b')
        expect(ll.includes('a')).toBe(true);
        expect(ll.includes('b')).toBe(true);
        expect(ll.includes('ac')).toBeFalsy();
        
    })
    //"{ a } -> { b } -> { c } -> NULL"
    it('add toString c',()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        expect(ll.toString()).toBe("{ a } -> { b } -> { c } -> NULL");
       
    })

});

