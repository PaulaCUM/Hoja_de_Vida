// Funcion para controlar y programar el carrusel de imagenes
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarrusel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarrusel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
    });
});

// Leer la imagen - Funcion tipo flecha
const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');
const imagen4 = document.getElementById('imagen4');
const imagen5 = document.getElementById('imagen5');
const imagen6 = document.getElementById('imagen6');
const imagen7 = document.getElementById('imagen7');
const imagen8 = document.getElementById('imagen8');
const imagen9 = document.getElementById('imagen9');
const imagen10 = document.getElementById('imagen10');

// Se reciben 2 parametros: Entradas y observador
const cargarImagen = (entradas, observador) => {
    // Comprobar si una imagen entra al viewport
    entradas.forEach(entrada => {
        if (entrada.isIntersecting){
            // console.log('La imagen esta en el viewport');
            entrada.target.classList.add('visible'); //Se ejecuta una funcion por cada imagen que cambie su estado a "visible"
        } else {
            entrada.target.classList.remove('visible'); //Se ejecuta una funcion por cada imagen que cambie su estado a "NO visible"
        }
    });
}

// Observador que vigilará la entrada de las imagenes
// Los 2 argumentos de entrada son:
// * Funcion que se va a ejecutar
// * los parametros que ayudan a determinar cuando la imagen ha entrado en pantalla
const observador = new IntersectionObserver(cargarImagen, {
    root: null, //con esto se hace referencia al viewport (toda la ventada)
    rootMargin: '200px 0px 0px 0px', //Este es el margen que se usara para detectar cuando la imagen se debe comenzar a animar
    threshold: 0.8 // de 0.0 (todo fuera) a 1.0 (todo dentro) = Se usa para determinar si la animacion se ejecuta cuando toda la imagen este dentro del margen, o una parte de ella
});

// Este va a observar cuando la imagen entre a la pagina segun el threshold
// Se ejecuta cuando entra y sale la imagen
observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);
observador.observe(imagen4);
observador.observe(imagen5);
observador.observe(imagen6);
observador.observe(imagen7);
observador.observe(imagen8);
observador.observe(imagen9);
observador.observe(imagen10);
