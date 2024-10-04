let images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
let currentImageIndex = 0;

const carrouselImg = document.getElementById('carrousel-img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  carrouselImg.src = images[currentImageIndex];
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  carrouselImg.src = images[currentImageIndex];
});


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
