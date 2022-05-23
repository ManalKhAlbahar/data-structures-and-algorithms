'use strict'

const hashLeftJoin=  (leftHash, rightHash)=>  {
    let resultArr = [];
    let key;
    let value1;
    let value2 = null;
    for (let i = 0; i < leftHash.map.length; i++) {
      if (leftHash.map[i]) {
        key = Object.keys(leftHash.map[i].head.value)[0];
        value1 = Object.values(leftHash.map[i].head.value)[0];
        if (rightHash.contains(key)) {
          value2 = Object.values(rightHash.map[i].head.value)[0];
        } else {
          value2 = null;
        }
        resultArr.push([key, value1, value2]);
      }
    }
    return resultArr;
  };

  module.exports= hashLeftJoin;
