// Ejemplo de funcionalidad para un botón
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      ;
    });
  });
  

// Movimiento de direccion hacia la zona de Servicios.


document.getElementById("scrollbutton").addEventListener("click", function(){
    document.getElementById("services").scrollIntoView({behaviorL: "smooth"});
});

