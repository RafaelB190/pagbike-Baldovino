document.addEventListener("DOMContentLoaded", () => {
  const carruselContainer = document.getElementById("carrusel-container");
  const carruselInner = document.getElementById("carrusel-inner");

  const bicicletasCarrusel = [
    { img: "bh-atom.jpeg", nombre: "BH Atom" },
    { img: "scott-aspect.jpeg", nombre: "Scott Aspect" },
    { img: "trek-marlin.jpeg", nombre: "Trek Marlin" },
    { img: "vairo-x3.jpeg", nombre: "Vairo X3" },
    { img: "venzo-nitro.jpeg", nombre: "Venzo Nitro" },
    { img: "slp-r5.jpeg", nombre: "SLP R5" },
  ];

  bicicletasCarrusel.forEach((bici, index) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    if (index === 0) slide.classList.add("active");

    slide.innerHTML = `
        <img src="../public/img/${bici.img}" alt="${bici.nombre}" class="w-full h-64 object-cover cursor-pointer">
        <h3 class="text-center text-lg font-bold mt-2">${bici.nombre}</h3>
      `;

    slide.addEventListener("click", () => {
      window.location.href = `detalles.html?producto=${bici.img}`;
    });

    carruselInner.appendChild(slide);
  });

  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);
});
