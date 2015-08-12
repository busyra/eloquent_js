//originally counts b's in string but updated to forward to countChar
function countBs(string){
    string = string.toUpperCase();
    // var counted = 0;
    // for (var i = 0; i < string.length; i++){
    //     if(string.charAt(i) == "B"){
    //         counted+=1;
    //     }
    // }
    // return counted;
    return countChar(string, "B");
}
// counts how many times character appears in string requires two variables
function countChar(string, char){
    string = string.toUpperCase();
    char = char.toUpperCase();
    var counted = 0;
    for (var i = 0; i < string.length; i++){
        if(string.charAt(i) == char){
            counted += 1;
        }
    }
    return counted;
}
console.log(countBs("bBc"));
console.log(countChar("1x2X3x4", "x"));
