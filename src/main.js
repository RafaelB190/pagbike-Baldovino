document.addEventListener("DOMContentLoaded", () => {
  const promoCards = document.querySelectorAll(".promo-card");
  promoCards.forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = "nosotros.html#contacto";
    });
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const lugar = document.getElementById("lugar").value;

      if (nombre && email && lugar) {
        alert(
          `Gracias por contactarnos, ${nombre}. Te responderemos pronto a ${email}.`
        );
        contactForm.reset();
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
  }

  const params = new URLSearchParams(window.location.search);
  const productoImg = params.get("producto");
  if (productoImg) {
    const productos = {
      "bh-atom.jpeg": {
        nombre: "BH Atom",
        descripcion: "Bicicleta eléctrica versátil.",
        precio: "$1,500",
      },
      "bh-lynx.jpeg": {
        nombre: "BH Lynx",
        descripcion: "Modelo de doble suspensión.",
        precio: "$2,000",
      },
      "bh-ultimate.jpeg": {
        nombre: "BH Ultimate",
        descripcion: "Bicicleta de competición.",
        precio: "$2,500",
      },
      "scott-aspect.jpeg": {
        nombre: "Scott Aspect",
        descripcion: "Bicicleta ligera y resistente para senderos.",
        precio: "$1,700",
      },
      "scott-scale.jpeg": {
        nombre: "Scott Scale",
        descripcion: "Diseño innovador con cuadro de carbono.",
        precio: "$2,200",
      },
      "scott-spark.jpeg": {
        nombre: "Scott Spark",
        descripcion: "Bicicleta de doble suspensión para XC.",
        precio: "$2,800",
      },
      "trek-marlin.jpeg": {
        nombre: "Trek Marlin",
        descripcion: "Ideal para iniciarse en el MTB.",
        precio: "$1,500",
      },
      "trek-procaliber.jpeg": {
        nombre: "Trek Procaliber",
        descripcion: "Bicicleta de competición con gran resistencia.",
        precio: "$2,400",
      },
      "trek-x-caliber.jpeg": {
        nombre: "Trek X-Caliber",
        descripcion: "Óptima para senderos técnicos.",
        precio: "$2,100",
      },
      "vairo-x3.jpeg": {
        nombre: "Vairo X3",
        descripcion: "Diseño innovador y cómodo.",
        precio: "$1,800",
      },
      "vairo-xr.jpeg": {
        nombre: "Vairo XR",
        descripcion: "Gran estabilidad y resistencia.",
        precio: "$1,900",
      },
      "vairo-storm.jpeg": {
        nombre: "Vairo Storm",
        descripcion: "Bicicleta ágil para todo terreno.",
        precio: "$2,000",
      },
      "venzo-nitro.jpeg": {
        nombre: "Venzo Nitro",
        descripcion: "Perfecta para ciclismo extremo.",
        precio: "$1,600",
      },
      "venzo-raptor.jpeg": {
        nombre: "Venzo Raptor",
        descripcion: "Diseño aerodinámico con excelente rendimiento.",
        precio: "$1,700",
      },
      "venzo-ridge.jpg": {
        nombre: "Venzo Ridge",
        descripcion: "Resistente y ligera para largas rutas.",
        precio: "$1,750",
      },
      "slp-r5.jpeg": {
        nombre: "SLP R5",
        descripcion: "Bicicleta ideal para maratones de MTB.",
        precio: "$1,600",
      },
      "slp-s6.jpeg": {
        nombre: "SLP S6",
        descripcion: "Diseño aerodinámico con cuadro de aluminio.",
        precio: "$1,850",
      },
      "slp-x3.jpeg": {
        nombre: "SLP X3",
        descripcion: "Perfecta para terrenos difíciles y exigentes.",
        precio: "$2,000",
      },
    };

    if (productoImg && productos[productoImg]) {
      document.getElementById(
        "producto-img"
      ).src = `../public/img/${productoImg}`;

      document.getElementById("producto-img").alt =
        productos[productoImg].nombre;
      document.getElementById("producto-nombre").textContent =
        productos[productoImg].nombre;
      document.getElementById("producto-descripcion").textContent =
        productos[productoImg].descripcion;
      document.getElementById(
        "producto-precio"
      ).textContent = `Precio: ${productos[productoImg].precio}`;
    }
  }

  const catalogoContainer = document.getElementById("catalogo-container");
  if (catalogoContainer) {
    const bicicletas = [
      {
        img: "bh-atom.jpeg",
        nombre: "BH Atom",
        descripcion: "Bicicleta eléctrica versátil.",
      },
      {
        img: "bh-lynx.jpeg",
        nombre: "BH Lynx",
        descripcion: "Doble suspensión para montaña.",
      },
      {
        img: "bh-ultimate.jpeg",
        nombre: "BH Ultimate",
        descripcion: "Bicicleta de alto rendimiento.",
      },
      {
        img: "scott-aspect.jpeg",
        nombre: "Scott Aspect",
        descripcion: "Bicicleta ligera y resistente para senderos.",
      },
      {
        img: "scott-scale.jpeg",
        nombre: "Scott Scale",
        descripcion: "Diseño innovador con cuadro de carbono.",
      },
      {
        img: "scott-spark.jpeg",
        nombre: "Scott Spark",
        descripcion: "Bicicleta de doble suspensión para XC.",
      },
      {
        img: "trek-marlin.jpeg",
        nombre: "Trek Marlin",
        descripcion: "Ideal para iniciarse en el MTB.",
      },
      {
        img: "trek-procaliber.jpeg",
        nombre: "Trek Procaliber",
        descripcion: "Bicicleta de competición con gran resistencia.",
      },
      {
        img: "trek-x-caliber.jpeg",
        nombre: "Trek X-Caliber",
        descripcion: "Óptima para senderos técnicos.",
      },
      {
        img: "vairo-x3.jpeg",
        nombre: "Vairo X3",
        descripcion: "Diseño innovador y cómodo.",
      },
      {
        img: "vairo-xr.jpeg",
        nombre: "Vairo XR",
        descripcion: "Gran estabilidad y resistencia.",
      },
      {
        img: "vairo-storm.jpeg",
        nombre: "Vairo Storm",
        descripcion: "Bicicleta ágil para todo terreno.",
      },
      {
        img: "venzo-nitro.jpeg",
        nombre: "Venzo Nitro",
        descripcion: "Perfecta para ciclismo extremo.",
      },
      {
        img: "venzo-raptor.jpeg",
        nombre: "Venzo Raptor",
        descripcion: "Diseño aerodinámico con excelente rendimiento.",
      },
      {
        img: "venzo-ridge.jpg",
        nombre: "Venzo Ridge",
        descripcion: "Resistente y ligera para largas rutas.",
      },
    ];

    bicicletas.forEach((bici) => {
      const biciHTML = `
      <div class="bg-white p-4 shadow rounded-lg text-center">
        <img src="../public/img${bici.img}" class="w-full h-48 object-cover mb-2" alt="${bici.nombre}">
        <h2 class="text-lg font-bold">${bici.nombre}</h2>
        <p class="text-sm text-gray-700">${bici.descripcion}</p>
        <a href="./detalles.html?producto=${bici.img}" class="block bg-blue-600 text-white py-2 mt-4 rounded">Ver más</a>

      </div>
    `;
      catalogoContainer.insertAdjacentHTML("beforeend", biciHTML);
    });
  }
});
