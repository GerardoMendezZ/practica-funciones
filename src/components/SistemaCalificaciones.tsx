//SistemaCalificaciones.tsx
export const SistemaCalificaciones = () => {
  // Promedio de las calificaciones de un alumno
  const calcularPromedio = (calificaciones: number[]): number => {
    if (calificaciones.length === 0) {
      return 0;
    }
    const suma = calificaciones.reduce((acc, val) => acc + val, 0);
    return suma / calificaciones.length;
  };

  // Asigna letra dependiendo la calificacion
  const obtenerLetra = (promedio: number): string => {
    if (promedio >= 90) return "A";
    if (promedio >= 80) return "B";
    if (promedio >= 70) return "C";
    if (promedio >= 60) return "D";
    return "F";
  };

  // Revisa si paso la materia con 70 o mas
  const estaAprobado = (promedio: number): boolean => {
    return promedio >= 70;
  };

  const alumnos = [
    { nombre: "Ana", califs: [95, 88, 92] },
    { nombre: "Luis", califs: [70, 65, 72] },
    { nombre: "María", califs: [85, 90, 88] }
  ];

  return (
    <div>
      <h3>Sistema de Calificaciones</h3>
      {alumnos.map((alumno) => {
        const prom = calcularPromedio(alumno.califs);
        const letra = obtenerLetra(prom);
        const aprobo = estaAprobado(prom);

        return (
          <p key={alumno.nombre}>
            {alumno.nombre}: Promedio {prom.toFixed(1)} - Letra {letra} - {aprobo ? "Aprobado" : "Reprobado"}
          </p>
        );
      })}
    </div>
  );
};