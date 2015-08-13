//out puts a reversed version of array
function reverseArray(arr){
    var c =  arr.length - 1;
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[c]);
        c--
    }
    return newArr
}
console.log(reverseArray([1,2,3,4]))
