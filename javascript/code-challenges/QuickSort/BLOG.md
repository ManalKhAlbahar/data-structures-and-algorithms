# Quick Sort
- Write a function called QuickSort.
- Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. 

# Pseudocode
    ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

         ALGORITHM Partition(arr, left, right)
       // set a pivot value as a point of reference
       DEFINE pivot <-- arr[right]
      // create a variable to track the largest index of numbers lower than the defined pivot
      DEFINE low <-- left - 1
      for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
      // return the pivot index point
      return low + 1
  
      ALGORITHM Swap(arr, i, low)
      DEFINE temp;
      temp <-- arr[i]
      arr[i] <-- arr[low]
      arr[low] <-- temp

# Trace

- let pivot equale to the middle elements in array
- let left equale the first element , let right equale to last element in the array.
- check if the left element less than pivot, check if the right element greater than pivot

![trace](trace.jpg)

# Efficency

- Time Complexity : o(n log n)
- Space Complexity : O(log n)