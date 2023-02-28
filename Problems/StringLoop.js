// Output = [ "javacript/",
// "javacript/nodejs/",
// "javacript/nodejs/reactjs/" ,
// "html/",
// "html/css/",
// "html/css/bootstrap/",
// "expressjs/",
// "expressjs/mongodb/",
// ]
let lang = [ "javascript/nodejs/reactjs/" , "html/css/bootstrap/" , "expressjs/mongodb/" ];

let output = [];
for (let i = 0; i < lang.length; i++) {
    let substrings = lang[i].split('/');
    for (let j = 0; j < substrings.length; j++) {
        let subString = "";
        for (let k = 0; k <= j; k++) {
            if(k===j){
                break;
            }
            subString += substrings[k] + "/";
        }
        output.push(subString);
    }
}
console.log(output);

// let output = []

// for(let i=0;i<lang.length;i++){
//     let substrings = lang[i].split("/")
//     console.log(substrings);
//     for(j=0;j<substrings.length;j++){
//         let subString = ''
//         for(let k=0;k<=j;k++){
//             subString+=substrings[k] + "/"
//         }
//         output.push(subString)
//     }
// }
// console.log(output);