const arr = [2, 5, 7, 2, 1, 9, 8];
const n = arr.length;


// Bubble Sort

for (let i = 0; i < n - 1; i++) {
  for (j = 0; j < n - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}



//Optimized Bubble Sort

// for (let i = 0; i < n - 1; i++) {
//   let swapped = false; //////////////////
//   for (j = 0; j < n - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//       swapped = true;  ////////////////////////
//     }
//   }
//   if (swapped == false) {  ///////////////
//     break;    ////////////
//   }
// }
console.log(arr);

for(i=1;i<n;i++){
  temp = a[i]
  j = i-1
  while(j>=0 && a[j]>temp){
    a[j+1] = a[j]
    j--
  }
  a[j+1] = temp
}


for(i=0;i<n;i++){
  
}
