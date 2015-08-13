//function sum adds all numbers in array to sum
function sum(arr){
    var sum = 0;
  for (var c = 0; c < arr.length; c++){
      sum+=arr[c];
  }
  return sum;
}
//adds numbers between x - y to arr and passes to sum
function range(x,y){
    var arr=[];
    for(var i = x; i < y + 1 ; i++){
        arr.push(i)
    }
    return arr
}
console.log(sum(range(1,10)))
