// Reverse String

const s = ["h","e","l","l","o"]

let i=0
    while(i<=s.length-1-i){
        let temp = s[i]
        s[i]=s[s.length-1-i]
        s[s.length-1-i]=temp
        i++
    }
    console.log(s);
