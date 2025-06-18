const fs = require('fs');

// Crear función para leer archivo con Promesa
function leerArchivo(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, datos) => {
      if (err) reject(err);
      else resolve(datos);
    });
  });
}

// Crear función para escribir archivo con Promesa
function escribirArchivo(path, contenido) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, contenido, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// Usar las promesas
leerArchivo('./a.txt')
  .then((datos) => {
    const nuevaFecha = '\n' + new Date().toString();
    const nuevoContenido = datos + nuevaFecha;
    return escribirArchivo('./a.txt', nuevoContenido);
  })
  .then(() => {
    console.log('Archivo actualizado con promesas.');
  })
  .catch((err) => {
    console.error('Error en la operación:', err);
  });
