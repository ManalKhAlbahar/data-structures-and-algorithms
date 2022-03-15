'use strict';

const Queue = require('../Queue');

describe('testing the Queue', () => {
    it('test creaing a Queue', () => {
        let newQueue = new Queue();
        expect(newQueue).toBeDefined();
        expect(newQueue.front).toBeNull();
    });

    it('testing enqueue method', () => {
        let newQueue = new Queue();
        newQueue.enqueue(2);
        newQueue.enqueue(4);
        newQueue.enqueue(6);
        expect(newQueue.front.value).toEqual(2)
        expect(newQueue.front.next.value).toEqual(4)
    })

    it('testing dequeue method', () => {
        let newQueue = new Queue();
        newQueue.enqueue(6);
        newQueue.enqueue(8);
        newQueue.enqueue(10);
        expect(newQueue.dequeue()).toEqual(6);
        expect(newQueue.front.value).toEqual(8);
    })
    it('testing peak method', () => {
        const newQueue = new Queue();
        const queue = new Queue();
        newQueue.enqueue(7)
        newQueue.enqueue(9)
        expect(newQueue.peek().value).toBe(7)
        expect(queue.peek()).toBe('Exception : Empty Stack')
    })

    it('testing isEmpty method', () => {
        const newQueue = new Queue();
        const queue = new Queue();
        newQueue.enqueue(7)
        newQueue.enqueue(9)
        expect(newQueue.isEmpty()).toBeFalsy();
        expect(queue.isEmpty()).toBeFalsy();

    })
});