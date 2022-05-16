'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let currentN = this.head;
            while (currentN.next) {
                currentN = currentN.next;
            }
            currentN.next = newNode;
        }
    }

    values() {
        let values = [];
        let current = this.head;
        while (current) {
          values.push(current.value);
          current = current.next;
        }
        return values;
      }
} 

class HashMap {

    constructor(size) {
      this.size = size;
      this.map = new Array(size); 
    }
  
   
    getHash(key) {
      const assciSum = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
      const withPrime = assciSum * 599;
      return withPrime % this.size; 
    }
  
  
    set(key, value) { //add
      const hash = this.getHash(key);
  
  
      const entry = { [key]: value };
  
      if (!this.map[hash]) {
        this.map[hash] = new LinkedList();
      }
  
  
      this.map[hash].append(entry)
  
    }
  

    get(key){
        let hash=this.getHash(key);
        if(!this.map[hash]) return null 
        let index=this.map[hash];
        let current=index.head
        if(!current) return 'does not exiset'
        if(current.value[key]) return current.value[key]
        while(current.next){
            current=current.next
            if(current.value[key]) return current.value[key]
        }
    }
    contains(key){
        let hash=this.getHash(key)
        if(!this.map[hash]) return false ;
        let index=this.map[hash];
        let current=index.head;
        if(!current) return false;
        if (current.value[key]) return true;

      while (current.next) {
        current = current.next;
        if (current.value[key]) return true;
      }

    }


  repeatedWord(string) {
    const arrayOfStrings = string.split(/[ ,]+/);
    let key;
    let hashedKey;
    for (let i = 0; i < arrayOfStrings.length; i++) {
      key = arrayOfStrings[i].toLowerCase();
      this.set(key, "x");
      hashedKey = this.getHash(key);
      if (this.map[hashedKey].head.next) {
        return key;
      }
    }
  }
}
  
module.exports = HashMap;