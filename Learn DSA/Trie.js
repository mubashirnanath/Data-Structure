// class Node {
//   constructor(value) {
//     this.value = value;
//     this.isEndOfWord = false; // false by default, a green node means this flag is true
//     this.children = {}; // children are stored as Map, where key is the letter and value is a TrieNode for that letter
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new Node(null);
//   }

//   insert(word) {
//     let current = this.root;
//     // iterate through all the characters of word
//     for (let character of word) {
//       // if node doesn't have the current character as child, insert it
//       if (current.children[character] === undefined) {
//         current.children[character] = new Node(character);
//       }
//       // move down, to insert next character
//       current = current.children[character];
//     }
//     // mark the last inserted character as end of the word
//     current.isEndOfWord = true;
//   }

//   search(word) {
//     let current = this.root;
//     // iterate through all the characters of word
//     for (let character of word) {
//       if (current.children[character] === undefined) {
//         // could not find this character in sequence, return false
//         return false;
//       }
//       // move down, to match next character
//       current = current.children[character];
//     }
//     // found all characters, return true if last character is end of a word
//     return current.isEndOfWord;
//   }
// }

// const trie = new Trie();

// // insert few words
// console.log(trie.search("CATe"));
// trie.insert("CATe");
// trie.insert("DOG");
// console.log(trie.search("DOG"));
// console.log(trie);
// //   console.log(trie);

class Node{
    constructor(value) {
        this.value = value
        this.isEnd = false
        this.children = {}
    }
}

class Trie{
    constructor(){
        this.root = new Node(null)
    }
    insert(word){
        let current = this.root
        for(let char of word){
            if(current.children[char]===undefined){
                current.children[char] = new Node(char)
            }
            current = current.children[char]
        }
        current.isEnd = true
    }
    search(word){
        let current = this.root
        for(let char of word){
            if(current.children[char]===undefined){
                return false
            }
            current = current.children[char]
        }
        return current.isEnd
    }
}

const trie = new Trie()
trie.insert("word")
trie.insert("hai")
trie.insert("jai")
console.log(trie.root.children);
console.log(trie.search("word"));

