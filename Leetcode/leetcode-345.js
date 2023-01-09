// Reverse vowels

var reverseVowels = function (s) {
    console.log(s);
  const arr = s.split("");

  let left = 0, right = arr.length;

  const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
while(left<right){
    if(vowels.indexOf(arr[left])===-1){
        left++
        continue
    }
    if(vowels.indexOf(arr[right])===-1){
        right--
        continue
    }

    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp

    left++
    right--
}
return console.log(arr.join(""));
}

const s = "hello"
reverseVowels(s)