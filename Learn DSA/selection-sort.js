const arr = [5, 2, 7, 2, 1, 9, 8];
const n = arr.length;

for (let i = 0; i < n ; i++) {
  min = i;
  for (j = i + 1; j < n; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
    if (min != i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
}
console.log(arr);

// for (i = 0; i < n; i++) {
//   min = i;
//   for (j = i + 1; j < n; j++) {
//     if (arr[j] > arr[min]) {
//       min = j;
//     }
//     if (min != i) {
//       let temp = arr[min];
//       arr[min] = arr[i];
//       arr[i] = temp;
//     }
//   }
// }
