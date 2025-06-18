const fs = require('fs');

// Leer el archivo
fs.readFile('./a.txt', 'utf8', (errorLectura, datos) => {
  if (errorLectura) {
    return console.error('Error al leer:', errorLectura);
  }

  // Concatenar nueva fecha
  const nuevaFecha = '\n' + new Date().toString();
  const nuevoContenido = datos + nuevaFecha;

  // Escribir el contenido actualizado
  fs.writeFile('./a.txt', nuevoContenido, (errorEscritura) => {
    if (errorEscritura) {
      return console.error('Error al escribir:', errorEscritura);
    }
    console.log('Archivo actualizado con callback.');
  });
});
