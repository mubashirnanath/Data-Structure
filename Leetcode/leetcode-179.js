const a = [3,30,34,5,9]


const b= a.toString()
const regex = /[^a-z0-9]/g
const result= b.replace(regex,"")
const g = result.split('')

for(let i=0;i<g.length-1;i++){
    for(let j=i+1;j<g.length;j++){
        if(g[i]<g[j]){
            let temp = g[i]
            g[i]=g[j]
            g[j]=temp
        }
    }
}

console.log(g.join(''));