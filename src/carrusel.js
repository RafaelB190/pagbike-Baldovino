document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.getElementById("carousel-inner");

  if (!carouselInner) {
    console.error("Element with id 'carousel-inner' not found.");
    return;
  }

  const bikesCarousel = [
    { img: "bh-atom.jpeg", name: "BH Atom" },
    { img: "scott-aspect.jpeg", name: "Scott Aspect" },
    { img: "trek-marlin.jpeg", name: "Trek Marlin" },
    { img: "vairo-x3.jpeg", name: "Vairo X3" },
    { img: "venzo-nitro.jpeg", name: "Venzo Nitro" },
    { img: "slp-r5.jpeg", name: "SLP R5" },
  ];

  bikesCarousel.forEach((bike, index) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    if (index === 0) slide.classList.add("active");
    slide.innerHTML = `
          <img src="/public/img/${bike.img}" alt="${bike.name}" class="w-full h-auto object-cover cursor-pointer transition-opacity duration-500">
          <h3 class="text-center text-lg font-bold mt-2">${bike.name}</h3>
        `;

    slide.addEventListener("click", () => {
      window.location.href = `details.html?product=${bike.name}`;
    });

    carouselInner.appendChild(slide);
  });

  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
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
