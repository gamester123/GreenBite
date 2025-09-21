// ===== Recipe Data =====
const recipes = [
  // ===== BREAKFAST =====
  {
    id: 1,
    title: "Scrambled Eggs with Toast",
    category: "breakfast",
    image: "Images/toast.jpg",
    shortDesc: "Fluffy scrambled eggs served on wholegrain toast.",
    description:
      "A simple, protein-rich breakfast loved everywhere. Use less oil and wholegrain bread to keep it healthy.",
    ingredients: [
      "2 eggs",
      "1 tsp milk",
      "1 tsp butter/olive oil",
      "Salt & pepper",
      "2 slices wholegrain bread",
    ],
    steps: [
      "Beat eggs with a splash of milk, salt, and pepper.",
      "Cook gently in butter/olive oil until fluffy.",
      "Toast the bread and serve together.",
    ],
    nutrition: { Calories: "300 kcal", Protein: "17g", Carbs: "28g", Fat: "12g" },
  },
  {
    id: 2,
    title: "Porridge with Banana",
    category: "breakfast",
    image: "Images/banana porridge.webp",
    shortDesc: "Warm oatmeal topped with sliced banana.",
    description:
      "Oats with milk or water make a cheap, healthy breakfast. Natural sweetness from banana instead of sugar.",
    ingredients: [
      "1/2 cup rolled oats",
      "1 cup milk or water",
      "1 banana, sliced",
    ],
    steps: [
      "Cook oats with milk or water until soft.",
      "Top with banana slices.",
    ],
    nutrition: { Calories: "280 kcal", Protein: "8g", Carbs: "50g", Fat: "4g" },
  },

  // ===== LUNCH =====
  {
    id: 3,
    title: "Grilled Chicken Salad",
    category: "lunch",
    image: "Images/chicken salad.jpg",
    shortDesc: "Chicken breast served with mixed salad greens.",
    description:
      "A very common healthy lunch: lean chicken breast with crisp vegetables and light dressing.",
    ingredients: [
      "150g grilled chicken breast",
      "Mixed salad leaves",
      "1 tomato, sliced",
      "1 cucumber",
      "1 tbsp olive oil + lemon",
    ],
    steps: [
      "Grill chicken breast until cooked through.",
      "Slice and mix with salad leaves, tomato, cucumber.",
      "Drizzle olive oil and lemon juice.",
    ],
    nutrition: { Calories: "350 kcal", Protein: "30g", Carbs: "12g", Fat: "18g" },
  },
  {
    id: 4,
    title: "Rice and Mixed Vegetables",
    category: "lunch",
    image: "Images/mixed rice.avif",
    shortDesc: "Steamed rice with sautéed or boiled vegetables.",
    description:
      "Plain rice with mixed veggies is one of the most common healthy meals eaten worldwide.",
    ingredients: [
      "1 cup cooked rice (white or brown)",
      "1 cup broccoli, carrot, beans",
      "Salt, pepper",
      "1 tsp olive oil",
    ],
    steps: [
      "Cook rice separately.",
      "Steam or lightly stir-fry vegetables.",
      "Serve together with light seasoning.",
    ],
    nutrition: { Calories: "300 kcal", Protein: "7g", Carbs: "60g", Fat: "4g" },
  },

  // ===== DINNER =====
  {
    id: 5,
    title: "Baked Fish with Vegetables",
    category: "dinner",
    image: "Images/baked fish.jpg",
    shortDesc: "Fish fillet baked with carrots, beans, and zucchini.",
    description:
      "Fish baked in the oven with vegetables — a quick, common, and very healthy dinner worldwide.",
    ingredients: [
      "1 fish fillet (salmon, tilapia, cod)",
      "1 cup mixed vegetables",
      "1 tbsp olive oil",
      "Salt, pepper, lemon",
    ],
    steps: [
      "Preheat oven to 200°C.",
      "Place fish and veggies on tray, season with olive oil, salt, pepper.",
      "Bake for 20 minutes until fish flakes apart.",
    ],
    nutrition: { Calories: "400 kcal", Protein: "32g", Carbs: "18g", Fat: "20g" },
  },

  {
    id: 6,
    title: "Salmon Sushi Rolls",
    category: "dinner",
    image: "Images/sushi.jpg",
    shortDesc: "Rice rolls filled with salmon and vegetables.",
    description:
      "Simple homemade sushi rolls (maki) with salmon, cucumber, and rice. A popular Japanese dish known worldwide.",
    ingredients: [
      "1 cup sushi rice",
      "1 sheet nori (seaweed)",
      "50g raw or smoked salmon",
      "1/4 cucumber, sliced",
      "Rice vinegar",
    ],
    steps: [
      "Cook sushi rice and season with rice vinegar.",
      "Lay nori on a mat, spread rice thinly.",
      "Place salmon and cucumber in center, roll tightly.",
      "Cut into bite-sized pieces."
    ],
    nutrition: { Calories: "300 kcal", Protein: "14g", Carbs: "45g", Fat: "6g"},
  },

  // ===== SNACKS =====
  {
    id: 7,
    title: "Fruit Salad",
    category: "snacks",
    image: "Images/fruit salad.jpg",
    shortDesc: "Mixed seasonal fruits in a bowl.",
    description:
      "The simplest and most common healthy snack across cultures: a bowl of fresh fruits.",
    ingredients: [
      "1 apple",
      "1 banana",
      "1 cup papaya/pineapple/orange",
      "1 tsp lemon juice",
    ],
    steps: [
      "Chop fruits into bite-size pieces.",
      "Mix in a bowl with a dash of lemon juice.",
    ],
    nutrition: { Calories: "150 kcal", Protein: "2g", Carbs: "36g", Fat: "0g" },
  },
  {
    id: 8,
    title: "Fruit Smoothie",
    category: "snacks",
    image: "Images/fruit smoothie.jpg",
    shortDesc: "Refreshing blended smoothie with banana and berries.",
    description:
      "Fruit smoothies are a popular healthy snack worldwide. They’re quick to prepare, naturally sweet, and packed with vitamins and fiber.",
    ingredients: [
      "1 ripe banana",
      "1/2 cup mixed berries (strawberries, blueberries, etc.)",
      "1/2 cup low-fat yogurt or milk",
      "1 tsp honey (optional)",
      "3–4 ice cubes"
    ],
    steps: [
      "Peel banana and add to blender.",
      "Add berries, yogurt (or milk), and honey.",
      "Blend until smooth.",
      "Pour into a glass and serve chilled."
    ],
    nutrition: {
      Calories: "210 kcal",
      Protein: "6g",
      Carbs: "45g",
      Fat: "2g"
    }
  }
];

// ===== DOM Elements =====
const recipeGrid = document.querySelector(".recipe-grid");
const filterSelect = document.getElementById("recipe-filter");
const searchInput = document.getElementById("recipe-search");
const modal = document.getElementById("recipe-modal");
const closeBtn = modal.querySelector(".close-btn");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalIngredients = document.getElementById("modal-ingredients");
const modalSteps = document.getElementById("modal-steps");
const modalNutrition = document
  .getElementById("modal-nutrition")
  .querySelector("tbody");

// ===== Functions =====
function displayRecipes(list) {
  recipeGrid.innerHTML = "";
  if (list.length === 0) {
    recipeGrid.innerHTML = `<p class="no-recipes">⚠️ No recipes found.</p>`;
    return;
  }
  list.forEach((recipe) => {
    const card = document.createElement("article");
    card.classList.add("recipe-card");
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <div class="recipe-content">
        <h2>${recipe.title}</h2>
        <p>${recipe.shortDesc}</p>
        <button class="btn view-recipe" data-id="${recipe.id}">
          View Recipe
        </button>
      </div>
    `;
    recipeGrid.appendChild(card);
  });
}

function filterRecipes() {
  const category = filterSelect.value;
  const searchTerm = searchInput.value.toLowerCase();

  const filtered = recipes.filter((recipe) => {
    const matchesCategory = category === "all" || recipe.category === category;
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  displayRecipes(filtered);
}

function openModal(id) {
  const recipe = recipes.find((r) => r.id == id);
  if (!recipe) return;

  modalTitle.textContent = recipe.title;
  modalImage.src = recipe.image;
  modalImage.alt = recipe.title;
  modalDescription.textContent = recipe.description;

  modalIngredients.innerHTML = recipe.ingredients
    .map((i) => `<li>${i}</li>`)
    .join("");

  modalSteps.innerHTML = recipe.steps.map((s) => `<li>${s}</li>`).join("");

  modalNutrition.innerHTML = Object.entries(recipe.nutrition)
    .map(([nut, val]) => `<tr><td>${nut}</td><td>${val}</td></tr>`)
    .join("");

  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// ===== Event Listeners =====
filterSelect.addEventListener("change", filterRecipes);
searchInput.addEventListener("input", filterRecipes);

recipeGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-recipe")) {
    openModal(e.target.dataset.id);
  }
});

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ===== Initial Render =====
displayRecipes(recipes);