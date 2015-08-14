//creates hash chess board
var size = 8;
var chess = "";
for (var a = 0; a < size; a++) {
  for (var b = 0; b < size; b++) {
    if ((a + b) % 2 == 0){
      board += " ";
    }
    else{
      board += "#";
    }
  }
  board += "\n";
}
console.log(chess);
