function generatesRandomNumber() {
    return Math.floor(Math.random()*900)+100
}
let arr = new Array()
for(var i = 1;i<=10;i++){
    var num = generatesRandomNumber()
    arr[i-1] = num
    console.log(i+" number is "+num)
}
var secondLargestNumber = arr.sort((a,b)=>{return b-a})[1]
var secondSmallestNumber = arr.sort((a,b)=>{return a-b})[1]
console.log("Second largest number of the array is :"+secondLargestNumber)
console.log("Second smallest number of the array is :"+secondSmallestNumber)