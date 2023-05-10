// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const leftArray = arr.slice(0, mid);
//   const rightArray = arr.slice(mid);

//   const sortedLeftArray = mergeSort(leftArray);
//   const sortedRightArray = mergeSort(rightArray);

//   return merge(sortedLeftArray, sortedRightArray);
// }

// function merge(leftArr, rightArr) {
//   let i = 0,
//     j = 0;
//   const result = [];

//   while (i < leftArr.length && j < rightArr.length) {
//     if (leftArr[i] < rightArr[j]) {
//       result.push(leftArr[i]);
//       i++;
//     } else {
//       result.push(rightArr[j]);
//       j++;
//     }
//   }
//   return result.concat(leftArr.slice(i)).concat(rightArr.slice(j));
// }

// const unsortedArr = [4, 8, 2, 1, 5, 7, 6, 3];
// const sortedArr = mergeSort(unsortedArr);

// console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8]

// function mergeSort(array){
//   if(array.length<=1){
//     return array
//   }
//   const mid = Math.floor((array.length)/2)
//   const leftArr = array.slice(0,mid)
//   const rightArr = array.slice(mid)

//   const sortedLeftArray = mergeSort(leftArr)
//   const sortedRightArray = mergeSort(rightArr)

//   return merge(sortedLeftArray,sortedRightArray)
// }

// function merge(leftArray,rightArray){
//   let i=0,j=0
//   const result = []
//   while(i<leftArray.length && j<rightArray.length){
//     if(leftArray[i]<rightArray[j]){
//       result.push(leftArray[i])
//       i++
//     }else{
//       result.push(rightArray[j])
//       j++
//     }
//   }
//   return result.concat(leftArray.slice(i)).concat(rightArray.slice(j))
// }

// const unsortedArr = [4, 8, 2, 1, 5, 7, 6, 3];
// const sortedArr = mergeSort(unsortedArr);

// console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8]

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  console.log(arr);
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  const sortedLeftArray = mergeSort(leftArr);
  const sortedRightArray = mergeSort(rightArr);

  mergeSort(sortedLeftArray, sortedRightArray);
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
