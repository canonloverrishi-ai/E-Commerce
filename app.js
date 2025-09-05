const products = [
  { id: 1, name: "Wireless Headphones", price: 59.99, category: "Electronic", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIqBPfFzki4YMLuqoZ9Sj1MmBJEUZ0ThTuQ&s" },
  { id: 2, name: "Smart Watch", price: 99.99, category: "Watches", image: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 3, name: "Bluetooth Speaker", price: 39.99, category: "Electronic", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrvfWt7oKIL0bCneSd5Cg1EXyZcz1gga28Ww&s" },
  { id: 4, name: "iPhone 15", price: 500.99, category: "Phones", image: "https://media.istockphoto.com/id/1679854662/photo/antalya-turkey-newly-released-iphone-15-pro-max-mockup-set-with-back-and-front-angles.jpg?s=612x612&w=0&k=20&c=sXFScGpSwbqLu14BYpJX3-eJMxIFNRD5bJkuPyyA68E=" },
  { id: 5, name: "samsung s24", price: 400.99, category: "Phones", image: "https://images.samsung.com/is/image/samsung/p6pim/in/feature/others/in-feature-galaxy-s24-539719217?$FB_TYPE_A_MO_JPG$" },
  { id: 6, name: "motorola edge 50 pro", price: 300.99, category: "Phones", image: "https://vasanthandco.in/UploadedFiles/productimages/20240727121528-%20%20(6).png" },
  { id: 7, name: "Shirt", price: 90.99, category: "Fashion", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWx5frXfJnc_ehWN2Hhd16rLdqRSGs6JOgA&s" },
  { id: 8, name: "jacket", price: 100.99, category: "Fashion", image: "https://imagescdn.allensolly.com/img/app/product/3/39827108-16449666.jpg?auto=format&w=390" },
  { id: 9, name: "jeans ", price: 90.99, category: "Fashion", image: "https://offduty.in/cdn/shop/files/IMG_4573_2_1080x.jpg?v=1744979438" },
  { id: 10, name: "Formal Watch", price: 99.99, category: "Watches", image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwbd8e8365/images/Titan/Catalog/90110WL04_1.jpg?sw=360&sh=360" },
  { id: 11, name: "iwatch", price: 99.99, category: "Watches", image: "https://images.hindustantimes.com/tech/img/2024/09/06/1600x900/Apple_Watch_Series_10_launching_next_week_1725611629213_1725611629377.jpg" },
  { id: 12, name: "Asus Leptop", price: 39.99, category: "Electronic", image: "https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgaminglaptops-2048px-7981.jpg" },
];

const productContainer = document.getElementById("product-container");
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

const aboutSection = document.getElementById("about-section");
const productSection = document.getElementById("product-section");

let cart = [];

// Render products
function renderProducts(list) {
  productContainer.innerHTML = "";
  list.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// Update cart
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

// Cart modal controls
cartButton.onclick = () => cartModal.style.display = "flex";
closeCart.onclick = () => cartModal.style.display = "none";
window.onclick = (e) => { if (e.target === cartModal) cartModal.style.display = "none"; };

// Checkout
document.getElementById("checkout-btn").onclick = () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
  cartModal.style.display = "none";
};

// Navigation functions
function showHome() {
  aboutSection.style.display = "none";
  productSection.style.display = "block";
  renderProducts(products);
}

function showAbout() {
  aboutSection.style.display = "block";
  productSection.style.display = "none";
}

function filterCategory(category) {
  aboutSection.style.display = "none";
  productSection.style.display = "block";
  const filtered = products.filter(p => p.category === category);
  renderProducts(filtered);
}

// Initial load
showHome();
