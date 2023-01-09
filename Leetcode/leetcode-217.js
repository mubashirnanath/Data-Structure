const a = [1,2,3,4,5,6,7]

function find(a){
    for(let i=0;i<a.length-1;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]==a[j]){
                return console.log(true);
                break
            }
        }
    }
    return console.log(false);
}
find(a)