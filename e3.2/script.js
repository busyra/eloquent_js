// isEven non recursive function
// function isEven(x){
//     if (x % 2 === 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// isEven recursive function
function isEven(x) {
  if (x === 0){
    return true;
  }
  else if (x === 1){
    return false;
  }
  //converts negative number to positive
  else if (x < 0){
    return isEven(-x);
  }
  //recalls function until x = 1 or x = 0
  else{
    return isEven(x - 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// recursive factorial
// function factorial(x){
//     if (x == 0 || x == 1){
//         return x;
//     }
//     var result = x;
//
//     //while (x > 1){
//     //    result = result *(x-1)
//     //    x--
//     //}
//     return result * factorial(x-1)
// }
//
// factorial(5)
