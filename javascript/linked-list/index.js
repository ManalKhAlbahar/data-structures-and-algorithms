'use strict';

const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
        if(!this.head) { 
            this.head = node;
        } else { 
            node.next = this.head;
            this.head = node;
        }
    }

    includes(value){
        if(this.head!=null){
        let headV = this.head;
        while (headV!=null) {
          if(headV.value!=value)
          headV = headV.next;
          else return true;}
          return false;
      }
      else return false;
      }
includes(value){
    if(this.head!=null){
        let headV =this.head;
        while(headV!=null){
            if(headV.value!=value)
            headV=headV.next;
            else return true;
        }
        return false
    }
else return false;
}
toString(){
    let values="";
    if(this.head!=null){
    let headV = this.head;
    while (headV!=null) {
      values  =values+`{ ${headV.value} } -> `;
      headV = headV.next;
  }
  values  =values +`NULL`;
  return values;
  }
  else return "empty list";
  
  }
  
}


module.exports = LinkedList;
