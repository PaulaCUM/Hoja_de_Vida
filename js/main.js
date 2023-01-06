/* ------------------- CARRUSEL ------------------- */
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


/* ------------------- ANIMACION IMAGENES DE NIVEL ------------------- */
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
    rootMargin: '200px 0px 50px 0px', //Este es el margen que se usara para detectar cuando la imagen se debe comenzar a animar
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


/* ------------------- REFERENCIAS PERSONALES ------------------- */
// Animacion de cada una de las tarjetas de referencias al pasar el mouse por encima

const card1 = document.getElementById("Card1");
const card2 = document.getElementById("Card2");
const card3 = document.getElementById("Card3");

// TARJETA 1
card1.addEventListener('mouseover', (e) => {
    card1.style.setProperty('--animate-duration','.5s');
    card1.classList.add('animate__pulse');
})

card1.addEventListener('mouseout', (e) => {
    card1.classList.remove('animate__pulse');
})

// TARJETA 2
card2.addEventListener('mouseover', (e) => {
    card2.style.setProperty('--animate-duration','.5s');
    card2.classList.add('animate__pulse');
})

card2.addEventListener('mouseout', (e) => {
    card2.classList.remove('animate__pulse');
})

// TARJETA 3
card3.addEventListener('mouseover', (e) => {
    card3.style.setProperty('--animate-duration','.5s');
    card3.classList.add('animate__pulse');
})

card3.addEventListener('mouseout', (e) => {
    card3.classList.remove('animate__pulse');
})

/* ------------------- FORMULARIO ------------------- */
// Animacion de cada uno de los inputs al pasar el mouse por encima

const email = document.getElementById("email");
const empresa = document.getElementById("Empresa");
const telefono = document.getElementById("Telefono");

// INPUT 1
email.addEventListener('mouseover', (e) => {
    email.style.setProperty('--animate-duration','.3s');
    email.classList.add('animate__pulse');
})

email.addEventListener('mouseout', (e) => {
    email.classList.remove('animate__pulse');
})

// INPUT 2
empresa.addEventListener('mouseover', (e) => {
    empresa.style.setProperty('--animate-duration','.3s');
    empresa.classList.add('animate__pulse');
})

empresa.addEventListener('mouseout', (e) => {
    empresa.classList.remove('animate__pulse');
})

// INPUT 3
telefono.addEventListener('mouseover', (e) => {
    telefono.style.setProperty('--animate-duration','.3s');
    telefono.classList.add('animate__pulse');
})

telefono.addEventListener('mouseout', (e) => {
    telefono.classList.remove('animate__pulse');
})


/* ------------------- MENU DESPLEGABLE Y ADAPTABLE ------------------- */
$(function(){
    var header = document.getElementById('header');
    var headroom = new Headroom(header);

    headroom.init();

    // ---------> Menu responsive

    // Calcular el ancho de la pagina
    var ancho = $(window).width(),
        enlaces = $("#enlaces"),
        btnMenu = $("#btn-menu"),
        iconoB = $("#btn-menu .iconoBars");
        iconoX = $("#btn-menu .iconoX");
        // header = $('#header');

    // Vamos a hacer un condicional que detecte cuando el tamaño de la pagina sea menor a 1000px
    // Esta seccion del codigo se hace para detectar el tamaño inicial de la pantalla y asi
    // saber si se deme mostrar u ocultar el menu
    if(ancho < 1000){
        enlaces.hide();
        iconoB.show();
        iconoX.hide();
    }

    // Esta sección es para intercambiar entre barras y X, segun si se despliega u ocultan los links del menu
    btnMenu.on('click', function(e){
        enlaces.slideToggle();

        let iconoB = $("#btn-menu .iconoBars");
        let iconoX = $("#btn-menu .iconoX");
        iconoX.toggle('slow');
        iconoB.toggle('slow');
    })

    // Esta funcion se ejecuta cada vez que se detecta un cambio de tamaño o resize de pantalla
    // Se utiliza para ajustar, automaticamente, el icono de barras y los enlaces segun el resize
    $(window).on('resize', function(){
        if($(this).width() > 1000){
            enlaces.show();
            iconoB.hide();
            iconoX.hide();
        } else {
            enlaces.hide();
            iconoB.show();
            iconoX.hide();
            // header.style.height('150px');
        }
    })
});