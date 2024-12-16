function showSubPage(page) {
  const pages = document.querySelectorAll(".subpage");
  pages.forEach((pageElement) => {
    pageElement.classList.remove("active");
  });

  const activePage = document.getElementById(page);
  if (activePage) {
    activePage.classList.add("active");
  } else {
    console.error(`No se encontró una subpágina con el ID: ${page}`);
  }
}

window.showSubPage = showSubPage;

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Mueve a la siguiente diapositiva
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Mueve a la diapositiva anterior
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  if (prevButton && nextButton) {
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  } else {
    console.error("Botones del carrusel no encontrados");
  }
});

// Productos
const products = [
  { name: "Trek Marlin", price: 1200, image: "./images/trek-marlin.jpeg" },
  {
    name: "Trek Procaliber",
    price: 2500,
    image: "./images/trek-procaliber.jpeg",
  },
  {
    name: "Trek X-Caliber",
    price: 2000,
    image: "./images/trek-x-caliber.jpeg",
  },
  { name: "BH Atom", price: 1600, image: "./images/bh-atom.jpeg" },
  { name: "BH Lynx", price: 2800, image: "./images/bh-lynx.jpeg" },
  { name: "BH Ultimate", price: 3500, image: "./images/bh-ultimate.jpeg" },
  { name: "Scott Aspect", price: 2200, image: "./images/scott-aspect.jpeg" },
  { name: "Scott Scale", price: 2400, image: "./images/scott-scale.jpeg" },
  { name: "Scott Spark", price: 3000, image: "./images/scott-spark.jpeg" },
  { name: "SLP R5", price: 1400, image: "./images/slp-r5.jpeg" },
  { name: "SLP S6", price: 1800, image: "./images/slp-s6.jpeg" },
  { name: "SLP X3", price: 2000, image: "./images/slp-x3.jpeg" },
  { name: "Vairo Storm", price: 1300, image: "./images/vairo-storm.jpeg" },
  { name: "Vairo X3", price: 1600, image: "./images/vairo-x3.jpeg" },
  { name: "Vairo XR", price: 1900, image: "./images/vairo-xr.jpeg" },
  { name: "Venzo Nitro", price: 1500, image: "./images/venzo-nitro.jpeg" },
  { name: "Venzo Raptor", price: 1700, image: "./images/venzo-raptor.jpeg" },
  { name: "Venzo Ridge", price: 1800, image: "./images/venzo-ridge.jpg" },
];

const productList = document.getElementById("product-list");
if (productList) {
  displayProducts();
} else {
  console.error("Elemento product-list no encontrado");
}

function displayProducts() {
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
    `;

    productList.appendChild(productCard);
  });
}

displayProducts();

// Eventos
const events = [
  "Carrera MTB en las Sierras - 15 de Enero",
  "Exhibición de Nuevos Modelos - 5 de Febrero",
  "Taller de Reparación - 20 de Marzo",
];

const eventList = document.getElementById("event-list");

events.forEach((event) => {
  const eventItem = document.createElement("p");
  eventItem.textContent = event;
  eventList.appendChild(eventItem);
});

// Formulario de contacto
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Formulario enviado:", { name, email, message });
  alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
  contactForm.reset();
});
