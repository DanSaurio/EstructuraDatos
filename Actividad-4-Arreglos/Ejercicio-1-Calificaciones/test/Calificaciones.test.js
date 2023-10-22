import { Calificacion } from '../calificaciones'

describe('Pruebas para calcularAprobadosReprobadosPromedio', () => {
  it('debería calcular aprobados, reprobados y promedio correctamente', () => {
    const calificaciones = [80, 70, 55, 90, 40];
    const resultados = Calificacion(calificaciones);

    expect(resultados.aprobados).toBe(3);
    expect(resultados.reprobados).toBe(2);
    expect(resultados.promedio).toBe(67);
  });
});

