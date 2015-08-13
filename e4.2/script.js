//out puts a reversed version of array
function reverseArray(arr){
  var c =  arr.length - 1;
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    newArr.push(arr[c]);
    c--;
  }
  return newArr;
}
//reverses actual array and returns array
function reverseArrayInPlace(arr){
  for(var i=0; i < Math.floor(arr.length/2); i++){
    var holder = arr[i];
    arr[i]=arr[arr.length -1-i];
    arr[arr.length -1-i] = holder;
 }
 return arr;
}
console.log(reverseArray([1,2,3,4]))
console.log(reverseArrayInPlace(["A","B","C","D","E","F","G"]))
