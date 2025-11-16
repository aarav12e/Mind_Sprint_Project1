  // ------------------- Products -------------------
const products = [
  {id:1,name:"Ugly Apples 🍎",catogary:"fruits",price:50,description:"Fresh but oddly shaped apples from local farms.",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"},
  {id:2,name:"Twisted Carrots 🥕",catogary:"vegetables", price:40,description:"Nutrient-rich carrots that look a bit funny.",image:"./res/carrot.jpeg"},
  {id:3,name:"Curvy Bananas 🍌",catogary:"fruits", price:30,description:"Perfectly ripe bananas with unusual shapes.",image:"./res/banana.jpg"},
  {id:4,name:"Knobby Tomatoes 🍅",catogary:"vegetables", price:35,description:"Juicy tomatoes with funny bumps and curves.",image:"./res/tomato.jpg"},
  {id:5,name:"Misshaped Pears 🍐",catogary:"fruits",price:45,description:"Sweet pears that didn’t meet supermarket standards.",image:"./res/pears.jpeg"},
  {id:6,name:"Odd Strawberries 🍓",catogary:"fruits",price:60,description:"Fresh strawberries with unusual shapes but full of flavor.",image:"./res/straw.jpeg"},
  {id:7,name:"jack fruit 🥭",catogary:"fruits",price:500,description:"Jackfruit is a giant tropical fruit with a spiky green exterior and sweet, fibrous yellow flesh.",image:"./res/jack.jpeg"},
  {id:8,name:"Dairng Dragon  🐉",catogary:"fruits",price:1600,description:"Exotic and vibrant dragon fruits full of nutrients.",image:"./res/dragond.jpg"},
  {id:9,name:"lady finger 🥒",catogary:"vegetables",price:40,description: "quick and tasty lady finger recipe! Easy to cook and super delicious:",image:"./res/ladyfinger.jpeg"},
  {id:10,name:"Wonky Brinjals 🍆",catogary:"vegetables",price:55,description:"Tasty brinjals with quirky shapes, perfect for cooking.", image:"./res/brinjal.jpg"},
  {id:11,name:"pumpkin 🎃",catogary:"vegetables",price:100,description:" pumpkin is a round, orange fruit with thick skin and seeds inside. It’s used for cooking, decoration, and making pies.",image:"./res/pumpkin.jpeg"},
  {id:12,name:"Berry Blue berry 🫐",catogary:"fruits",price:300,description:"Blue Berry A burst of freshness in every bite.Sweet, juicy, and packed with antioxidants.",image:"./res/berry.png"},
  {id:13,name:"rotten onion 🧅",catogary:"vegetables",price:181,description:"rotten onion full of flavours.",image:"./res/Onion.jpg"},
  {id:15,name:"cauliflower 🥦",catogary:"vegetables",price:70,description:"Fresh and nutritious cauliflower – tasty, healthy, and perfect for every Indian dish",image:"./res/cauliflower.jpeg"},
  {id:16,name:"Papaya",catogary:"fruits",price:120, description:"Papaya is a sweet, tropical fruit rich in vitamins that boosts immunity and promotes healthy digestion. 🍈✨", image:"./res/papaya.png" },
  {id:17,name:"Cucumber",catogary:"vegetables",price:400, description:"Cucumber is a healthy vegetable, tropical vegetable rich in water.",image:"./res/cucumber.jpg"},
  {id:18,name:"grapes",catogary:"fruits",price:500,description:"grapes A burst of freshness in every bite.Sweet, juicy. ",image:"./res/grapes.jpeg"},
  {id:19,name:"elephantfoot",catogary:"vegetables",price:200,description:"Elephantfoot yam is a large, starchy tuber resembling an elephant’s foot, widely used as a nutritious tropical vegetable.",image:"./res/elephantfoot.jpeg"},
  {id:20,name:"plum🍑",catogary:"fruits",price:55,description:"A sweet and juicy fruit with smooth skin and a single pit inside.",image:"./res/plum.png"},
  {id:21,name:"zuchini",catogary:"vegetables",price:170,description:"Zucchini is a versatile summer squash with a mild flavor, perfect for grilling, roasting, or adding to salads and stir-fries.",image:"./res/zucchini.jpg"},
  {id:22,name:"Cynara cardunculus",catogary:"vegetables",price:250,description:"Cynara cardunculus, commonly known as cardoon, is a thistle-like vegetable related to the artichoke, valued for its edible stalks and flower buds.",image:"./res/artichokes.jpg"},
  {id:23,name:"bazela",catogary:"herbs",price:300,description:"it is a nice aromatic herb used in most Italian cusine, its freshness and taste enhances the flavour of food.",image:"./res/basil.jpg"},
  {id:24,name:"mint",catogary:"herbs",price:50,description:"Fresh mint leaves that add a burst of flavor to any dish or drink.",image:"./res/mint.jpg"}
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
    filtered = filtered.filter(p => p.catogary === selectedCategory);
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

/* BUY NOW */
function buyNow(productId){
  addToCart(productId);          // Pehle cart me add
  window.location.href = "cart.html"; // Phir redirect
}
