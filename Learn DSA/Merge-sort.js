function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftArr, rightArr) {
  let i = 0,
    j = 0;
  const result = [];

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }
  return result.concat(leftArr.slice(i)).concat(rightArr.slice(j));
}

const unsortedArr = [4, 8, 2, 1, 5, 7, 6, 3];
const sortedArr = mergeSort(unsortedArr);

console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8]
