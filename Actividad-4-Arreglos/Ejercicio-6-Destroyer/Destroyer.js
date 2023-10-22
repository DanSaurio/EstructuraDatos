/**
 * @function destroyed
 * @description  Se le proporcionará una matriz inicial como primer argumento de la función destructora, seguida de uno o más argumentos. Elimine todos los elementos de la matriz inicial que tengan el mismo valor que estos argumentos.
 * @param {Array} arr array with elements of any data type
 * @returns {Array} array with order elements
 * @see [Reverse](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays)
 * */

function Destroyer(arr){
  const valoresRemover = Object.values(arguments).slice(1);
  const valoresFiltrados = [];
  for(let i = 0; i < arr.length; i++){
      let elementosRemovidos = false;
      for(let j = 0; j < valoresRemover.length; j++){
          if(arr[i] === valoresRemover[j]){
              elementosRemovidos = true;
          }
      }
      if(!elementosRemovidos){
          valoresFiltrados.push(arr[i]);
      }
  }
  return valoresFiltrados;
}
export {Destroyer};