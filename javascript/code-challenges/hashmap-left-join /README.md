# Hashmap LEFT JOIN

Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Challenge

- Write a function that LEFT JOINs two hashmaps into a single data structure.
- Write a function called left join
- Arguments: two hash maps
     - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
     - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the 
output below, so long as it achieves the LEFT JOIN logic

## Approach & Efficiency
- Big O
     - Time : O(n) : for n elements we will require n iterations.
     - Space : O(1) : use only a constant amount of memory in addition to the passed in values to produce the result.

## Solution
![leftJoin](LeftJoin.jpg)
