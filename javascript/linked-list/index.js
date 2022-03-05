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

    append(value) {
        const node = new Node(value);
        if(!this.head) { 
            this.head = node;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
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
        let headV=this.head;
        while(headV!=null){
            values=values+`{${headV.value}->}`;
            headV=headV.next;
        }
        values=values=`NULL`;
        return values;
    }
    else return "list is empty";
}
}


module.exports = LinkedList;
