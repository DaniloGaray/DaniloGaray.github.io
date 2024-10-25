


let imagenes = ['img/imagen1gourmet.jpeg', 'img/imagen2gourmet.jpg', 'img/imagen3gourmet.jpg', 'img/imagen4gourmet.jpg', 'img/imagen5gourmet.jpg'];
let contador = 0;

let carrouselImg = document.getElementById('carrousel-img');
let anterior = document.getElementById('prev');
let siguiente = document.getElementById('next');


function actualizarImagen() {
    carrouselImg.src = imagenes[contador];
}


anterior.addEventListener('click', () => {
    contador = (contador - 1 + imagenes.length) % imagenes.length;
    actualizarImagen();
    reiniciarAuto(); 
});


siguiente.addEventListener('click', () => {
  contador = (contador + 1) % imagenes.length;
    actualizarImagen();
    reiniciarAuto(); 
});


let autoAdvance = setInterval(() => {
    contador = (contador + 1) % imagenes.length;
    actualizarImagen();
}, 3000); 


function reiniciarAuto() {
    clearInterval(autoAdvance); 
    autoAdvance = setInterval(() => {
        contador = (contador + 1) % imagenes.length;
        actualizarImagen();
    }, 1000); 
}





function validar(){
  let bandera = false;

  let nombre = document.getElementById('nombre');
  let direccion = document.getElementById('direccion');
  let email = document.getElementById('email');
  let celu = document.getElementById('celu');

  let validacionNombre =/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;  
  let validacionDireccion = /^[A-Za-z0-9ÁÉÍÓÚáéíóúñÑ\s,'-]{5,100}$/;
  let validacionEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
;
  let validacionCelular = /^[0-9]{7,15}$/;

  if (!validacionNombre.test(nombre.value)) {
    document.getElementById('errorNombre').style.display = 'block';
    document.getElementById('nombre').style.border = '1px solid red';
    bandera=true;
  }

  if (!validacionDireccion.test(direccion.value)) {
    document.getElementById('errorDireccion').style.display = 'block';
    document.getElementById('direccion').style.border = '1px solid red';
    bandera=true;
  }

  if (!validacionEmail.test(email.value)) {
    document.getElementById('errorEmail').style.display = 'block';                
    document.getElementById('email').style.border = '1px solid red';
    bandera=true;
  }

  if (!validacionCelular.test(celu.value)) {
    document.getElementById('errorCelu').style.display = 'block';
    document.getElementById('celu').style.border = '1px solid red';
    bandera = true;
  }

  if (bandera === false) {
    let result = document.getElementById('result');
    let texto = document.createElement('h2');
    texto.innerHTML = 'Gracias '+ nombre.value+' por ponerte en contacto con Delicias Gourmet, pronto nos pondremos en contacto con '+ email.value+' .';
    result.appendChild(texto);
    result.style.display = 'block';

    nombre.value="";
    direccion.value="";
    email.value="";
    celu.value="";
  }
  return false;

}
function limpiar(event){
  document.getElementById('errorNombre').style.display = 'none';
  document.getElementById('nombre').style.border = ' 1px solid #ccc';

  document.getElementById('errorDireccion').style.display = 'none';
  document.getElementById('direccion').style.border = ' 1px solid #ccc';

  document.getElementById('errorEmail').style.display = 'none';
  document.getElementById('email').style.border = '1px solid #ccc';

  document.getElementById('errorCelu').style.display = 'none';
  document.getElementById('celu').style.border = '1px solid #ccc';

  document.getElementById('result').style.display = 'none';

  
}
