document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const buttons = document.querySelectorAll(".page-btn");
  const nextButton = document.getElementById("next-btn");
  let currentPage = 1;

  function scrollToPage(page) {
    const offset = (page - 1) * -100;
    carousel.style.transform = `translateX(${offset}vw)`;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = parseInt(button.dataset.page);
      scrollToPage(currentPage);
    });
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < 3) {
      currentPage++;
      scrollToPage(currentPage);
    }
  });
});




const satelliteData = [
    {
      title: "Satélites Astronómicos",
      description: "Los satélites astronómicos se utilizan para estudiar estrellas, planetas y otros cuerpos celestes. Capturan imágenes del universo en diferentes longitudes de onda, lo que permite a los astrónomos investigar el cosmos con mayor profundidad.",
      image: "../assets/images/satelite_astronomico.jpg",
      video: "https://www.youtube.com/embed/21X5lGlDOfg"
    },
    {
      title: "Satélites Meteorológicos",
      description: "Los satélites meteorológicos se utilizan para monitorear el clima y los patrones atmosféricos en la Tierra. Proporcionan información crucial para la predicción del tiempo y el estudio de eventos climáticos extremos.",
      image: "../assets/images/satelite_meteorologico.jpg",
      video: "https://www.youtube.com/embed/xLApvDdmh44"
    },
    {
      title: "Satélites de Comunicaciones",
      description: "Estos satélites permiten la transmisión de datos, imágenes y voz a nivel mundial. Son fundamentales para la televisión, internet y telefonía global.",
      image: "../assets/images/satelite_comunicaciones.jpg",
      video: "https://www.youtube.com/embed/rCS7yzpGxzk"
    }
  ];

  let currentIndex = 0;
  document.getElementById("next-btn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % satelliteData.length;
    document.getElementById("satellite-title").textContent = satelliteData[currentIndex].title;
    document.getElementById("satellite-description").textContent = satelliteData[currentIndex].description;
    document.getElementById("satellite-image").src = satelliteData[currentIndex].image;
    document.getElementById("satellite-video").src = satelliteData[currentIndex].video;
  });

