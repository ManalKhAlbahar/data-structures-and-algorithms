# Hashtables

Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.

## Challenge

- Hashtables methods: set, get, contains, hash

## Approach & Efficiency

- Time Complexity : O(1)
- Space Complexity : O(1)

## API

- set

Returns: nothing

This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.

- get

Returns: Value associated with that key in the table

- contains

Returns: Boolean, indicating if the key exists in the table already.

- keys

Returns: Collection of keys

- hash

Returns: Index in the collection for that key