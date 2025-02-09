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

// Movimiento de direccion hacia la zona de Servicios.
document.getElementById("scrollbutton2").addEventListener("click", function(){
  document.getElementById("services").scrollIntoView({behaviorL: "smooth"});
});

//pagina facturas//
document.addEventListener("DOMContentLoaded", function () {
  // Agrega la clase "visible" a los elementos cuando aparecen en la pantalla
  function revealOnScroll() {
      let benefits = document.querySelectorAll(".animate-benefit");
      let windowHeight = window.innerHeight;

      benefits.forEach(function (benefit) {
          let position = benefit.getBoundingClientRect().top;
          if (position < windowHeight - 50) {
               benefit.classList.add("visible");
          }
      });
  }
        
  // Llamar a la función cuando se haga scroll
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Para verificar al cargar la página
});


