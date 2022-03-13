'use strict';

// Require our linked list implementation
const LinkedList = require('../index');
describe('testing Linked List', () => {
    it('test creating an LL instance', () => {
        const ll = new LinkedList();
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();    
    })
})

describe('insert to the beginning of the LL', () => {
    it('add to an empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a'); // create a new node (value=a)
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();        

    })
    it('add to a non-empty LL',()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
    })
})


describe("check if it exists or not ", () => {

    it("lets check", () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.includes('a')).toBe(true);
        expect(ll.includes('b')).toBe(true);
        expect(ll.includes('c')).toBeFalsy();

    })

})

describe('append to the end of the LL', () => {
    it('add to an empty LL', () => {
        const ll = new LinkedList();
        ll.append('a'); 
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();        

    })
    it('add to a non-empty LL',()=>{
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next).toBeNull();
    })
})

//"{ a } -> { b } -> { c } -> NULL"

describe("toString ll  ", () => {

    it("toString ll ", () => {
        const ll = new LinkedList();
        ll.insert('c');
        ll.insert('b');
        ll.insert('a');
        expect(ll.toString()).toBe("{a} ->{b} ->{c} ->Null");      
    })
    it('testing insertbefore',()=>{
        const ll = new LinkedList() ;
        ll.insert('1')
        ll.insert('2')
        ll.insert('3')
        ll.insert('4')
        ll.insertBefore('2','5');
        expect(ll.head.value).toBe('4');
        expect(ll.head.next.value).toBe('3');
        expect(ll.head.next.next.value).toBe('5');
        expect(ll.head.next.next.next.value).toBe('2');
        expect(ll.head.next.next.next.next.value).toBe('1');
        expect(ll.head.next.next.next.next.next).toBeNull();
      })
      it('testing insertAfter',()=>{
        const ll = new LinkedList() ;
        ll.insert('1')
        ll.insert('2')
        ll.insert('3')
        ll.insert('4')
        ll.insertAfter('3','5');
        expect(ll.head.value).toBe('4');
        expect(ll.head.next.value).toBe('3');
        expect(ll.head.next.next.value).toBe('5');
        expect(ll.head.next.next.next.value).toBe('2');
        expect(ll.head.next.next.next.next.value).toBe('1');
        expect(ll.head.next.next.next.next.next).toBeNull();
      })

    it('testing  the position of kth',()=>{
        const ll = new LinkedList() ;
        ll.append(5);
        ll.append(6);
        ll.append(7);
        expect(ll.getKth(0)).toBe(7);
        expect(ll.getKth(1)).toBe(6); 
        expect(ll.getKth(2)).toBe(5); 
        expect(ll.getKth(7)).toEqual('Exception')
        expect(ll.getKth(-1)).toEqual('Exception')
    
      })
});

describe('test zipLists', () => {
    it('testing zipList method:',()=>{
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        const list3 = new LinkedList();
        
    
        list1.insert(5);
        list1.insert(3);
        list1.insert(1);
    
        list2.insert(6);
        list2.insert(4);
        list2.insert(2);
    
        list3.zipLists(list1,list2);
      
      expect(list3.toString()).toBe('{1} ->{2} ->{3} ->{4} ->{5} ->{6} ->Null')
      
      })
})
