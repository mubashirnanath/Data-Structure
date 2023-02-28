var multiply = function(num1, num2) {
    const first = parseFloat(num1)
    const second = parseFloat(num2)
    const sum  = first*second
    return sum.toString()
};
console.log(multiply("2.5","4"));