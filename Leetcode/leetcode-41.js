// Given an unsorted integer array nums, return the smallest missing positive integer.
// You must implement an algorithm that runs in O(n) time and uses constant extra space.

// var firstMissingPositive = function(nums) {
//     let n = nums.length;
//     // To mark the occurrence of elements
//     let present = new Array(n+1);

//     for(let i=0;i<n+1;i++)
//     {
//         present[i]=false;
//     }
//     // Mark the occurrences
//     for (let i = 0; i < n; i++)
//     {
//         // Only mark the required elements
//         // All non-positive elements and
//         // the elements greater n + 1 will never
//         // be the answer
//         // For example, the array will be {1, 2, 3}
//         // in the worst case and the result
//         // will be 4 which is n + 1
//         if (nums[i] > 0 && nums[i] <= n)
//         {
//             present[nums[i]] = true;
//         }
//     }
//     // Find the first element which didn't
//     // appear in the original array

//     for (let i = 1; i <= n; i++)
//     {
//         console.log(present[i]);
//         if (!present[i])
//         {
//             console.log(i);
//             return i;
//         }
//     }
//     // If the original array was of the
//     // type {1, 2, 3} in its sorted form
//     console.log(n+1);
//     return n + 1;
// }
// const arr = [11,2,5]
// firstMissingPositive(arr)

var firstMissingPositive = function (nums) {
  const n = nums.length;
  let present = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    present[i] = false;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0 && nums[i] <= n) {
      present[nums[i]] = true;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (!present[i]) {
      console.log(i);
      return i;
    }
  }
  console.log(n + 1);
  return n + 1;
};
const arr = [11, 2, 5];
firstMissingPositive(arr);
