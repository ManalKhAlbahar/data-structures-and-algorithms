# Insertion Sort
- Write a function called  InsertionSort.
- Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. 

# Pseudocode
       InsertionSort(int[] arr)
 
        FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp

# Trace

## Sample Array: [8,4,23,42,16,15]
- step 1 :  In the first pass through of the selection sort, we evaluate if there is a smaller number in the array than what is 
currently present in index 0. We find this smaller number right away in index 1. The minimum value gets updated to remember this 
index. At the end of the evaluation, the smaller number will be swapped with the current value in index i. This results in our 
smallest number of our array being placed first.

![step1](step1.jpg)

- step 2 : The second pass through the array evaluates the remaining values in the array to see if there is a smaller value other 
than the current position of i. 8 is the 2nd smallest number in the array, so it “swaps” with itself. The minimum value does not 
change at all during the iteration of this pass.

![step2](step2.jpg)

- step 3 : The third pass through evaluates the remaining indexes in the array, starting at position 2. Both position 4 and 5 are 
smaller than the value in position 2. Each time a smaller number than the current minimum is found, the variable will update to the 
new smallest number. In this case, 15 is the next smallest number. As a result, it will swap with position 2.

![step3](step3.jpg)

- step 4 : The 4th pass through on the array proves that 16 is the next smallest number in the array, and as a result, switches 
places with the 42.

![step4](step4.jpg)

- step 5 : The 5th pass through of the array only has one other index to evaluate. Since the last index value is larger than index 
4, the two values will swap.

![step5](step5.jpg)

- step 6 : On its final iteratation through the array, it will swap places with itself as it evaluates the value against itself.

![step6](step6.jpg)


# Efficency
- Time Complexity : O(n^2)
- Space Complexity : O(1)


