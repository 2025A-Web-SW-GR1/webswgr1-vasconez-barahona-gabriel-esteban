const fs = require('fs');

function leerArchivo(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, datos) => {
      if (err) reject(err);
      else resolve(datos);
    });
  });
}

function escribirArchivo(path, contenido) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, contenido, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// Usar async/await
async function actualizarArchivo() {
  try {
    const datos = await leerArchivo('./a.txt');
    const nuevaFecha = '\n' + new Date().toString();
    const nuevoContenido = datos + nuevaFecha;
    await escribirArchivo('./a.txt', nuevoContenido);
    console.log('Archivo actualizado con async/await.');
  } catch (error) {
    console.error('Error en async/await:', error);
  }
}

actualizarArchivo();
