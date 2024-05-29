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

//agregar carrito
// const agregar =document.querySelector('.bi-plus-circle')
const agregar =document.querySelectorAll('.bi-plus-circle')
const cardAgregar=document.querySelector('.card-agregar')
const cerrar3 = document.querySelector('.icon-close-3')
const botonSi =document.querySelector('.botonSi')
const botonNo =document.querySelector('.botonNo')
const iconAgregar =document.querySelector('.icon-agregar')
const divParrafo =document.querySelector('.card-agregar')
let parrafo=divParrafo.querySelector('p')

agregar.forEach(function(boton){
 boton.addEventListener('click',function()
 {
     cardAgregar.style.opacity = "1";
     cardAgregar.style.zIndex = "2";
     iconAgregar.className=''
     iconAgregar.className='bi bi-cart3 icon-agregar'
     parrafo.textContent='¿Deseas agregarlo al carrito?'  
     botonSi.style.opacity = "1";
     botonNo.style.opacity = "1";
 
 })
})

cerrar3.addEventListener('click', function() {
  
    cardAgregar.style.opacity = "0";
    cardAgregar.style.zIndex = "-1";
  
});



botonSi.addEventListener('click',function()
{
   
    
        iconAgregar.className=''
        iconAgregar.className='bi bi-check'
        iconAgregar.style.fontSize = '100px';
        iconAgregar.style.fontWeight = '1000';
        iconAgregar.style.color = 'var(--color-icon)';
        parrafo.textContent='Agregado con exito'
     
        botonSi.style.opacity = "0";
        botonNo.style.opacity = "0";   
       
    
})
botonNo.addEventListener('click',function()
{
       
    cardAgregar.style.opacity = "0";
    cardAgregar.style.zIndex = "-1";  
           
})


