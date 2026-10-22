//AplicadorDescuentos.tsx
export const AplicadorDescuentos = () => {
  // Recibe la funcion de descuento como callback
  const aplicarDescuento = (precio: number, calcularDescuento: (p: number) => number): number => {
    return precio - calcularDescuento(precio);
  };

  // Descuento del 10%
  const descuento10 = (p: number): number => p * 0.10;

  // Descuento del 25%
  const descuento25 = (p: number): number => p * 0.25;

  // Descuento de estudiante del 15%
  const descuentoEstudiante = (p: number): number => p * 0.15;

  const precio = 1000;

  return (
    <div>
      <h3>Aplicador de Descuentos</h3>
      <p>Precio original: ${precio}</p>
      <p>Con 10% off: ${aplicarDescuento(precio, descuento10)}</p>
      <p>Con 25% off: ${aplicarDescuento(precio, descuento25)}</p>
      <p>Descuento estudiante: ${aplicarDescuento(precio, descuentoEstudiante)}</p>
    </div>
  );
};