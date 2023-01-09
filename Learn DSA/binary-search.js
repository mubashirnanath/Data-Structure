function binary(arr,target){
    let l=0
    let r=arr.length-1
   
   

     while(l<=r){
        let mid=Math.floor((l+r)/2)
        if(target===arr[mid]){
            return console.log(mid);
        }else if(target<arr[mid]){
            r=mid-1
        }else{
            l=mid+1
        }
    }
    return console.log(-1);
    
}
binary([1,2,3,5,5,6],4)