document.addEventListener("DOMContentLoaded", function () {
  // products data in porducts-data.js


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
  <a href="productDetail.html?id=${product.id}" class="text-decoration-none text-dark">
    <div class="product-card card h-100 shadow-sm grid" style="min-hight-250">
      <img src="${product.image}" class="card-img-top grid" style="max-height:250px; alt="${product.name}" />
      <div class="card-body grid">
        <span class="badge bg-success mb-2">${product.category}</span>
        <h5 class="product-title card-title grid">${product.name}</h5>
        <div class="product-rating mb-2">${stars}</div>

        <div class="mb-2 grid">
          <span class="text-success fw-bold fs-5">${product.discountedPrice}</span>
          <span class="text-muted text-decoration-line-through ms-2">${product.originalPrice}</span>
          <span class="text-danger ms-2">${product.discount}% OFF</span>
        </div>

        <p class="text-muted d-sm-none small mb-1">
          <strong>Description:</strong> ${product.description.slice(0, 30)}...
        </p>

        <ul class="list-unstyled text-muted small">
          <div class="d-flex flex-wrap gap-2">
            <li><strong>M.F.D:</strong> ${new Date(product.manufacturedDate).toLocaleDateString()}</li>
            <li><strong>Expires In:</strong> ${product.expiryDuration} months</li>
          </div>
          <li><strong>Delivery In:</strong> ${product.expectedDeliveryDays} days</li>
        </ul>
      </div>
      
      <div class="card-footer bg-white border-0">
      <button class="btn btn-outline-success w-100 add-to-cart" data-id="${product.id}" onclick="event.stopPropagation();">
      <i class="fas fa-shopping-cart me-2"></i>Add to Cart
      </button>
      </div>
    </div>
  </a>
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
