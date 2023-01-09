

function search(arr,n,x) {
   for(let i=0;i<n-1;i++){
    if(arr[i]==x){
        return console.log(i); 
    }
   }
   return console.log(-1);
}

let arr = [1,2,3,4,5]
let n = arr.length
let x = 1
search(arr,n,x)