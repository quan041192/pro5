var array = [1,5,7,8,9,15,8]
// for(var i=0;i<=array.length-1;i++){
//     array[i] = array[i]*2;
//     console.log(array[i]);
// }
// for(var i=0;i<=array.length-1;i++){
//     if(array[i]%2==0){
//         console.log(array[i]);
//     }
// }
// for(var i=0;i<=array.length-1;i++){
//     if(array[i]%2==1){
//         console.log(array[i]);
//     }
// }
// for(var i=0;i<=array.length-1;i++){
//     if(array[i]>=5){
//         console.log(array[i]);
//     }
// }
// var sum = 0;
// for(var i=0;i<=array.length-1;i++){
//     if(array[i]%5==0){
//         sum += array[i]
//     }
// }
// console.log(sum);
// var tich = 1;
// for(var i=0;i<=2;i++){
//     tich *= array[i];
// }
// console.log(tich);
// var tich = 1;
// for(var i=0;i<=array.length-1;i++){
//     if(i<=2){
//         tich *= array[i];
//     }
// }
// console.log(tich);
// var dem = 0;
// for(var i=0;i<=array.length-1;i++){
//     if(array[i] == 5){
//         ++dem
//     }
// }
// if(dem>=1){
//     console.log("Có phần tử bằng 5")
// }
// else{
//     console.log("Không có phần tử bằng 5")
// }
// for(var i=0;i<=array.length-1;i++){
//     if(array[i]==8){
//         console.log("Vị trí số 8 đầu tiên là:"+i);
//         break;
//     }
// }
// var dem = 0;
// for(var i=0;i<=array.length-1;i++){
//     if(array[i]==8){
//         dem++;
//     }
// }
// console.log("Số phần tử 8 trong mảng là:"+dem);
// var tich = 1;
// for(var i=0;i<=array.length-1;i++){
//     if(array[i]!=8){
//         tich *= array[i];
//     }
// }
// console.log(tich);
var tong = 0;
for(var i = array.length-1;i>=array.length-3;i--){
    tong += array[i]
}
console.log(tong);