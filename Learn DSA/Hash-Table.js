// class HashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         this.table[index]= value
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i],this.table.length);
//             }
//         }
//     }
// }

// const table = new HashTable(50)
// table.set("name","Mubashir")
// table.set("age",15)
// table.display()




class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

   hash(key){
    let total = 0
    for(let i=0;i<key.length;i++){
        total += key.charCodeAt(i)
    }
    return total%this.size
   }
   set(key,value){
    const index = this.hash(key)
    // this.table[index]=value
    let bucket = this.table[index]
    if(!bucket){
        bucket = [[key,value]]
    }
    const sameKeyItem = bucket.find(item=>item[0]===key)
    if(sameKeyItem){
        bucket.push([key,value])
       
    }
   }
   get(key){
    const index = this.hash(key)
    // return this.table[index]
    const bucket = this.table[index]
    if(bucket){
        const sameKeyItem = bucket.find(item=>item[0]===key)
        return console.log(sameKeyItem[1]);
    }
    return console.log(undefined);
   }
   remove(key){
    const index = this.hash(key)
    // this.table[index] = undefined
    const bucket = this.table[index]
    if(bucket){
        const sameKeyItem = bucket.find(item=>item[0]===key)
        if(sameKeyItem){
            bucket.splice(bucket.indexOf(sameKeyItem),1)
        }
    }
   }
   display(){
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
            console.log(this.table[i]);
        } 
    }
   }
}

const a = new HashTable(50)

a.set("name",'mubashir')
a.set("hai",'hasim')
a.display()