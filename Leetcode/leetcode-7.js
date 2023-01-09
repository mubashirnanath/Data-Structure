// reverse integer

function reverse(num) {
        const hai = parseFloat(num.toString().split("").reverse().join(""))*Math.sign(num)
        console.log(hai);
   
}
reverse(-25.800)