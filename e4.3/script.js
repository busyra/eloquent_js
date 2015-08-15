function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}
function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
