let n=3
const a = 'a man is commming'
let q=''
const b = a.split(' ')
const c = b[n-1]
for(let i=0;i<c.length;i++){
    q += c[c.length-1-i]
}
b[n-1] = q

console.log(b.join(' '));