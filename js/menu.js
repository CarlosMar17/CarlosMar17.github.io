const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function() {
          menu.classList.toggle("mostrar");
});

$(document).ready(function() {
    // Obtén la ruta actual, por ejemplo: /pages/Solar.html
    const currentPath = window.location.pathname.split("/").pop();
  
    // Recorre todos los enlaces del menú
    $(".menu a").each(function() {
      const linkPath = $(this).attr("href");
  
      // Si el enlace coincide con la ruta actual, añade la clase 'active'
      if (linkPath === currentPath) {
        $(this).addClass("active");
      }
    });
  });