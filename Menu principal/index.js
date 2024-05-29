const ubicacion = document.querySelector('.menu-ubi');
const cardUbicacion = document.querySelector('.card');
const cerrar = document.querySelector('.icon-close');

ubicacion.addEventListener('click', function() {
    cardUbicacion.style.opacity = "1";
    cardUbicacion.style.zIndex = "2";
});

cerrar.addEventListener('click', function() {
    cardUbicacion.style.opacity = "0";
    cardUbicacion.style.zIndex = "-1";
});

// carrito 
const carrito =document.querySelector('.icon-car');
const cardCarrito=document.querySelector('.card-carrito');
const cerrar2 = document.querySelector('div[class="icon-close 2"]');
carrito.addEventListener('click', function() {
    cardCarrito.style.opacity = "1";
    cardCarrito.style.zIndex = "2";
   
});


cerrar2.addEventListener('click', function() {
    cardCarrito.style.opacity = "0";
    cardCarrito.style.zIndex = "-1";
    
});

//abrir pag

// const mcDonal=document.querySelector('.mcDonald')
// mcDonal.addEventListener('click',function()
// {

// })