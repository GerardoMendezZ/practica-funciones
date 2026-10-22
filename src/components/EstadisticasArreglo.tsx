//EstadisticasArreglo.tsx
export const EstadisticasArreglo = () => {
  // Sume los numeros y saca el promedio
  const calcularPromedio = (nums: number[]): number => {
    if (nums.length === 0) {
      return 0;
    }
    const suma = nums.reduce((total, num) => total + num, 0);
    return suma / nums.length;
  };

  // Busca el numero mas grande
  const encontrarMaximo = (nums: number[]): number => {
    return Math.max(...nums);
  };

  // Busca el numero mas chico
  const encontrarMinimo = (nums: number[]): number => {
    return Math.min(...nums);
  };

  const numeros = [8, 3, 15, 7, 22, 11, 4];

  return (
    <div>
      <h3>Estadísticas</h3>
      <p>Números: [{numeros.join(', ')}]</p>
      <p>Promedio: {calcularPromedio(numeros).toFixed(2)}</p>
      <p>Máximo: {encontrarMaximo(numeros)}</p>
      <p>Mínimo: {encontrarMinimo(numeros)}</p>
    </div>
  );
};