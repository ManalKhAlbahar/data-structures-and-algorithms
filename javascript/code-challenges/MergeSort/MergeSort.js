"use strict";



  
  const MergeSort = (array) => {
    if (array.length < 2) return array
    const middle = Math.floor(array.length / 2)
    const leftOne = array.slice(0, middle)
    const rightOne = array.slice(middle, array.length)
    const leftArr = MergeSort(leftOne)
    const rightArr = MergeSort(rightOne)
    return mergeArray(leftArr, rightArr)
  }


  const mergeArray = (left, right) => {
    const result = []
  
    while (left.length && right.length) {
        result.push(left[0] > right[0] ? right.shift() : left.shift())
    }
  
    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }
  
    return result
  }

  module.exports=MergeSort;