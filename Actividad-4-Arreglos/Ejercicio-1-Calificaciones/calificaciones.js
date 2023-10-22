function Calificacion(str) {
  let aprobados = 0;
  let reprobados = 0;
  let sumCalificaciones = 0;

  for (let i = 0; i < calificaciones.length; i++) {
    const calificacion = calificaciones[i];
    sumCalificaciones += calificacion;

    if (calificacion >= 60) {
      aprobados++;
    } else {
      reprobados++;
    }
  }

  const promedio = sumCalificaciones / calificaciones.length;

  return {
    aprobados,
    reprobados,
    promedio,
  };
}

const calificaciones = [80, 70, 55, 90, 40];
const resultados = Calificacion(calificaciones);

console.log("Calificaciones aprobadas:", resultados.aprobados);
console.log("Calificaciones reprobadas:", resultados.reprobados);
console.log("Promedio:", resultados.promedio);
  

  export { Calificacion }