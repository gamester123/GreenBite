// Reusable notification system
function showMessage(message) {
    let existing = document.getElementById("custom-message-box");
    if (existing) existing.remove();

    let box = document.createElement("div");
    box.id = "custom-message-box";
    box.innerText = message;
    box.style.position = "fixed";
    box.style.bottom = "20px";
    box.style.right = "20px";
    box.style.background = "#333";
    box.style.color = "white";
    box.style.padding = "10px 20px";
    box.style.borderRadius = "8px";
    box.style.zIndex = "9999";
    box.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
    document.body.appendChild(box);

    setTimeout(() => {
        box.remove();
    }, 3000);
}

// Scroll reveal effect
function revealOnScroll() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("visible");
        }
    }
}
window.addEventListener("scroll", revealOnScroll);

// Example JSON Data
const recipeData = [
    { name: "Grilled Chicken Salad", calories: 400 },
    { name: "Avocado Toast", calories: 250 },
    { name: "Fruit Smoothie", calories: 300 }
];

const workoutData = [
    { name: "Push Ups", reps: "3 x 15" },
    { name: "Squats", reps: "3 x 20" },
    { name: "Plank", reps: "3 x 60s" }
];

// Load Recipes
function loadRecipes() {
    const container = document.getElementById("recipes-container");
    if (!container) return;
    recipeData.forEach(r => {
        let div = document.createElement("div");
        div.className = "recipe-card reveal";
        div.innerHTML = `<h3>${r.name}</h3><p>Calories: ${r.calories}</p>`;
        container.appendChild(div);
    });
}

// Load Workouts
function loadWorkouts() {
    const container = document.getElementById("workouts-container");
    if (!container) return;
    workoutData.forEach(w => {
        let div = document.createElement("div");
        div.className = "workout-card reveal";
        div.innerHTML = `<h3>${w.name}</h3><p>${w.reps}</p>`;
        container.appendChild(div);
    });
}

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let valid = true;
        form.querySelectorAll("input, textarea").forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
            }
        });
        if (!valid) {
            showMessage("❌ Please fill out all fields!");
        } else {
            showMessage("✅ Form submitted successfully!");
            localStorage.setItem("formData", JSON.stringify(Object.fromEntries(new FormData(form))));
            form.reset();
        }
    });
}

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then(reg => console.log("✅ Service Worker registered:", reg.scope))
      .catch(err => console.log("❌ Service Worker failed:", err));
  });
}


