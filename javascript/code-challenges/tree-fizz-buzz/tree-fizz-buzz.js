'use strict';

const fizzBuzzTree = (tree) => {
  let current = tree.root;
  let arrResult = [];
  if (!current) return -1;
  let fizzBuzz = (node) => {
    if (node.value % 3 == 0 && node.value % 5 == 0) {
      node.value = "fizzBuzz";
      arrResult.push(node.value);
    } else if (node.value % 3 == 0) {
      node.value = "fizz";
      arrResult.push(node.value);
    } else if ((node.value & 5) == 0) {
      node.value = "buzz";
      arrResult.push(node.value);
    } else {
      arrResult.push(node.value.toString());
    }

    if (node.left) fizzBuzz(node.left);
    if (node.right) fizzBuzz(node.right);
  };
  fizzBuzz(current);
  return arrResult;
};
module.exports = fizzBuzzTree;