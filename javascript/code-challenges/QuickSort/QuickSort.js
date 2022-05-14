'use strict'

const QuickSort = (arr, left, right)=> {
    if (left < right) {
        let position = partition(arr, left, right);
        QuickSort(arr, left, position - 1);
        QuickSort(arr, position + 1, right);
    }
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let low = left - 1;
    for (let i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            low++;
            swap(arr, i, low);
        }
    }
    swap(arr, right, (low + 1));
    return (low + 1);
}

function swap(arr, i, low) {
    let temp;
    temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;

}

module.exports=QuickSort;
