//ValidadorEdad.tsx
export const ValidadorEdad = () => {
  // Checa si es mayor de 18
  const esMayorDeEdad = (edad: number): boolean => {
    return edad >= 18;
  };

  // Retorna el mensaje dependiendo la edad
  const obtenerMensaje = (edad: number): string => {
    if (esMayorDeEdad(edad)) {
      return "Puede votar";
    } else {
      const faltan = 18 - edad;
      return `Le faltan ${faltan} años`;
    }
  };

  const edades = [15, 18, 25, 12];

  return (
    <div>
      <h3>Validador de Edad</h3>
      {edades.map((edad, index) => (
        <p key={index}>Edad {edad}: {obtenerMensaje(edad)}</p>
      ))}
    </div>
  );
};