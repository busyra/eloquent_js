//prints numbers 1...100 and replaces with fizz when divisible by 3 and buzz when divisible 5 and fizzbuzz when divisible by both
for (var counter = 1; counter <= 100; counter++){
  if (counter % 3 == 0 && counter % 5 == 0) {
    console.log("fizzbuzz");
  }else if(counter % 3 == 0){
    console.log("fizz");
  }else if(counter % 5 == 0){
    console.log("buzz");
  }else{
    console.log(counter)
  }
}
