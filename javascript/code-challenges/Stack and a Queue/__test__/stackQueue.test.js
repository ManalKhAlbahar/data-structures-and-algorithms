'use strict';

const stackQueue = require('../stackQueue');

describe('testing the stackQueue class',()=>{
    const stackQueues = new stackQueue();
    it('stackQueue test',()=>{
        expect(stackQueues).toBeInstanceOf(stackQueue);

    })
    it('test enqueue',()=>{
        stackQueues.enqueue('4');
        stackQueues.enqueue('9');
        stackQueues.enqueue('7');
        stackQueues.enqueue('8');
        expect(stackQueues.s1.top.value).toBe('8'); 
        expect(stackQueues.s2.top).toBeNull();
        
    })
    it('test dequeue()',()=>{
            stackQueues.dequeue();
            stackQueues.dequeue();
            stackQueues.dequeue();
            stackQueues.dequeue();
            expect(stackQueues.s2.top.value).toBe('4'); 
            expect(stackQueues.s1.isEmpty).toBeTruthy; 
            
        })
})