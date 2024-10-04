


let imagenes = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
let contador = 0;

const carrouselImg = document.getElementById('carrousel-img');
const anterior = document.getElementById('prev');
const siguiente = document.getElementById('next');

// Función para actualizar la imagen del carrusel
function actualizarImagen() {
    carrouselImg.src = imagenes[contador];
}

// Evento para el botón anterior
anterior.addEventListener('click', () => {
    contador = (contador - 1 + imagenes.length) % imagenes.length;
    actualizarImagen();
    reiniciarAuto(); // Reiniciar el autoavance
});

// Evento para el botón siguiente
siguiente.addEventListener('click', () => {
  contador = (contador + 1) % imagenes.length;
    actualizarImagen();
    reiniciarAuto(); // Reiniciar el autoavance
});

// Función para mover automáticamente el carrusel
let autoAdvance = setInterval(() => {
    contador = (contador + 1) % imagenes.length;
    actualizarImagen();
}, 3000); // Cambia cada 3000 ms (3 segundos)

// Función para reiniciar el autoavance
function reiniciarAuto() {
    clearInterval(autoAdvance); // Detener el avance automático
    autoAdvance = setInterval(() => {
        contador = (contador + 1) % imagenes.length;
        actualizarImagen();
    }, 1000); // Reiniciar el intervalo
}



const form = document.getElementById('contactForm');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const direccion = document.getElementById('direccion').value;
  const email = document.getElementById('email').value;
  const celu = document.getElementById('celu').value;

  if (nombre && direccion && email && celu) {
    const resultHtml = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Direccion:</strong> ${direccion}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Celular:</strong> ${celu}</p>
    `;
    result.innerHTML = resultHtml;
  } else {
    result.innerHTML = '<p style="color:red;">Por favor, complete todos los campos correctamente.</p>';
  }
});
