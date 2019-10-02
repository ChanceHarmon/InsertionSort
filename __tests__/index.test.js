const insertionSort = require('../index');

describe('#insertionSort', () => {
  test('returns a sorted array', () => {
    const array = [3, 4, 6, 5, 8, 7];
    expect(insertionSort(array)).toEqual([3, 4, 5, 6, 7, 8])
  });
  test('should make no changes to the array', () => {
    const array = [3, 3, 3, 3, 3, 3];
    expect(insertionSort(array)).toEqual([3, 3, 3, 3, 3, 3])
  })
  test('should handle negatives correctly', () => {
    const array = [3, 5, 4, -3, 7, -5];
    expect(insertionSort(array)).toEqual([-5, -3, 3, 4, 5, 7])
  })
  test('should handle inccorect output', () => {
    const array = [3, 5, 4, -3, 7, -5];
    expect(insertionSort(array)).not.toEqual([3, 5, 4, -3, 7, -5])
  })
});