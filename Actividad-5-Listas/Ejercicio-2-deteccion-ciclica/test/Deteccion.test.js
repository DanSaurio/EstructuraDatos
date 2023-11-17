const {Nodo, detectarCiclo, Detectar} = require('../Deteccion');
const assert = require('assert');

//creamos una lista que NO tiene ciclo. 
describe('Detección de ciclo en lista By DanTeran', function () {
    it('debe detectar un ciclo en una lista con ciclo', function () {
        const listaConCiclo = new Nodo(1);
        listaConCiclo.next = new Nodo(2);
        listaConCiclo.next.next = new Nodo(3);
        listaConCiclo.next.next.next = new Nodo(4);
        listaConCiclo.next.next.next = listaConCiclo;  // Crear un ciclo

        const resultado = Detectar(listaConCiclo);
        assert.strictEqual(resultado, true);
        console.log(listaConCiclo);
    });
    it('debe detectar un ciclo en una lista con ciclo', function () {
        const listaConCiclo = new Nodo(2);
        listaConCiclo.next = new Nodo(3);
        listaConCiclo.next.next = new Nodo(4);
        listaConCiclo.next.next.next = new Nodo(5);
        listaConCiclo.next.next.next = listaConCiclo;  // Crear un ciclo

        const resultado = Detectar(listaConCiclo);
        assert.strictEqual(resultado, true);
        console.log(listaConCiclo);
    });
})