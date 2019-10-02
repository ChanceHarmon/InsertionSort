'use strict'

const array = [4, 5, 3, 8, 12, 10];

const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
insertionSort(array);

//console.log(array);

module.exports = insertionSort;