document.addEventListener("DOMContentLoaded", function () {
  // Your product data
 const allProducts = [
  {
    id: 1,
    name: "Virgin Coconut Oil",
    price: "₹299",
    originalPrice: "₹399",
    discount: 25,
    discountedPrice: "₹299",
    image: "https://www.nariyal.co.in/cdn/shop/files/Sapth_By_Nariyal.webp?v=1749196119&width=360",
    rating: 5,
    category: "haircare",
    featured: true,
    description: "Cold-pressed, pure virgin coconut oil suitable for cooking and skincare.",
    uses: "Hair oil, body moisturizer, cooking, baby massage.",
    benefits: "Improves hair strength, nourishes skin, boosts immunity.",
    manufacturedDate: "2025-06-01",
    expiryDuration: 18,
    expectedDeliveryDays: 3
  },
  {
    id: 2,
    name: "Organic Coconut Vinegar",
    price: "₹199",
    originalPrice: "₹249",
    discount: 20,
    discountedPrice: "₹199",
    image: "https://www.nariyal.co.in/cdn/shop/files/facecleanserpackof1.jpg?v=1749888155&width=360",
    rating: 4,
    category: "healthcare",
    featured: true,
    description: "Raw, unfiltered coconut vinegar with mother of vinegar intact.",
    uses: "Salad dressing, detox drink, skin toner.",
    benefits: "Promotes gut health, aids digestion, balances pH levels.",
    manufacturedDate: "2025-05-15",
    expiryDuration: 24,
    expectedDeliveryDays: 4
  },
  {
    id: 3,
    name: "Coconut Flour",
    price: "₹249",
    originalPrice: "₹299",
    discount: 17,
    discountedPrice: "₹249",
    image: "https://www.nariyal.co.in/cdn/shop/files/Energizingrevitalizingsoap.jpg?v=1748420091&width=360",
    rating: 5,
    category: "healthcare",
    featured: true,
    description: "Gluten-free, high-fiber flour made from dried coconut meat.",
    uses: "Baking, thickening agent, gluten-free recipes.",
    benefits: "Rich in fiber, low-carb, supports digestion.",
    manufacturedDate: "2025-06-10",
    expiryDuration: 12,
    expectedDeliveryDays: 3
  },
  {
    id: 4,
    name: "Cold Pressed Coconut Oil",
    price: "₹349",
    originalPrice: "₹449",
    discount: 22,
    discountedPrice: "₹349",
    image: "https://www.nariyal.co.in/cdn/shop/files/BrighteningSoftSmoothSkinSoap.webp?v=1748421281&width=360",
    rating: 5,
    category: "haircare",
    featured: false,
    description: "Cold-extracted oil retaining all natural nutrients.",
    uses: "Cooking, oil pulling, hair & skin care.",
    benefits: "Boosts metabolism, antibacterial, improves oral health.",
    manufacturedDate: "2025-05-20",
    expiryDuration: 18,
    expectedDeliveryDays: 5
  },
  {
    id: 5,
    name: "Coconut Sugar",
    price: "₹179",
    originalPrice: "₹229",
    discount: 22,
    discountedPrice: "₹179",
    image: "https://www.nariyal.co.in/cdn/shop/files/Serumpackof1.jpg?v=1749885499&width=360",
    rating: 4,
    category: "healthcare",
    featured: true,
    description: "Natural sweetener with low glycemic index from coconut palm sap.",
    uses: "Sweetening beverages, baking, cooking.",
    benefits: "Low GI, rich in minerals, diabetic-friendly.",
    manufacturedDate: "2025-04-25",
    expiryDuration: 24,
    expectedDeliveryDays: 2
  },
  {
    id: 6,
    name: "Coconut Milk Powder",
    price: "₹299",
    originalPrice: "₹349",
    discount: 14,
    discountedPrice: "₹299",
    image: "https://www.nariyal.co.in/cdn/shop/files/Tan_Removal_Soap_448319a3-87a7-4873-8415-0f6cfef815cc.webp?v=1748690041&width=360",
    rating: 4,
    category: "healthcare",
    featured: false,
    description: "Instant coconut milk powder, dairy-free and vegan-friendly.",
    uses: "Cooking, smoothies, dairy substitute.",
    benefits: "Lactose-free, enhances flavor, rich in lauric acid.",
    manufacturedDate: "2025-06-05",
    expiryDuration: 12,
    expectedDeliveryDays: 4
  },

  
  {
    id: 7,
    name: "Hydrating Coconut Body Lotion",
    price: "₹349",
    originalPrice: "₹399",
    discount: 13,
    discountedPrice: "₹349",
    image: "https://www.nariyal.co.in/cdn/shop/files/bodylotion.jpg",
    rating: 4,
    category: "bodycare",
    featured: true,
    description: "Moisturizing body lotion with coconut oil for smooth skin.",
    uses: "Daily body moisturizing.",
    benefits: "Hydrates skin, prevents dryness, soothing effect.",
    manufacturedDate: "2025-06-20",
    expiryDuration: 18,
    expectedDeliveryDays: 3
  },
  {
    id: 8,
    name: "Nourishing Coconut Shampoo",
    price: "₹299",
    originalPrice: "₹349",
    discount: 14,
    discountedPrice: "₹299",
    image: "https://www.nariyal.co.in/cdn/shop/files/shampoo.jpg",
    rating: 4,
    category: "haircare",
    featured: true,
    description: "Gentle shampoo with coconut extract for all hair types.",
    uses: "Hair wash, scalp nourishment.",
    benefits: "Strengthens roots, reduces hair fall, adds shine.",
    manufacturedDate: "2025-06-15",
    expiryDuration: 24,
    expectedDeliveryDays: 4
  },
  {
    id: 9,
    name: "Coconut Face Scrub",
    price: "₹199",
    originalPrice: "₹249",
    discount: 20,
    discountedPrice: "₹199",
    image: "https://www.nariyal.co.in/cdn/shop/files/facescrub.jpg",
    rating: 5,
    category: "bodycare",
    featured: false,
    description: "Exfoliating scrub with natural coconut granules.",
    uses: "Face exfoliation.",
    benefits: "Removes dead skin, unclogs pores, softens skin.",
    manufacturedDate: "2025-05-30",
    expiryDuration: 12,
    expectedDeliveryDays: 2
  },
  {
    id: 10,
    name: "Coconut Herbal Hair Mask",
    price: "₹349",
    originalPrice: "₹449",
    discount: 22,
    discountedPrice: "₹349",
    image: "https://www.nariyal.co.in/cdn/shop/files/hairmask.jpg",
    rating: 5,
    category: "haircare",
    featured: false,
    description: "Repairing mask enriched with coconut and herbs.",
    uses: "Hair treatment once a week.",
    benefits: "Repairs damage, deep conditioning, prevents breakage.",
    manufacturedDate: "2025-06-02",
    expiryDuration: 18,
    expectedDeliveryDays: 3
  },{
    id: 11,
    name: "Keratin Coconut Conditioner",
    price: "₹279",
    originalPrice: "₹329",
    discount: 15,
    discountedPrice: "₹279",
    image: "https://www.nariyal.co.in/cdn/shop/files/shampoo.jpg",
    rating: 4,
    category: "haircare",
    featured: false,
    description: "Strengthening conditioner with coconut and keratin proteins.",
    uses: "After shampooing to nourish and smooth hair.",
    benefits: "Reduces frizz, boosts shine, softens hair.",
    manufacturedDate: "2025-06-01",
    expiryDuration: 18,
    expectedDeliveryDays: 3
  },
  {
    id: 12,
    name: "Coconut Lip Balm",
    price: "₹99",
    originalPrice: "₹129",
    discount: 23,
    discountedPrice: "₹99",
    image: "https://www.nariyal.co.in/cdn/shop/files/Serumpackof1.jpg?v=1749885499&width=360",
    rating: 5,
    category: "bodycare",
    featured: false,
    description: "Soothing lip balm made with pure coconut oil.",
    uses: "Daily lip moisturization.",
    benefits: "Heals cracks, softens lips, natural shine.",
    manufacturedDate: "2025-05-10",
    expiryDuration: 12,
    expectedDeliveryDays: 2
  },
  {
    id: 13,
    name: "Coconut Energy Bites",
    price: "₹249",
    originalPrice: "₹299",
    discount: 17,
    discountedPrice: "₹249",
    image: "https://www.nariyal.co.in/cdn/shop/files/Energizingrevitalizingsoap.jpg?v=1748420091&width=360",
    rating: 4,
    category: "healthcare",
    featured: false,
    description: "Healthy snacks made with coconut and nuts.",
    uses: "Midday snack, pre/post workout.",
    benefits: "Boosts energy, natural ingredients, protein-rich.",
    manufacturedDate: "2025-06-03",
    expiryDuration: 6,
    expectedDeliveryDays: 3
  },
  {
    id: 14,
    name: "Coconut Foot Cream",
    price: "₹149",
    originalPrice: "₹199",
    discount: 25,
    discountedPrice: "₹149",
    image: "https://www.nariyal.co.in/cdn/shop/files/bodylotion.jpg",
    rating: 4,
    category: "bodycare",
    featured: false,
    description: "Intensive repair cream for cracked heels and dry feet.",
    uses: "Nightly foot care routine.",
    benefits: "Heals cracks, softens skin, soothing aroma.",
    manufacturedDate: "2025-06-15",
    expiryDuration: 18,
    expectedDeliveryDays: 4
  },
  {
    id: 15,
    name: "Digestive Coconut Mix",
    price: "₹199",
    originalPrice: "₹249",
    discount: 20,
    discountedPrice: "₹199",
    image: "https://www.nariyal.co.in/cdn/shop/files/facecleanserpackof1.jpg?v=1749888155&width=360",
    rating: 5,
    category: "healthcare",
    featured: false,
    description: "A digestive-friendly coconut blend with herbs.",
    uses: "Post-meal digestive boost.",
    benefits: "Aids digestion, light and refreshing, all-natural.",
    manufacturedDate: "2025-04-20",
    expiryDuration: 12,
    expectedDeliveryDays: 3
  },
  {
    id: 16,
    name: "Coconut Body Scrub Bar",
    price: "₹199",
    originalPrice: "₹249",
    discount: 20,
    discountedPrice: "₹199",
    image: "https://www.nariyal.co.in/cdn/shop/files/Tan_Removal_Soap_448319a3-87a7-4873-8415-0f6cfef815cc.webp?v=1748690041&width=360",
    rating: 5,
    category: "bodycare",
    featured: false,
    description: "Handmade exfoliating soap bar with coconut fiber.",
    uses: "Weekly exfoliation for body.",
    benefits: "Removes dead skin, smooth finish, eco-friendly.",
    manufacturedDate: "2025-06-08",
    expiryDuration: 18,
    expectedDeliveryDays: 3
  },
  {
    id: 17,
    name: "Coconut Protein Smoothie Mix",
    price: "₹349",
    originalPrice: "₹399",
    discount: 13,
    discountedPrice: "₹349",
    image: "https://www.nariyal.co.in/cdn/shop/files/hairmask.jpg",
    rating: 4,
    category: "healthcare",
    featured: false,
    description: "Delicious coconut-based smoothie powder for fitness.",
    uses: "Breakfast or post-workout drink.",
    benefits: "High protein, dairy-free, energy-boosting.",
    manufacturedDate: "2025-06-01",
    expiryDuration: 12,
    expectedDeliveryDays: 3
  },
  {
    id: 18,
    name: "Coconut Hair Tonic",
    price: "₹299",
    originalPrice: "₹349",
    discount: 14,
    discountedPrice: "₹299",
    image: "https://www.nariyal.co.in/cdn/shop/files/shampoo.jpg",
    rating: 5,
    category: "haircare",
    featured: false,
    description: "Hair tonic with fermented coconut for scalp vitality.",
    uses: "Daily hair spray or massage.",
    benefits: "Stimulates growth, reduces dandruff, cools scalp.",
    manufacturedDate: "2025-05-18",
    expiryDuration: 12,
    expectedDeliveryDays: 4
  },
  {
    id: 19,
    name: "Coconut Hand Wash",
    price: "₹149",
    originalPrice: "₹199",
    discount: 25,
    discountedPrice: "₹149",
    image: "https://www.nariyal.co.in/cdn/shop/files/bodylotion.jpg",
    rating: 4,
    category: "bodycare",
    featured: false,
    description: "Mild coconut hand wash with moisturizing formula.",
    uses: "Regular hand cleansing.",
    benefits: "Gentle on skin, natural fragrance, hydrating.",
    manufacturedDate: "2025-06-10",
    expiryDuration: 18,
    expectedDeliveryDays: 2
  },
  {
    id: 20,
    name: "Coconut Sleep Aid Capsules",
    price: "₹399",
    originalPrice: "₹499",
    discount: 20,
    discountedPrice: "₹399",
    image: "https://www.nariyal.co.in/cdn/shop/files/Serumpackof1.jpg?v=1749885499&width=360",
    rating: 4,
    category: "healthcare",
    featured: false,
    description: "Natural coconut + herbs formula to support deep sleep.",
    uses: "Take 1 capsule before bed.",
    benefits: "Promotes restful sleep, non-habit forming, natural.",
    manufacturedDate: "2025-05-25",
    expiryDuration: 24,
    expectedDeliveryDays: 3
  },
  {
    id: 21,
    name: "Coconut Beard Balm",
    price: "₹249",
    originalPrice: "₹299",
    discount: 17,
    discountedPrice: "₹249",
    image: "https://www.nariyal.co.in/cdn/shop/files/facecleanserpackof1.jpg?v=1749888155&width=360",
    rating: 4,
    category: "haircare",
    featured: false,
    description: "Beard conditioning balm with pure coconut oil.",
    uses: "Apply daily after shower.",
    benefits: "Softens beard, adds shine, promotes healthy growth.",
    manufacturedDate: "2025-06-01",
    expiryDuration: 12,
    expectedDeliveryDays: 2
  },
  {
    id: 22,
    name: "Brightening Coconut Face Pack",
    price: "₹299",
    originalPrice: "₹349",
    discount: 14,
    discountedPrice: "₹299",
    image: "https://www.nariyal.co.in/cdn/shop/files/BrighteningSoftSmoothSkinSoap.webp?v=1748421281&width=360",
    rating: 5,
    category: "bodycare",
    featured: false,
    description: "Clay-based coconut mask for radiant skin.",
    uses: "Use twice weekly.",
    benefits: "Brightens skin, removes tan, natural detox.",
    manufacturedDate: "2025-06-11",
    expiryDuration: 18,
    expectedDeliveryDays: 3
  },
  {
    id: 23,
    name: "Coconut Detox Tablets",
    price: "₹349",
    originalPrice: "₹399",
    discount: 13,
    discountedPrice: "₹349",
    image: "https://www.nariyal.co.in/cdn/shop/files/Energizingrevitalizingsoap.jpg?v=1748420091&width=360",
    rating: 4,
    category: "healthcare",
    featured: false,
    description: "Natural cleansing tablets with activated coconut charcoal.",
    uses: "Take once daily.",
    benefits: "Flushes toxins, improves metabolism, gut-friendly.",
    manufacturedDate: "2025-05-19",
    expiryDuration: 24,
    expectedDeliveryDays: 3
  },
  {
    id: 24,
    name: "Coconut Under Eye Cream",
    price: "₹199",
    originalPrice: "₹249",
    discount: 20,
    discountedPrice: "₹199",
    image: "https://www.nariyal.co.in/cdn/shop/files/facecleanserpackof1.jpg?v=1749888155&width=360",
    rating: 4,
    category: "bodycare",
    featured: false,
    description: "Soothing under-eye cream with coconut extract.",
    uses: "Apply nightly.",
    benefits: "Reduces puffiness, lightens dark circles.",
    manufacturedDate: "2025-06-09",
    expiryDuration: 12,
    expectedDeliveryDays: 4
  },
  {
    id: 25,
    name: "Coconut Massage Oil",
    price: "₹279",
    originalPrice: "₹349",
    discount: 20,
    discountedPrice: "₹279",
    image: "https://www.nariyal.co.in/cdn/shop/files/bodylotion.jpg",
    rating: 5,
    category: "bodycare",
    featured: false,
    description: "Relaxing massage oil with pure coconut aroma.",
    uses: "Full body massage.",
    benefits: "Relieves stress, improves blood flow.",
    manufacturedDate: "2025-06-12",
    expiryDuration: 18,
    expectedDeliveryDays: 2
  },
  {
    id: 26,
    name: "Coconut Baby Lotion",
    price: "₹199",
    originalPrice: "₹249",
    discount: 20,
    discountedPrice: "₹199",
    image: "https://www.nariyal.co.in/cdn/shop/files/shampoo.jpg",
    rating: 5,
    category: "bodycare",
    featured: false,
    description: "Gentle lotion for baby skin with coconut oil.",
    uses: "Daily use after bath.",
    benefits: "Softens skin, chemical-free, calming.",
    manufacturedDate: "2025-06-01",
    expiryDuration: 12,
    expectedDeliveryDays: 2
  },
  {
    id: 27,
    name: "Coconut Breath Freshener",
    price: "₹149",
    originalPrice: "₹199",
    discount: 25,
    discountedPrice: "₹149",
    image: "https://www.nariyal.co.in/cdn/shop/files/hairmask.jpg",
    rating: 4,
    category: "healthcare",
    featured: false,
    description: "Natural breath mints made with coconut and mint oils.",
    uses: "Use as needed.",
    benefits: "Freshens breath, natural taste, no sugar.",
    manufacturedDate: "2025-06-01",
    expiryDuration: 12,
    expectedDeliveryDays: 2
  },
  {
    id: 28,
    name: "Coconut SPF Sunscreen",
    price: "₹299",
    originalPrice: "₹349",
    discount: 14,
    discountedPrice: "₹299",
    image: "https://www.nariyal.co.in/cdn/shop/files/Serumpackof1.jpg?v=1749885499&width=360",
    rating: 5,
    category: "bodycare",
    featured: false,
    description: "SPF 30+ sunscreen with coconut extract.",
    uses: "Apply before sun exposure.",
    benefits: "Protects from UV, moisturizes, lightweight.",
    manufacturedDate: "2025-06-07",
    expiryDuration: 24,
    expectedDeliveryDays: 3
  },
  {
    id: 29,
    name: "Coconut Skin Toner",
    price: "₹199",
    originalPrice: "₹249",
    discount: 20,
    discountedPrice: "₹199",
    image: "https://www.nariyal.co.in/cdn/shop/files/facecleanserpackof1.jpg?v=1749888155&width=360",
    rating: 4,
    category: "bodycare",
    featured: false,
    description: "Refreshing toner made with distilled coconut water.",
    uses: "Spray or apply with cotton.",
    benefits: "Tightens pores, refreshes skin.",
    manufacturedDate: "2025-06-15",
    expiryDuration: 18,
    expectedDeliveryDays: 3
  },
  {
    id: 30,
    name: "Coconut Nail Cream",
    price: "₹149",
    originalPrice: "₹199",
    discount: 25,
    discountedPrice: "₹149",
    image: "https://www.nariyal.co.in/cdn/shop/files/bodylotion.jpg",
    rating: 4,
    category: "bodycare",
    featured: false,
    description: "Strengthening cream for nails with coconut nutrients.",
    uses: "Apply to nails daily.",
    benefits: "Improves nail strength, reduces brittleness.",
    manufacturedDate: "2025-06-11",
    expiryDuration: 12,
    expectedDeliveryDays: 2
  }
];

  // Create product card HTML
function createProductCard(product) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    stars += i < product.rating
      ? '<i class="fas fa-star text-warning"></i>'
      : '<i class="far fa-star text-warning"></i>';
  }

 return `
  <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
    <div class="product-card card h-100 shadow-sm">
      <img src="${product.image}" class="card-img-top" alt="${product.name}" />
      
      <div class="card-body">
        <span class="badge bg-primary mb-2">${product.category}</span>
        <h5 class="product-title card-title">${product.name}</h5>
        <div class="product-rating mb-2">${stars}</div>

        <div class="mb-2">
          <span class="text-success fw-bold fs-5">${product.discountedPrice}</span>
          <span class="text-muted text-decoration-line-through ms-2">${product.originalPrice}</span>
          <span class="text-danger ms-2">${product.discount}% OFF</span>
        </div>

        <p class="text-muted d-sm-none small mb-1"><strong>Description:</strong> ${product.description.slice(0, 30)}...</p>

        <ul class="list-unstyled text-muted small">
          <div class="d-flex flex-wrap gap-2">
            <li><strong>M.F.D:</strong> ${new Date(product.manufacturedDate).toLocaleDateString()}</li>
            <li><strong>Expires In:</strong> ${product.expiryDuration} months</li>
          </div>
          <li><strong>Delivery In:</strong> ${product.expectedDeliveryDays} days</li>
        </ul>
      </div>

      <div class="card-footer bg-white border-0">
        <button class="btn btn-outline-primary w-100 add-to-cart" data-id="${product.id}">
          <i class="fas fa-shopping-cart me-2"></i>Add to Cart
        </button>
      </div>
    </div>
  </div>
`;

}


  // Find containers in DOM
  const featuredContainer = document.getElementById("featured-products-container");
  const allProductsContainer = document.getElementById("all-products-container");

  // Render products based on container found
  if (featuredContainer) {
    // Show only featured products (index.html)
    const featuredProducts = allProducts.filter(p => p.featured);
    featuredProducts.forEach(product => {
      featuredContainer.insertAdjacentHTML("beforeend", createProductCard(product));
    });
  }

  if (allProductsContainer) {
    // Show all products (products.html)
    allProducts.forEach(product => {
      allProductsContainer.insertAdjacentHTML("beforeend", createProductCard(product));
    });
  }

  // filters and sort

  function applyFilters(products) {
  const category = document.getElementById("categoryFilter").value;
  const discount = parseInt(document.getElementById("discountFilter").value);
  const expiry = parseInt(document.getElementById("expiryFilter").value);
  const sort = document.getElementById("sortSelect").value;

  let filtered = [...products];

  // Category Filter
  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }

  // Discount Filter
  if (discount) {
    filtered = filtered.filter(p => p.discount >= discount);
  }

  // Expiry Filter
  if (expiry) {
    if (expiry === 12) {
      filtered = filtered.filter(p => p.expiryDuration < 12);
    } else if (expiry === 24) {
      filtered = filtered.filter(p => p.expiryDuration >= 12 && p.expiryDuration <= 24);
    }
  }

  // Sort Logic
  switch (sort) {
    case "price-asc":
      filtered.sort((a, b) => parseInt(a.discountedPrice.replace(/[₹,]/g, '')) - parseInt(b.discountedPrice.replace(/[₹,]/g, '')));
      break;
    case "price-desc":
      filtered.sort((a, b) => parseInt(b.discountedPrice.replace(/[₹,]/g, '')) - parseInt(a.discountedPrice.replace(/[₹,]/g, '')));
      break;
    case "discount-desc":
      filtered.sort((a, b) => b.discount - a.discount);
      break;
    case "expiry-asc":
      filtered.sort((a, b) => a.expiryDuration - b.expiryDuration);
      break;
  }

  return filtered;
}

function renderAllProducts() {
  const container = document.getElementById("all-products-container");
  container.innerHTML = "";

  const filteredProducts = applyFilters(allProducts);
  if (filteredProducts.length === 0) {
    container.innerHTML = `<div class="col-12"><p class="text-center text-muted">No products match your filters.</p></div>`;
  }

  filteredProducts.forEach(product => {
    container.insertAdjacentHTML("beforeend", createProductCard(product));
  });
}

// Bind events
["categoryFilter", "discountFilter", "expiryFilter", "sortSelect"].forEach(id => {
  document.getElementById(id).addEventListener("change", renderAllProducts);
});

// Render on load
if (document.getElementById("all-products-container")) {
  renderAllProducts();
}

  

  // Single event listener for add to cart buttons
  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;

    const productId = btn.getAttribute("data-id");
    const product = allProducts.find(p => p.id == productId);
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.id == product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  });

  // Rest of your existing code below, outside of DOMContentLoaded block:
  // Mobile menu toggle animation
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Sticky header on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  // Cart functions and rendering
function formatPrice(price) {
  return parseInt(price.toString().replace("₹", "").replace(/,/g, ""));
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");
  const itemCountEl = document.getElementById("item-count");
  const priceOriginalEl = document.getElementById("price-original");
  const discountEl = document.getElementById("discount");
  const protectFeeEl = document.getElementById("protect-fee");
  const youSaveEl = document.getElementById("you-save");

  if (!cartItemsContainer || !cartTotalEl) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p class='text-center text-muted'>Your cart is empty.</p>";
    cartTotalEl.textContent = "₹0";
    itemCountEl.textContent = "0";
    return;
  }

  cartItemsContainer.innerHTML = "";

  let total = 0;
  let originalTotal = 0;
  let protectFee = 0;
  let itemCount = 0;

  cart.forEach(item => {
    const price = formatPrice(item.price);
    const originalPrice = formatPrice(item.originalPrice || item.price);
    const itemTotal = price * item.quantity;
    const originalItemTotal = originalPrice * item.quantity;

    total += itemTotal;
    originalTotal += originalItemTotal;
    protectFee += 99; // assume per item fixed fee
    itemCount += item.quantity;

    const card = document.createElement("div");
    card.className = "border-bottom pb-3 mb-3";

    card.innerHTML = `
      <div class="row g-3 align-items-center">
        <div class="col-auto" style="max-width: 140px;">
          <img src="${item.image}" class="img-fluid rounded" alt="${item.name}">
        </div>
        <div class="col">
          <h5 class="card-title mb-1">${item.name}</h5>
          <p class="text-muted mb-1">Category: ${item.category}</p>
          <p class="text-success small mb-2">In stock</p>

          <div class="d-flex align-items-center gap-2">
            <div class="border border-warning d-flex align-items-center justify-content-around px-2 py-1 rounded-pill">
              <button class="btn btn-sm px-2" onclick="decreaseQty(${item.id})">−</button>
              <span class="fw-bold mx-2">${item.quantity}</span>
              <button class="btn btn-sm px-2" onclick="increaseQty(${item.id})">+</button>
            </div>
            <button class="btn btn-link text-danger ms-3 p-0" onclick="removeFromCart(${item.id})">Delete</button>
          </div>
        </div>
        <div class="col text-end">
          <div class="h5 mb-0">₹${itemTotal.toLocaleString()}</div>
          <small class="text-muted">₹${price.toLocaleString()} x ${item.quantity}</small>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(card);
  });

  const discount = originalTotal - total;
  const finalAmount = total + protectFee;

  // Update price summary
  cartTotalEl.textContent = `₹${finalAmount.toLocaleString()}`;
  itemCountEl.textContent = itemCount;
  priceOriginalEl.textContent = `₹${originalTotal.toLocaleString()}`;
  discountEl.textContent = `− ₹${discount.toLocaleString()}`;
  protectFeeEl.textContent = `₹${protectFee.toLocaleString()}`;
  youSaveEl.textContent = `₹${discount.toLocaleString()}`;
}

  window.increaseQty = function (id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(p => p.id == id);
    if (item) {
      item.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  };

  window.decreaseQty = function (id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(p => p.id == id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      const index = cart.findIndex(p => p.id == id);
      if (index !== -1) cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  window.removeFromCart = function (id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id != id);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  // Render cart on page load
  renderCart();
});
