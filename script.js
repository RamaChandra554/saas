document.addEventListener('DOMContentLoaded', function() {
    // Featured Products Data
    const featuredProducts = [
        {
            id: 1,
            name: "Virgin Coconut Oil",
            price: "₹299",
            image: "https://www.nariyal.co.in/cdn/shop/files/Sapth_By_Nariyal.webp?v=1749196119&width=360",
            rating: 5,
            category: "Coconut Oil"
        },
        {
            id: 2,
            name: "Organic Coconut Vinegar",
            price: "₹199",
            image: "https://www.nariyal.co.in/cdn/shop/files/facecleanserpackof1.jpg?v=1749888155&width=360",
            rating: 4,
            category: "Coconut Vinegar"
        },
        {
            id: 3,
            name: "Coconut Flour",
            price: "₹249",
            image: "https://www.nariyal.co.in/cdn/shop/files/Energizingrevitalizingsoap.jpg?v=1748420091&width=360",
            rating: 5,
            category: "Coconut Flour"
        },
        {
            id: 4,
            name: "Cold Pressed Coconut Oil",
            price: "₹349",
            image: "https://www.nariyal.co.in/cdn/shop/files/BrighteningSoftSmoothSkinSoap.webp?v=1748421281&width=360",
            rating: 5,
            category: "Coconut Oil"
        },
        {
            id: 5,
            name: "Coconut Sugar",
            price: "₹179",
            image: "https://www.nariyal.co.in/cdn/shop/files/Serumpackof1.jpg?v=1749885499&width=360",
            rating: 4,
            category: "Coconut Sugar"
        },
        {
            id: 6,
            name: "Coconut Milk Powder",
            price: "₹299",
            image: "https://www.nariyal.co.in/cdn/shop/files/Tan_Removal_Soap_448319a3-87a7-4873-8415-0f6cfef815cc.webp?v=1748690041&width=360",
            rating: 4,
            category: "Coconut Milk"
        }
    ];

    // Function to create product card
    function createProductCard(product) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < product.rating) {
                stars += '<i class="fas fa-star text-warning"></i>';
            } else {
                stars += '<i class="far fa-star text-warning"></i>';
            }
        }

        return `
            <div class="col-lg-4 col-md-6">
                <div class="product-card card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <span class="badge bg-primary mb-2">${product.category}</span>
                        <h5 class="product-title card-title">${product.name}</h5>
                        <div class="product-rating mb-2">${stars}</div>
                        <h6 class="product-price">${product.price}</h6>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <button class="btn btn-primary w-100 add-to-cart" data-id="${product.id}">
                            <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Render featured products
    const productsContainer = document.getElementById('featured-products-container');
    if (productsContainer) {
        featuredProducts.forEach(product => {
            productsContainer.innerHTML += createProductCard(product);
        });
    }

    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
            const productId = button.getAttribute('data-id');
            const product = featuredProducts.find(p => p.id == productId);
            
            // In a real app, you would add this to a cart array or send to server
            alert(`${product.name} added to cart!`);
            
            // You can add more cart functionality here
        }
    });

    // Mobile menu toggle animation
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});

  document.addEventListener('click', function (event) {
    const offcanvasEl = document.getElementById('mobileMenu');
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);

    if (offcanvasInstance && offcanvasEl.classList.contains('show')) {
      const isClickInside = offcanvasEl.contains(event.target) || 
                            event.target.closest('[data-bs-toggle="offcanvas"]');

      if (!isClickInside) {
        offcanvasInstance.hide();
      }
    }
  });