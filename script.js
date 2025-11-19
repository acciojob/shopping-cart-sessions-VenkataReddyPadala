// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const clearCartBtn = document.getElementById("clear-cart-btn");
const cartList = document.querySelector("#cart-list");
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}
renderProducts();

// Render cart list
function renderCart() {
  cartList.innerHTML = "";
  let cart = JSON.parse(window.sessionStorage.getItem("cart")) || [];
  cart.forEach((cart) => {
    const li = document.createElement("li");
    li.innerHTML = `${cart.name} ${cart.price}`;
    cartList.appendChild(li);
  });
}

const buttons = document.querySelectorAll(".add-to-cart-btn");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event);
    const id = Number(event.target.dataset.id);
    addToCart(id);
  });
});

// Add item to cart
function addToCart(productId) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {}

// Clear cart
function clearCart() {
  cart = [];
  window.sessionStorage.clear();
  renderCart();
}
clearCartBtn.addEventListener("click", clearCart);

// Initial render
// renderProducts();
renderCart();
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = Number(e.target.dataset.id);
      addToCart(id);
      renderCart();
    });
  });
}

function addToCart(productId) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }
}

function renderCart() {
  cartList.innerHTML = "";
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

function clearCart() {
  sessionStorage.setItem("cart", JSON.stringify([]));
  renderCart();
}

clearCartBtn.addEventListener("click", clearCart);

renderProducts();
renderCart();
