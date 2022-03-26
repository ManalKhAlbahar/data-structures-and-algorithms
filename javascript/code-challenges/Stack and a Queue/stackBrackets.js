"use strict";

const validateBrackets= function (string){
    const stack=[];
    for (let value of string){
        if (value == '(' || value =='{'||value =='['){
            stack.push(value);
        }
        if ( value ==')'||value=='}'||value==']'){
            if (stack.length===0){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
    
}

module.exports= validateBrackets;


