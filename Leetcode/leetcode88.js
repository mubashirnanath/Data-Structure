const arr1 = [1,3,0,0,0]
const nums = [0,0,1,1,1,2,2,3,3,4]

nums.sort((a,b)=>a-b)
console.log(nums);
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j]){
           for(let k=i;k<nums.length;k++){
               nums[k] = nums[k+1] 
           }
           nums.length--
           i--
        }
    }
}

// let num1 = 4
// let num2 = 5

// for(i=0;i<num2;i++){
   
//     arr1.splice(num1+i,1,arr2[i])
// }

// arr1.sort((a,b)=>a-b)
// while(arr1[0]==0){
//     arr1.shift()
// }
console.log(nums);