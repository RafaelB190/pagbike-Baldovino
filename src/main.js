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
          `Gracias por contactarnos, ${nombre}. Te responderemos pronto por correo electrónico a ${email}.`
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
        descripcion:
          "Bicicleta eléctrica versátil con motor de 250W y batería de larga duración. Perfecta para recorridos urbanos y de montaña con asistencia al pedaleo que te permitirá disfrutar de tus rutas favoritas sin esfuerzo excesivo.",
        precio: "$1,500",
      },
      "bh-lynx.jpeg": {
        nombre: "BH Lynx",
        descripcion:
          "Modelo de doble suspensión diseñado para los terrenos más exigentes. Su cuadro de carbono y geometría optimizada te ofrecen el máximo rendimiento en descensos técnicos y subidas pronunciadas.",
        precio: "$2,000",
      },
      "bh-ultimate.jpeg": {
        nombre: "BH Ultimate",
        descripcion:
          "Bicicleta de competición con componentes de alta gama. Su ligereza y rigidez la convierten en la opción perfecta para ciclistas que buscan velocidad y eficiencia en cada pedalada.",
        precio: "$2,500",
      },
      "scott-aspect.jpeg": {
        nombre: "Scott Aspect",
        descripcion:
          "Bicicleta ligera y resistente para senderos. Combina un cuadro de aluminio de alta calidad con componentes duraderos que te permitirán disfrutar de tus aventuras en la montaña con total confianza.",
        precio: "$1,700",
      },
      "scott-scale.jpeg": {
        nombre: "Scott Scale",
        descripcion:
          "Diseño innovador con cuadro de carbono que ofrece una relación peso-rigidez excepcional. Sus componentes de alta gama la convierten en una opción premium para competidores exigentes.",
        precio: "$2,200",
      },
      "scott-spark.jpeg": {
        nombre: "Scott Spark",
        descripcion:
          "Bicicleta de doble suspensión para XC con tecnología TwinLoc que te permite ajustar la suspensión en marcha. Perfecta para competiciones de cross-country y maratón donde cada segundo cuenta.",
        precio: "$2,800",
      },
      "trek-marlin.jpeg": {
        nombre: "Trek Marlin",
        descripcion:
          "Ideal para iniciarse en el MTB con un cuadro de aluminio Alpha Silver y horquilla de suspensión que absorbe los impactos del terreno. Su geometría versátil la hace perfecta tanto para principiantes como para ciclistas intermedios.",
        precio: "$1,500",
      },
      "trek-procaliber.jpeg": {
        nombre: "Trek Procaliber",
        descripcion:
          "Bicicleta de competición con gran resistencia gracias a su tecnología IsoSpeed que absorbe las vibraciones del terreno sin sacrificar eficiencia. Su cuadro de carbono OCLV ofrece un rendimiento excepcional.",
        precio: "$2,400",
      },
      "trek-x-caliber.jpeg": {
        nombre: "Trek X-Caliber",
        descripcion:
          "Óptima para senderos técnicos con su geometría G2 que mejora el manejo en curvas cerradas y descensos. Sus componentes de calidad la convierten en una excelente opción para ciclistas que buscan versatilidad.",
        precio: "$2,100",
      },
      "vairo-x3.jpeg": {
        nombre: "Vairo X3",
        descripcion:
          "Diseño innovador y cómodo con cuadro de aluminio hidroformado que combina ligereza y durabilidad. Sus componentes Shimano ofrecen un cambio preciso y frenos potentes para mayor seguridad.",
        precio: "$1,800",
      },
      "vairo-xr.jpeg": {
        nombre: "Vairo XR",
        descripcion:
          "Gran estabilidad y resistencia para los ciclistas más exigentes. Su geometría agresiva y componentes de alta calidad la hacen perfecta para competiciones de cross-country y maratón.",
        precio: "$1,900",
      },
      "vairo-storm.jpeg": {
        nombre: "Vairo Storm",
        descripcion:
          "Bicicleta ágil para todo terreno con suspensión delantera de recorrido medio que absorbe eficientemente los impactos. Su transmisión de amplio rango te permitirá enfrentar cualquier pendiente.",
        precio: "$2,000",
      },
      "venzo-nitro.jpeg": {
        nombre: "Venzo Nitro",
        descripcion:
          "Perfecta para ciclismo extremo con cuadro reforzado y componentes diseñados para soportar los terrenos más difíciles. Su geometría moderna ofrece estabilidad a alta velocidad y agilidad en secciones técnicas.",
        precio: "$1,600",
      },
      "venzo-raptor.jpeg": {
        nombre: "Venzo Raptor",
        descripcion:
          "Diseño aerodinámico con excelente rendimiento en competiciones de cross-country. Su cuadro de aluminio 6061 ofrece la rigidez necesaria para transferir eficientemente la potencia de pedaleo.",
        precio: "$1,700",
      },
      "venzo-ridge.jpg": {
        nombre: "Venzo Ridge",
        descripcion:
          "Resistente y ligera para largas rutas con componentes seleccionados para ofrecer durabilidad y bajo mantenimiento. Ideal para ciclistas que buscan una bicicleta confiable para aventuras de fin de semana.",
        precio: "$1,750",
      },
      "slp-r5.jpeg": {
        nombre: "SLP R5",
        descripcion:
          "Bicicleta ideal para maratones de MTB con geometría que favorece la eficiencia de pedaleo en largas distancias. Su cuadro de aluminio y componentes livianos la hacen perfecta para competiciones de resistencia.",
        precio: "$1,600",
      },
      "slp-s6.jpeg": {
        nombre: "SLP S6",
        descripcion:
          "Diseño aerodinámico con cuadro de aluminio que reduce la resistencia al viento. Sus ruedas de 29 pulgadas ofrecen mayor tracción y capacidad para superar obstáculos en el camino.",
        precio: "$1,850",
      },
      "slp-x3.jpeg": {
        nombre: "SLP X3",
        descripcion:
          "Perfecta para terrenos difíciles y exigentes con suspensión delantera de largo recorrido que absorbe impactos grandes. Su transmisión de amplio rango te permitirá enfrentar cualquier tipo de terreno.",
        precio: "$2,000",
      },
    };

    if (productos[productoImg]) {
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
    } else {
      console.log("No se encontró parámetro o no existe ese producto");
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
      <div class="product-card">
        <img src="../public/img/${bici.img}" class="w-full h-48 object-cover" alt="${bici.nombre}">
        <div class="p-4">
          <h2 class="text-xl font-bold">${bici.nombre}</h2>
          <p class="text-gray-700 mt-2">${bici.descripcion}</p>
          <a href="./detalles.html?producto=${bici.img}" class="block text-center bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition">Ver más</a>
        </div>
      </div>
    `;
      catalogoContainer.insertAdjacentHTML("beforeend", biciHTML);
    });
  }
});
