const arr = [2, 5, 7, 2, 1, 9, 8];
const n = arr.length;

for(let i=1;i<n;i++){
    let temp = arr[i]
    let j = i-1
    while(j>=0 && arr[j]<temp){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1] = temp
}
console.log(arr);