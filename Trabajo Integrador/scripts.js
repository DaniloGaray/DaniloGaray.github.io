


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
  let validacionEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
function validarReserva(){

  let ban = false;

  let nom = document.getElementById('nombreA');
  let fecha = document.getElementById('fecha');
  let personas = document.getElementById('personas');
  let correo = document.getElementById('correo');
  let tel = document.getElementById('tel');

  let validacionNombreA =/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/; 
  let validacionCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let validacionCelular = /^[0-9]{7,15}$/;

  

  if (!validacionNombreA.test(nom.value)) {
    document.getElementById('errorNombreA').style.display = 'block';
    document.getElementById('nombreA').style.border = '1px solid red';
    ban = true;
  }
  let hoy = new Date();
  let fechaSeleccionada = new Date(fecha.value);
  hoy.setHours(0,0,0,0)

  if (fechaSeleccionada < hoy) {
    document.getElementById('errorFecha').style.display = 'block';
    document.getElementById('fecha').style.border = '1px solid red';
    ban = true;
  }
  if (personas.value < 1 || personas.value > 20 || personas.value === "") {
    document.getElementById('errorPersonas').style.display = 'block';
    document.getElementById('personas').style.border = '1px solid red';
    ban = true;
  }

  if (!validacionCorreo.test(correo.value)) {
    document.getElementById('errorCorreo').style.display = 'block';                
    document.getElementById('correo').style.border = '1px solid red';
    ban = true;
  }

  if (!validacionCelular.test(tel.value)) {
    document.getElementById('errorTel').style.display = 'block';
    document.getElementById('tel').style.border = '1px solid red';
    ban = true;
  }

  if (ban === false) {
    let result = document.getElementById('resultado');
    let texto = document.createElement('h2');
    texto.innerHTML = 'Su reserva se realizo con exito para el dia '+fecha.value+', a nombre de '+nom.value+', para '+personas.value+' personas!';
    result.appendChild(texto);
    result.style.display = 'block';

    nombreA.value="";
    fecha.value="";
    personas.value="";
    correo.value="";
    tel.value="";
  }
  return false;

}
function limpiarR(event){
  document.getElementById('errorNombreA').style.display = 'none';
  document.getElementById('nombreA').style.border = ' 1px solid #ccc';

  document.getElementById('errorFecha').style.display = 'none';
  document.getElementById('fecha').style.border = ' 1px solid #ccc';

  document.getElementById('errorPersonas').style.display = 'none';
  document.getElementById('personas').style.border = ' 1px solid #ccc';

  document.getElementById('errorCorreo').style.display = 'none';
  document.getElementById('correo').style.border = '1px solid #ccc';

  document.getElementById('errorTel').style.display = 'none';
  document.getElementById('tel').style.border = '1px solid #ccc';

  document.getElementById('resultado').style.display = 'none';
}
