var array = [1,5,7,8,9,15];
/*Bài 1*/
var arrayFilter= array.filter(function(value){
    return value%2==0
})
console.log(arrayFilter);
/*Bài 2*/
var arrayFilter = array.filter(function(value){
    return value%2 ==1
})
console.log(arrayFilter);
/*Bài 3*/
var arrayFilter = array.filter(function(value){
    return value >=5
})
console.log(arrayFilter);
/*Bài 4*/
var arrayFilter = array.filter(function(value){
    return value%5 ==0
})
console.log(arrayFilter);
/*Bài 5*/
var arrayFilter = array.filter(function(value){
    return value>5
})
var arrayMap = arrayFilter.map(function(value){
    return value+1
})
console.log(arrayMap)