// check wheather it is palindrome or not

const s = "A man, a plan, a canal: Panama"

const a = s.split(" ")
const c = a.join("")
const b = c.toLowerCase()
const regex = /[^a-z0-9]/g
const result= b.replace(regex,"")
console.log(result);

let l=0
let h=result.length-1
while(l<h){
     if(result[l++]!=result[h--]){
          return console.log(false);
     }
}
return console.log(true); 