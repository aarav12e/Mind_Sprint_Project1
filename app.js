  // ------------------- Products -------------------
const products = [
  {id:1,name:"Ugly Apples 🍎",price:50,description:"Fresh but oddly shaped apples from local farms.",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"},
  {id:2,name:"Twisted Carrots 🥕",price:40,description:"Nutrient-rich carrots that look a bit funny.",image:"./res/carrot.jpeg"},
  {id:3,name:"Curvy Bananas 🍌",price:30,description:"Perfectly ripe bananas with unusual shapes.",image:"./res/banana.jpg"},
  {id:4,name:"Knobby Tomatoes 🍅",price:35,description:"Juicy tomatoes with funny bumps and curves.",image:"./res/tomato.jpg"},
  {id:5,name:"Misshaped Pears 🍐",price:45,description:"Sweet pears that didn’t meet supermarket standards.",image:"./res/pears.jpeg"},
  {id:6,name:"Odd Strawberries 🍓",price:60,description:"Fresh strawberries with unusual shapes but full of flavor.",image:"./res/straw.jpeg"},
  
  
  
  
  
  {id:11,name:"pumpkin 🎃",price:100,description:" pumpkin is a round, orange fruit with thick skin and seeds inside. It’s used for cooking, decoration, and making pies.",image:"./res/pumpkin.jpeg"},
  {id:7,name:"jack fruit 🥭",price:500,description:"Jackfruit is a giant tropical fruit with a spiky green exterior and sweet, fibrous yellow flesh that tastes like a mix of mango, banana, and pineapple.",image:"./res/jack.jpeg"},





  {id:12,name:"Berry Blue berry 🫐", price:300,description:"Blue Berry A burst of freshness in every bite.Sweet, juicy, and packed with antioxidants, Blue Berry brings natural goodness and vibrant flavor to your day",image:"./res/berry.png"}
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

  // Update cart page dynamically
  if(document.getElementById("cart-page")){
    renderCartPage();
  }
}

// ------------------- Render Products -------------------
function renderProducts(list){
  const productList = document.getElementById("product-list");
  if(!productList) return;
  productList.innerHTML = "";
  list.forEach(item=>{
    const card = document.createElement("div"); 
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="price">₹${item.price} / kg</p>
        <button class="add-btn">Add to Cart</button>
      </div>`;
    card.querySelector(".add-btn").addEventListener("click", ()=>addToCart(item.id));
    productList.appendChild(card);
  });
}

// ------------------- Search -------------------
const searchInput = document.getElementById("search");
if(searchInput){
  searchInput.addEventListener("input", e=>{
    const value = e.target.value.toLowerCase();
    const filtered = products.filter(p=>p.name.toLowerCase().includes(value));
    renderProducts(filtered);
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

// ------------------- Remove from Cart -------------------
function removeFromCart(productId){
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  updateCartCount();
  renderCartPage();
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
if(!window.location.href.includes("login.html")){
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
