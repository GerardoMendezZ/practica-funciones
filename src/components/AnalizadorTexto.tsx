//AnalizadorTexto.tsx

export const AnalizadorTexto = () => {
  // Cuenta cuantas palabras hay separando por espacios
  const contarPalabras = (texto: string): number => {
    if (texto.trim() === '') {
      return 0;
    }
    const palabras = texto.trim().split(/\s+/);
    return palabras.length;
  };

  // Cuenta las vocales simples y acentuadas presentes en el texto
  const contarVocales = (texto: string): number => {
    const coincidencia = texto.match(/[aeiouáéíóú]/gi);
    return coincidencia ? coincidencia.length : 0;
  };

  // Invierte los caracteres del texto con split, reverse y join
  const invertirTexto = (texto: string): string => {
    return texto.split('').reverse().join('');
  };

  // Texto de entrada del ejercicio
  const texto = "Hola mundo desde TypeScript";

  return (
    <div>
      <h3>Analizador de Texto</h3>
      <p>Texto: "{texto}"</p>
      <p>Palabras: {contarPalabras(texto)}</p>
      <p>Vocales: {contarVocales(texto)}</p>
      <p>Invertido: {invertirTexto(texto)}</p>
    </div>
  );
};