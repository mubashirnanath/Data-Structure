// function quickSort(array) {
//     if (array.length <= 1) {
//       return array; // base case
//     }
    
//     const pivot = array[0]; // choose first element as pivot
//     const less = [];
//     const greater = [];
    
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] < pivot) {
//         less.push(array[i]);
//       } else {
//         greater.push(array[i]);
//       }
//     }
//     console.log(less, "less");
//     console.log(greater, "greater");
//     return quickSort(less).concat(pivot, quickSort(greater)); // recursively sort sub-arrays
//   }
  
//   // Example usage:
//   const unsortedArray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
//   const sortedArray = quickSort(unsortedArray);
//   console.log(sortedArray); // prints [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
  

// function quickSort(array){
//   if(array.length<=1){
//     return array
//   }
//   const pivot = array[0]
//   const less = []
//   const greater = []

//   for(let i=1;i<array.length;i++){
//     if(array[i]<pivot){
//         less.push(array[i])
//     }else{
//       greater.push(array[i])
//     }
//   }
//   return quickSort(less).concat(pivot,quickSort(greater))
// }

function quickSort(arr){
  if(arr.length<=1){
    return arr
  }

  const pivot = arr[0]
  const less = []
  const greater = []

  for(let i=1;i<arr.length;i++){
    if(arr[i]<pivot){
      less.push(arr[i])
    }else{
      greater.push(arr[i])
    }
  }
  return quickSort(less).concat(pivot,quickSort(greater))
}

const arr = [3,5,4,6,7,7,88,90,123,5]
console.log(quickSort(arr));