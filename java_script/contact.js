// Form validation + localStorage
const form = document.querySelector(".contact-form-section form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Confirmation message container
let confirmBox = document.createElement("p");
confirmBox.classList.add("confirm-msg");
form.appendChild(confirmBox);

// Validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Validation
  if (name.length < 2) {
    confirmBox.textContent = "⚠️ Name must be at least 2 characters.";
    confirmBox.style.color = "red";
    return;
  }
  if (/\d/.test(name)) { 
    confirmBox.textContent = "⚠️ Name cannot contain numbers.";
    confirmBox.style.color = "red";
    return;
  }

  if (!isValidEmail(email)) {
    confirmBox.textContent = "⚠️ Please enter a valid email address.";
    confirmBox.style.color = "red";
    return;
  }
  if (message.length < 5) {
    confirmBox.textContent = "⚠️ Message must be at least 5 characters.";
    confirmBox.style.color = "red";
    return;
  }

  // Save feedback in localStorage
  const feedback = {
    name,
    email,
    message,
    date: new Date().toLocaleString()
  };

  let feedbackList = JSON.parse(localStorage.getItem("feedbacks")) || [];
  feedbackList.push(feedback);
  localStorage.setItem("feedbacks", JSON.stringify(feedbackList));

  // Show confirmation
  confirmBox.textContent = "✅ Thank you for your feedback!";
  confirmBox.style.color = "green";

  // Reset form
  form.reset();
});

// ===== FAQ Accordion =====
const faqItems = document.querySelectorAll(".faq-item h3");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;
    const arrow = item.querySelector(".arrow");
    parent.classList.toggle("active");

    if (parent.classList.contains("active")) {
      arrow.textContent = "▲"; // up
    } else {
      arrow.textContent = "▼"; // down
    }

    // Collapse others
    faqItems.forEach((other) => {
      if (other !== item) {
        other.parentElement.classList.remove("active");
      }
    });
  });
});
