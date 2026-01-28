// ------------------- Products -------------------
const products = [
  {id:1,name:"Ugly Apples 🍎",category:"fruits",price:50,description:"Fresh but oddly shaped apples from local farms.",image:"./res/Fruits/Apple.jpg"},
  {id:2,name:"Twisted Carrots 🥕",category:"vegetables", price:40,description:"Nutrient-rich carrots that look a bit funny.",image:"./res/Vegetables/carrot.jpeg"},
  {id:3,name:"Curvy Bananas 🍌",category:"fruits", price:30,description:"Perfectly ripe bananas with unusual shapes.",image:"./res/Fruits/banana.jpg"},
  {id:4,name:"Knobby Tomatoes 🍅",category:"vegetables", price:35,description:"Juicy tomatoes with funny bumps and curves.",image:"./res/Vegetables/tomato.jpg"},
  {id:5,name:"Misshaped Pears 🍐",category:"fruits",price:45,description:"Sweet pears that didn’t meet supermarket standards.",image:"./res/Fruits/pears.jpeg"},
  {id:6,name:"Odd Strawberries 🍓",category:"fruits",price:60,description:"Fresh strawberries with unusual shapes but full of flavor.",image:"./res/Fruits/straw.jpeg"},
  {id:7,name:"Jackfruit 🥭",category:"fruits",price:500,description:"Jackfruit is a giant tropical fruit with a spiky green exterior and sweet, fibrous yellow flesh.",image:"./res/Fruits/jack.jpeg"},
  {id:8,name:"Daring Dragon 🐉",category:"fruits",price:1600,description:"Exotic and vibrant dragon fruits full of nutrients.",image:"./res/Fruits/dragond.jpg"},
  {id:9,name:"Lady Finger 🥒",category:"vegetables",price:40,description: "Quick and tasty lady finger recipe! Easy to cook and super delicious.",image:"./res/Vegetables/ladyfinger.jpeg"},
  {id:10,name:"Wonky Brinjals 🍆",category:"vegetables",price:55,description:"Tasty brinjals with quirky shapes, perfect for cooking.", image:"./res/Vegetables/brinjal.jpg"},
  {id:11,name:"Pumpkin 🎃",category:"vegetables",price:100,description:"Pumpkin is a round, orange fruit with thick skin and seeds inside. It’s used for cooking, decoration, and making pies.",image:"./res/Vegetables/pumpkin.jpeg"},
  {id:12,name:"Blueberry 🫐",category:"fruits",price:300,description:"A burst of freshness in every bite. Sweet, juicy, and packed with antioxidants.",image:"./res/Fruits/berry.png"},
  {id:13,name:"Rotten Onion 🧅",category:"vegetables",price:181,description:"Rotten onion full of flavours (just kidding, it's aged!).",image:"./res/Vegetables/Onion.jpg"},
  {id:15,name:"Cauliflower 🥦",category:"vegetables",price:70,description:"Fresh and nutritious cauliflower. Tasty, healthy, and perfect for every Indian dish.",image:"./res/Vegetables/cauliflower.jpeg"},
  {id:16,name:"Papaya",category:"fruits",price:120, description:"Papaya is a sweet, tropical fruit rich in vitamins that boosts immunity and promotes healthy digestion. 🍈✨", image:"./res/Fruits/papaya.png" },
  {id:17,name:"Cucumber",category:"vegetables",price:400, description:"Cucumber is a healthy vegetable, tropical vegetable rich in water.",image:"./res/Vegetables/cucumber.jpg"},
  {id:18,name:"Grapes",category:"fruits",price:500,description:"Grapes. A burst of freshness in every bite. Sweet, juicy.",image:"./res/Fruits/grapes.jpeg"},
  {id:19,name:"Elephant Foot Yam",category:"vegetables",price:200,description:"Elephant foot yam is a large, starchy tuber resembling an elephant’s foot, widely used as a nutritious tropical vegetable.",image:"./res/Vegetables/elephantfoot.jpeg"},
  {id:20,name:"Plum 🍑",category:"fruits",price:55,description:"A sweet and juicy fruit with smooth skin and a single pit inside.",image:"./res/Fruits/plum.png"},
  {id:21,name:"Zucchini",category:"vegetables",price:170,description:"Zucchini is a versatile summer squash with a mild flavor, perfect for grilling, roasting, or adding to salads and stir-fries.",image:"./res/Vegetables/zucchini.jpg"},
  {id:22,name:"Cardoon",category:"vegetables",price:250,description:"Cynara cardunculus, commonly known as cardoon, is a thistle-like vegetable related to the artichoke, valued for its edible stalks and flower buds.",image:"./res/Vegetables/artichokes.jpg"},
  {id:23,name:"Basil",category:"herbs",price:300,description:"It is a nice aromatic herb used in most Italian cuisine, its freshness and taste enhances the flavour of food.",image:"./res/Herbs/basil.jpg"},
  {id:24,name:"Mint",category:"herbs",price:50,description:"Fresh mint leaves that add a burst of flavor to any dish or drink.",image:"./res/Herbs/mint.jpg"},
  {id:25,name:"Rosemary",category:"herbs",price:80,description:"Rosemary is a fragrant evergreen herb known for its culinary and medicinal uses.",image:"./res/Herbs/rosemary-plant.jpeg"},
  {id:26,name:"Bay Leaves",category:"herbs",price:40,description:"Bay leaves are aromatic herbal leaves used to add a subtle, earthy flavor to soups, curries, and stews.",image:"./res/Herbs/Bay-Leaves.jpg"},
  {id:27,name:"Peas",category:"vegetables",price:100,description:"Pea is a small, sweet green legume packed with nutrients and used in a variety of dishes.",image:"./res/Vegetables/pea.jpg"},
  {id:28,name:"Potatoes",category:"vegetables",price:250,description:"Potato is a versatile, starchy vegetable used worldwide for its rich texture and mild, comforting flavor.",image:"./res/Vegetables/Potatoes.jpg"},
  {id:29,name:"Capsicum",category:"vegetables",price:100,description:"Capsicum is a colorful, crunchy vegetable known for its mild sweetness and vibrant flavor in dishes.",image:"./res/Vegetables/capsicum.jpg"},
  {id:30,name:"Cherry",category:"fruits",price:150,description:"Cherry is a small, juicy fruit loved for its sweet-tart flavor and bright, vibrant color.",image:"./res/Fruits/cherry.jpg"},
  {id:31,name:"Kiwi",category:"fruits",price:300,description:"Kiwi is a tangy, nutrient-rich fruit known for its vibrant green flesh and refreshing flavor.",image:"./res/Fruits/kiwi.jpg"},
  {id:32,name:"Aloe Vera",category:"herbs",price:100,description:"Aloe vera is a soothing, succulent plant valued for its healing gel and skin-nourishing benefits.",image:"./res/Herbs/aloevera.jpg"},
];

// ------------------- Cart Helpers -------------------
function getCart() { return JSON.parse(localStorage.getItem("cart")) || []; }
function saveCart(cart) { localStorage.setItem("cart", JSON.stringify(cart)); }
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((a,b)=>a+b.quantity,0);
  const el = document.getElementById("cart-count");
  if(el) el.innerText = count;
}

// ------------------- Toast -------------------
function showToast(message){
  const toast = document.createElement("div");
  toast.className = "toast"; 
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(()=> toast.remove(),1500);
}

// ------------------- Add to Cart -------------------
// ------------------- Add to Cart -------------------
function addToCart(productId){
  let cart = getCart();
  const product = products.find(p => p.id === productId);
  const existing = cart.find(i => i.id === productId);

  if(existing){
    existing.quantity++;
  } else {
    cart.push({...product, quantity: 1});
  }

  saveCart(cart);
  updateCartCount();
  showToast(`${product.name} added to cart!`);

  // If on cart page, auto-update
  if(document.getElementById("cart-page")){
    renderCartPage();
  }
}

// ------------------- Render Products -------------------
function renderProducts(list){
  const productList = document.getElementById("product-list");
  if(!productList) return;
  productList.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div"); 
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="price">₹${item.price} / kg</p>

      
        <div class="card-buttons">
          <button class="buy-now-btn">Buy Now</button>
          <button class="add-btn">Add to Cart</button>
        </div>

      </div>
    `;

    // Add to Cart event
    card.querySelector(".add-btn").addEventListener("click", () => addToCart(item.id));

    // BUY NOW event
    /* BUY NOW */
    card.querySelector(".buy-now-btn").addEventListener("click", () => buyNow(item.id));

    productList.appendChild(card);
  });
}

// ------------------- Category Filter -------------------
let selectedCategory = "all";

const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    // Remove active class from all buttons
    categoryButtons.forEach(b => b.classList.remove("active"));
    // Add active class to clicked button
    e.target.classList.add("active");
    
    selectedCategory = e.target.getAttribute("data-category");
    filterProducts();
  });
});

// Set "All" button as active by default
if(categoryButtons.length > 0) categoryButtons[0].classList.add("active");

function filterProducts(){
  const searchValue = document.getElementById("search")?.value.toLowerCase() || "";
  let filtered = products;
  
  // Filter by category
  if(selectedCategory !== "all"){
    filtered = filtered.filter(p => p.category === selectedCategory);
  }
  
  // Filter by search
  if(searchValue){
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchValue));
  }
  
  renderProducts(filtered);
}

// ------------------- Search -------------------
const searchInput = document.getElementById("search");
if(searchInput){
  searchInput.addEventListener("input", e=>{
    filterProducts();
  });
}

// ------------------- Cart Page Rendering -------------------
function renderCartPage(){
  const cartPage = document.getElementById("cart-page");
  if(!cartPage) return;
  cartPage.innerHTML = "";
  const cart = getCart();

  if(cart.length === 0){
    cartPage.innerHTML = "<p>Your cart is empty 🛒</p>";
    return;
  }

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <div>
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price} x ${item.quantity}</p>
      </div>
      <button class="remove-btn">❌ Remove</button>
    `;
    cartItem.querySelector(".remove-btn").addEventListener("click", ()=>removeFromCart(item.id));
    cartPage.appendChild(cartItem);
  });

  const totalDiv = document.createElement("div");
  totalDiv.className = "cart-total";
  totalDiv.innerText = "Total: ₹" + total;
  cartPage.appendChild(totalDiv);
}

// Display cart items with quantity controls
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartPage = document.getElementById('cart-page');

  if (cart.length === 0) {
    cartPage.innerHTML = '<p class="empty-cart">Your cart is empty 🛒</p>';
    return;
  }

  let cartHTML = '<div class="cart-container">';
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartHTML += `
      <div class="cart-item">
        <div class="item-image">
          <img src="${item.image || 'placeholder.png'}" alt="${item.name}">
        </div>

        <div class="item-details">
          <h3>${item.name}</h3>
          <p class="item-price">₹${item.price}</p>
        </div>
        
        <div class="quantity-control">
          <button class="qty-btn minus-btn" onclick="updateQuantity(${index}, -1)">−</button>
          <input type="number" class="qty-input" value="${item.quantity}" min="1" onchange="changeQuantity(${index}, this.value)" readonly>
          <button class="qty-btn plus-btn" onclick="updateQuantity(${index}, 1)">+</button>
        </div>

        <div class="item-total">
          <p>₹${itemTotal}</p>
        </div>

        <button class="remove-btn" onclick="removeFromCart(${index})">🗑️ Remove</button>
      </div>
    `;
  });

  cartHTML += '</div>';
  cartHTML += `<div class="cart-summary"><h3>Total: ₹${total}</h3></div>`;
  // Add Place Order button (yellow) and Save Cart
  cartHTML += `<div style="margin-top:12px; display:flex; gap:8px;"><button class="btn btn-yellow" onclick="placeOrderFromCart()">Place Order</button><button class="btn btn-ghost" onclick="saveCartDraft()">Save Cart</button></div>`;
  cartPage.innerHTML = cartHTML;
}

// Update quantity by increment/decrement
function updateQuantity(index, change) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart[index]) {
    const newQuantity = cart[index].quantity + change;

    if (newQuantity < 1) {
      if (confirm('Remove this item from cart?')) {
        removeFromCart(index);
      }
      return;
    }

    cart[index].quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
}

// Change quantity via direct input
function changeQuantity(index, newQuantity) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const quantity = parseInt(newQuantity);

  if (quantity < 1) {
    alert('Quantity must be at least 1');
    displayCart();
    return;
  }

  if (cart[index]) {
    cart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
}

// Remove item from cart
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

// Helper to generate simple order id
// Generate a unique alphanumeric ID (letters + digits) and ensure no collision with stored orders
function generateUniqueId(prefix, length = 8){
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const orders = JSON.parse(localStorage.getItem('orders')||'[]');
  const existing = new Set((orders||[]).map(o => o.id));
  let attempt = 0;
  while(attempt < 1000){
    let id = '';
    for(let i=0;i<length;i++) id += chars[Math.floor(Math.random()*chars.length)];
    const candidate = prefix + '-' + id;
    if(!existing.has(candidate)) return candidate;
    attempt++;
  }
  return prefix + '-' + Math.random().toString(36).substr(2,8).toUpperCase();
}

// Place an order from the entire cart (demo/local only)
function placeOrderFromCart(){
  // Instead of placing order immediately, redirect user to buy.html with cart prefilled
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if(!cart || cart.length === 0){ alert('Your cart is empty'); return; }
  // save cart to buyCart so buy.html can render checkout for multiple items
  localStorage.setItem('buyCart', JSON.stringify(cart));
  // open buy.html where user will enter shipping/payment details and confirm
  window.location.href = 'buy.html';
}

// Save current cart as a draft (simple alias)
function saveCartDraft(){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  localStorage.setItem('orderDraft', JSON.stringify({ items: cart, savedAt: new Date().toISOString() }));
  showToast('Cart saved as draft');
}

// ------------------- Login -------------------
if(document.getElementById("login-form")){
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username && password){
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", username);
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Please enter username and password!");
    }
  });
}

// ------------------- Protect Pages -------------------
if(!window.location.href.includes("login.html") && !window.location.href.includes("register.html")){
  const loggedIn = localStorage.getItem("loggedIn");
  if(!loggedIn){ window.location.href="login.html"; }
}

// ------------------- Logout -------------------
const logoutBtn = document.getElementById("logout-btn");
if(logoutBtn){
  logoutBtn.addEventListener("click", ()=>{
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    alert("Logged out!");
    window.location.href="login.html";
  });
}

// ------------------- Initialize -------------------
renderProducts(products);
updateCartCount();
if(document.getElementById("cart-page")){
  renderCartPage();
}

// Store a simple productId -> image map in localStorage for other pages to use as a fallback
try{
  const productImages = {};
  products.forEach(p => { if(p && p.id) productImages[p.id] = p.image || p.img || ''; });
  localStorage.setItem('productImages', JSON.stringify(productImages));
}catch(e){/* ignore */}

/* BUY NOW */
function buyNow(productId){
  // Instead of directly adding to cart and opening cart page,
  // save selected product to localStorage and open the purchase page
  const product = products.find(p => p.id === productId);
  if(product){
    // store minimal product info for the buy flow
    const buyProduct = { id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image, desc: product.description };
    localStorage.setItem('buyProduct', JSON.stringify(buyProduct));
  }
  window.location.href = "buy.html";
}

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', displayCart);
