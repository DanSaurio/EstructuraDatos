class Nodo{
  constructor(valor){
      this.valor = valor; 
      this.next = null; 
  }

}
function Detectar(lista){
  let l1 = lista; 
  let l2 = lista; 

  while(l2 !== null && l2.next !== null){
      if(l1 === l2){
          return true; 
      }
  }
  return false; 
}
module.exports = {Nodo,Detectar};