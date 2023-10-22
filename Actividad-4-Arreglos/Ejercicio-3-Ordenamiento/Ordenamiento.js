function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
function Ordenamiento(arr) {
  var cadena = arr.length;
  for (var i = 0; i < cadena - 1; i = i + 1) {
    var nuevaPosicion = i;
    for (var k = i + 1; k < cadena; k = k + 1) {
      if (arr[k] < arr[nuevaPosicion]) {
        nuevaPosicion = k;
      }
    }
    if (nuevaPosicion !== i) {
      swap(arr, i, nuevaPosicion);
    }
  }
}

export {Ordenamiento};
 