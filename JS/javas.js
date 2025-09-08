// Sample product data
  const trees = [
    {
      id: 1,
      name: "Mango Tree",
      desc: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green foliage provides good shade.",
      category: "fruit",
      price: 500,
      tag: "Fruit Tree",
      image: null, // Placeholder for blank image area
    },
    {
      id: 2,
      name: "Guava Tree",
      desc: "An evergreen tree growing tropical and subtropical regions. Produces tasty guavas packed with nutrients.",
      category: "fruit",
      price: 450,
      tag: "Fruit Tree",
      image: null,
    },
    {
      id: 3,
      name: "Neem Tree",
      desc: "Medicinal tree known for its unique properties in traditional medicine and organic pest control.",
      category: "medicinal",
      price: 600,
      tag: "Medicinal Tree",
      image: null,
    },
    {
      id: 4,
      name: "Teak Tree",
      desc: "A timber tree valued for its durable wood used in furniture and construction.",
      category: "timber",
      price: 700,
      tag: "Timber Tree",
      image: null,
    },
    {
      id: 5,
      name: "Bamboo",
      desc: "Fast-growing evergreen plant used in construction, furniture, and crafts.",
      category: "bamboo",
      price: 300,
      tag: "Bamboo",
      image: null,
    },
    {
      id: 6,
      name: "Flowering Cherry",
      desc: "Ornamental tree producing beautiful flowers in spring. Popular in gardens and parks.",
      category: "flowering",
      price: 550,
      tag: "Flowering Tree",
      image: null,
    },
    {
      id: 7,
      name: "Rubber Tree",
      desc: "Tree tapped for latex to produce natural rubber.",
      category: "timber",
      price: 650,
      tag: "Timber Tree",
      image: null,
    },
    {
      id: 8,
      name: "Aquatic Lily",
      desc: "Aquatic plant with iconic floating flowers, perfect for ponds.",
      category: "aquatic",
      price: 400,
      tag: "Aquatic Plant",
      image: null,
    },
    {
      id: 9,
      name: "Oak Tree",
      desc: "Shade tree known for its strength, longevity, and iconic leaves.",
      category: "shade",
      price: 750,
      tag: "Shade Tree",
      image: null,
    },
  ];

  // Cart structure: {id, quantity}
  let cart = [];

  // Get references
  const productsContainer = document.getElementById("products");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalContainer = document.getElementById("cart-total");
  const categoryButtons = document.querySelectorAll(".categoryBtn");

  // Helper: Format price with currency
  function formatPrice(num) {
    return "৳" + num;
  }

  // Render product cards based on category filter
  function renderProducts(filter = "all") {
    productsContainer.innerHTML = "";
    const filteredTrees = filter === "all" ? trees : trees.filter(t => t.category === filter);

    filteredTrees.forEach(tree => {
      const card = document.createElement("article");
      card.className = "bg-white rounded-lg p-4 shadow flex flex-col";

      card.innerHTML = `
        <div class="bg-gray-200 rounded-md w-full h-32 mb-3"></div>
        <h3 class="font-semibold text-gray-800 text-sm mb-0.5">${tree.name}</h3>
        <p class="text-gray-600 text-xs mb-1 line-clamp-3">${tree.desc}</p>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs px-2 py-0.5 text-green-700 font-semibold border border-green-400 rounded">${tree.tag}</span>
          <span class="text-sm font-semibold">${formatPrice(tree.price)}</span>
        </div>
        <button data-id="${tree.id}" class="add-to-cart-btn bg-green-800 hover:bg-green-900 text-white rounded-full py-1.5 text-center text-sm transition">Add to Cart</button>
      `;

      productsContainer.appendChild(card);
    });

    // Setup "Add to Cart" buttons
    const addBtns = document.querySelectorAll(".add-to-cart-btn");
    addBtns.forEach(btn =>
      btn.addEventListener("click", () => {
        const id = parseInt(btn.getAttribute("data-id"));
        addToCart(id);
      })
    );
  }

  // Add item to cart or increment quantity
  function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({id, quantity: 1});
    }
    renderCart();
  }

  // Remove item from cart by id
  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
  }

  // Render cart items and total
  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<li class='text-gray-500 italic text-xs'>Your cart is empty.</li>";
      cartTotalContainer.textContent = formatPrice(0);
      return;
    }

    cart.forEach(({id, quantity}) => {
      const tree = trees.find(t => t.id === id);
      if (!tree) return;

      total += tree.price * quantity;

      const li = document.createElement("li");
      li.className = "flex justify-between items-center gap-2 bg-green-50 rounded px-3 py-1";

      li.innerHTML = `
        <div>
          <p class="font-semibold text-gray-800 text-xs">${tree.name}</p>
          <p class="text-gray-600 text-xs">৳${tree.price} × ${quantity}</p>
        </div>
        <button aria-label="Remove from cart" class="text-gray-400 hover:text-red-600 text-sm font-bold" data-id="${id}">×</button>
      `;

      // Remove button event
      li.querySelector("button").addEventListener("click", () => {
        removeFromCart(id);
      });

      cartItemsContainer.appendChild(li);
    });

    cartTotalContainer.textContent = formatPrice(total);
  }

  // Handle category button click
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all
      categoryButtons.forEach(b => b.classList.remove("bg-green-900", "text-white"));
      // Add active to clicked
      btn.classList.add("bg-green-900", "text-white");

      const category = btn.getAttribute("data-category");
      renderProducts(category);
    });
  });

  // Initial render
  renderProducts();
  renderCart();

  // Optional: For line-clamp (text truncation), Tailwind's plugin is typically used,
  // but since CDN doesn't enable it by default, we'll add simple CSS here:

  const style = document.createElement("style");
  style.textContent = `
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);


  // Example vanilla JS for future use: Simple console greeting when the section is loaded
  document.addEventListener('DOMContentLoaded', () => {
    console.log('About the Campaign section loaded');
  });


   document.getElementById('donationForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const trees = this.trees.value;

      if (!name || !email || !trees) {
        alert('Please fill out all fields.');
        return;
      }

      // Basic email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      alert(`Thank you, ${name}, for planting ${trees} tree(s)!`);

      // Reset form
      this.reset();
    });