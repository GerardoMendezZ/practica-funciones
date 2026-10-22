//CarritoCompras.tsx
export const CarritoCompras = () => {
  // Multiplica precio por cantidad
  const calcularSubtotal = (precio: number, cantidad: number): number => {
    return precio * cantidad;
  };

  // Calcula el 16% de IVA
  const calcularIVA = (subtotal: number): number => {
    return subtotal * 0.16;
  };

  // Suma el subtotal con el IVA
  const calcularTotal = (subtotal: number): number => {
    return subtotal + calcularIVA(subtotal);
  };

  // Le da formato con signo de peso y 2 decimales
  const formatearPrecio = (precio: number): string => {
    return `$${precio.toFixed(2)}`;
  };

  const carrito = [
    { producto: "Laptop", precio: 15000, cantidad: 1 },
    { producto: "Mouse", precio: 350, cantidad: 2 },
    { producto: "Teclado", precio: 800, cantidad: 1 }
  ];

  // Suma los subtotales de la lista
  const subtotalGeneral = carrito.reduce(
    (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad), 0
  );

  return (
    <div>
      <h3>Carrito de Compras</h3>
      {carrito.map((item) => (
        <p key={item.producto}>
          {item.producto} x{item.cantidad} = {formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}
        </p>
      ))}
      <hr />
      <p>Subtotal: {formatearPrecio(subtotalGeneral)}</p>
      <p>IVA (16%): {formatearPrecio(calcularIVA(subtotalGeneral))}</p>
      <p><strong>Total: {formatearPrecio(calcularTotal(subtotalGeneral))}</strong></p>
    </div>
  );
};