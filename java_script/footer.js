// ===== NEWSLETTER SUBSCRIPTION =====
const newsletterForm = document.getElementById("newsletter-form");
const emailInput = document.getElementById("newsletter-email");
const message = document.getElementById("newsletter-message");

newsletterForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Stop page reload

  const email = emailInput.value.trim();

  if (email) {
    // Get existing emails from localStorage
    let storedEmails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];

    // Check if email already subscribed
    if (!storedEmails.includes(email)) {
      storedEmails.push(email);
      localStorage.setItem("newsletterEmails", JSON.stringify(storedEmails));
      message.textContent = "✅ Thank you for subscribing!";
      message.style.color = "#c8e6c9";
    } else {
      message.textContent = "⚠️ You are already subscribed.";
      message.style.color = "#ffe082";
    }
    
    emailInput.value = ""; // Clear input
  } else {
    message.textContent = "❌ Please enter a valid email.";
    message.style.color = "#ffcdd2";
  }
});
