const productData = {
  "noir-luxe": {
    id: "noir-luxe",
    name: "Noir Luxe Jacket",
    category: "Outerwear",
    price: "$389",
    description:
      "A modern tailored jacket with bold structure, premium hardware, and an elevated matte finish.",
    fabric: "Italian wool blend",
    colors: ["Black", "Charcoal"],
    sizes: ["XS", "S", "M", "L", "XL"],
    imageClass: "card-visual-1",
  },
  "satin-cascade": {
    id: "satin-cascade",
    name: "Satin Cascade Dress",
    category: "Evening",
    price: "$268",
    description:
      "Silk-soft drape meets architectural paneling for a luminous evening silhouette.",
    fabric: "Silk satin",
    colors: ["Ivory", "Midnight"],
    sizes: ["XS", "S", "M", "L"],
    imageClass: "card-visual-2",
  },
  "urban-knit": {
    id: "urban-knit",
    name: "Urban Knit Set",
    category: "Essentials",
    price: "$198",
    description:
      "Relaxed knit separates that maintain tailored polish with comfort-first design.",
    fabric: "Cotton cashmere blend",
    colors: ["Stone", "Forest"],
    sizes: ["S", "M", "L", "XL"],
    imageClass: "card-visual-3",
  },
  "essence-blazer": {
    id: "essence-blazer",
    name: "Essence Tailored Blazer",
    category: "Tailoring",
    price: "$315",
    description:
      "A refined silhouette with sharp lapels, soft shoulder, and luxurious finish for day-to-night dressing.",
    fabric: "Wool-serge",
    colors: ["Midnight Navy", "Stone Grey"],
    sizes: ["XS", "S", "M", "L", "XL"],
    imageClass: "card-visual-4",
  },
};

function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function renderProductDetail() {
  const detailElement = document.getElementById("product-name");
  if (!detailElement) return;

  const productId = getQueryParam("id");
  const product = productData[productId] || productData["noir-luxe"];

  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-category").textContent = product.category;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-description").textContent =
    product.description;
  document.getElementById("product-fabric").textContent = product.fabric;
  document.getElementById("product-colors").textContent =
    product.colors.join(", ");
  document.getElementById("buy-now").href =
    `contact.html?product=${encodeURIComponent(product.name)}`;

  const sizesContainer = document.getElementById("product-sizes");
  sizesContainer.innerHTML = "";
  product.sizes.forEach((size) => {
    const span = document.createElement("span");
    span.textContent = size;
    sizesContainer.appendChild(span);
  });

  const imageElement = document.getElementById("product-image");
  if (imageElement) {
    imageElement.className = `detail-image detail-image-large ${product.imageClass}`;
  }
}

function prefillContactForm() {
  const interestInput = document.getElementById("interest");
  const successText = document.getElementById("form-success");
  if (!interestInput) return;

  const productName = getQueryParam("product");
  if (productName) {
    interestInput.value = productName;
  }

  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    successText.textContent =
      "Thanks — your inquiry has been received. We’ll reply shortly.";
    form.reset();
    if (productName) {
      interestInput.value = productName;
    }
  });
}

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("hidden");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderProductDetail();
  prefillContactForm();
  initNavToggle();
});
