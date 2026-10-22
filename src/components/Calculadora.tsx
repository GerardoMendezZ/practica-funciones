// Calculadora.tsx
export const Calculadora = () => {
  // Suma dos numeros
  const sumar = (a: number, b: number): number => a + b;

  // Resta dos numeros
  const restar = (a: number, b: number): number => a - b;

  // Multiplica dos numeros
  const multiplicar = (a: number, b: number): number => a * b;

  // Divide dos numeros y revisa si es cero
  const dividir = (a: number, b: number): number => {
    if (b === 0) {
      return 0;
    }
    return a / b;
  };

  const a = 15;
  const b = 4;

  return (
    <div>
      <h3>Calculadora</h3>
      <p>{a} + {b} = {sumar(a, b)}</p>
      <p>{a} - {b} = {restar(a, b)}</p>
      <p>{a} × {b} = {multiplicar(a, b)}</p>
      <p>{a} ÷ {b} = {dividir(a, b).toFixed(2)}</p>
    </div>
  );
};