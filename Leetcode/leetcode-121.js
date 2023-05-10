const maxProfit = (prices)=>{
    let minPrice = Infinity
    let maxProfit = 0
    for(let i=0;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice=prices[i]
        }else if(prices[i]-minPrice>maxProfit){
            maxProfit = prices[i]-minPrice
        }
    }
    return maxProfit
}
const prices = [7,1,5,8,2,4]
console.log(maxProfit(prices)) // 7