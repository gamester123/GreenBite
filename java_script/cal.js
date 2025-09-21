// ===== CALORIE & NUTRITION CALCULATOR WITH ANIMATED COUNTERS =====
const form = document.querySelector(".calculator-section form");

// Result fields
const bmrResult = document.getElementById("bmr-result");
const tdeeResult = document.getElementById("tdee-result");
const maintainResult = document.getElementById("maintain-result");
const lossResult = document.getElementById("loss-result");
const gainResult = document.getElementById("gain-result");
const carbsResult = document.getElementById("carbs-result");
const proteinResult = document.getElementById("protein-result");
const fatResult = document.getElementById("fat-result");

// Counter animation function
function animateCounter(element, target, duration = 1200) {
  let start = 0;
  const increment = target / (duration / 16); // ~60fps
  const counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.round(start);
    }
  }, 16);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const activity = parseFloat(document.getElementById("activity").value);

  if (!age || !height || !weight || !activity || !gender) {
    alert("⚠️ Please fill in all fields correctly.");
    return;
  }

  // 1. Calculate BMR
  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // 2. Calculate TDEE
  const tdee = bmr * activity;

  // 3. Calorie goals
  const maintain = Math.round(tdee);
  const loss = Math.round(tdee - 500);
  const gain = Math.round(tdee + 500);

  // 4. Macronutrient breakdown
  const carbs = Math.round((0.5 * tdee) / 4);
  const protein = Math.round((0.2 * tdee) / 4);
  const fat = Math.round((0.3 * tdee) / 9);

  // Animate results
  animateCounter(bmrResult, Math.round(bmr));
  animateCounter(tdeeResult, maintain);
  animateCounter(maintainResult, maintain);
  animateCounter(lossResult, loss);
  animateCounter(gainResult, gain);
  animateCounter(carbsResult, carbs);
  animateCounter(proteinResult, protein);
  animateCounter(fatResult, fat);
});
