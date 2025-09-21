// ===== HERO QUOTES ROTATION =====
const quotes = [
  "Eat healthy, live healthy.",
  "Your body is your home take care of it.",
  "Small steps lead to big health changes.",
  "Nourish to flourish.",
  "Wellness is the best wealth."
];

let quoteIndex = 0;
const quoteElement = document.getElementById("slogan");

function changeQuote() {
  quoteIndex = (quoteIndex + 1) % quotes.length; // Loop back to start
  quoteElement.textContent = `"${quotes[quoteIndex]}"`;
}

// Change every 4 seconds
setInterval(changeQuote, 4000);


// ===== HEALTH TIP OF THE DAY =====
const tips = [
  "Drink at least 8 glasses of water today.",
  "Take a 10-minute walk after each meal.",
  "Eat at least 3 servings of vegetables today.",
  "Get 7-8 hours of quality sleep tonight.",
  "Stretch for 5 minutes every morning.",
  "Swap sugary drinks for water or herbal tea.",
  "Practice deep breathing for 5 minutes."
];

// Get today's date (0–6) → always same tip for same day
const today = new Date();
const dayIndex = today.getDate() % tips.length;

// Display the tip
document.getElementById("health-tip").textContent = tips[dayIndex];
document.getElementById("health-tip").style.color = "#ffffff"
