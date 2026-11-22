// База рецептів
const recipesData = [
  {
    id: 1,
    title: "Класичний український борщ",
    category: "soup",
    categoryName: "Супи",
    prepTime: "25 хв",
    cookTime: "60 хв",
    difficulty: "Середньо",
    calories: "320 ккал",
    baseServings: 4,
    description: "Наваристий, ароматний червоний борщ із буряком, квасолею, свіжою капустою та часниковою заправкою.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Яловичина на кістці", amount: 500, unit: "г" },
      { name: "Буряк червоний", amount: 2, unit: "шт" },
      { name: "Картопля", amount: 4, unit: "шт" },
      { name: "Капуста білокачанна", amount: 300, unit: "г" },
      { name: "Морква та цибуля", amount: 2, unit: "шт" },
      { name: "Томатна паста", amount: 2, unit: "ст. л." }
    ],
    instructions: [
      "Зваріть прозорий м'ясний бульйон протягом 45 хвилин, знімаючи піну.",
      "Наріжте картоплю кубиками та додайте в киплячий бульйон.",
      "Натріть буряк і моркву, обсмажте з цибулею та томатною пастою на сковороді 10 хвилин.",
      "Додайте нашатковану капусту та бурякову засмажку до каструлі, варіть ще 15 хвилин.",
      "Приправте сіллю, перцем, лавровим листом та подавайте зі сметаною і зеленню."
    ]
  },
  {
    id: 2,
    title: "Сирники з ваніллю та ягодами",
    category: "breakfast",
    categoryName: "Сніданки",
    prepTime: "10 хв",
    cookTime: "15 хв",
    difficulty: "Легко",
    calories: "410 ккал",
    baseServings: 2,
    description: "Ніжні золотисті сирники з фермерського кисломолочного сиру з рум'яною скоринкою.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Сир кисломолочний 9%", amount: 400, unit: "г" },
      { name: "Яйце куряче", amount: 1, unit: "шт" },
      { name: "Борошно пшеничне", amount: 3, unit: "ст. л." },
      { name: "Цукор", amount: 2, unit: "ст. л." },
      { name: "Ванільний цукор", amount: 1, unit: "ч. л." }
    ],
    instructions: [
      "Перетріть сир виделкою або через сито до однорідності.",
      "Додайте яйце, цукор, ваніль та 2 столові ложки борошна, ретельно перемішайте.",
      "Сформуйте невеликі шайбочки та обваляйте їх у решті борошна.",
      "Обсмажуйте на розігрітій сковороді на середньому вогні по 3–4 хвилини з кожного боку до золотистості."
    ]
  },
  {
    id: 3,
    title: "Паста Карбонара по-домашньому",
    category: "main",
    categoryName: "Основні страви",
    prepTime: "10 хв",
    cookTime: "15 хв",
    difficulty: "Легко",
    calories: "560 ккал",
    baseServings: 2,
    description: "Класичні спагеті у ніжному соусі з жовтків, витриманого пармезану та хрусткого бекону.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Спагеті з твердих сортів", amount: 250, unit: "г" },
      { name: "Бекон або панчета", amount: 150, unit: "г" },
      { name: "Яєчні жовтки", amount: 3, unit: "шт" },
      { name: "Сир Пармезан тертий", amount: 60, unit: "г" },
      { name: "Часник", amount: 1, unit: "зубчик" }
    ],
    instructions: [
      "Відваріть спагеті у підсоленій воді до стану al dente.",
      "Наріжте бекон смужками й обсмажте до хрусткої скоринки разом із роздавленим зубчиком часнику (часник потім приберіть).",
      "Збийте жовтки з тертим пармезаном та свіжомеленим чорним перцем.",
      "Перекладіть гарячі спагеті до сковороди з беконом, зніміть із вогню, влийте соус із жовтків та швидко перемішайте."
    ]
  },
  {
    id: 4,
    title: "Шоколадний фондан",
    category: "dessert",
    categoryName: "Десерти",
    prepTime: "15 хв",
    cookTime: "10 хв",
    difficulty: "Середньо",
    calories: "490 ккал",
    baseServings: 2,
    description: "Вишуканий французький десерт із тонкою бісквітною скоринкою та гарячою рідкою шоколадною серединкою.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Чорний шоколад 70%", amount: 100, unit: "г" },
      { name: "Вершкове масло", amount: 50, unit: "г" },
      { name: "Яйця курячі", amount: 2, unit: "шт" },
      { name: "Цукор", amount: 40, unit: "г" },
      { name: "Борошно", amount: 30, unit: "г" }
    ],
    instructions: [
      "Розтопіть шоколад із вершковим маслом на водяній бані до гладкої маси.",
      "Збийте яйця з цукром до легкої піни та з'єднайте з теплим шоколадом.",
      "Всипте просіяне борошно та обережно перемішайте лопаткою.",
      "Розлийте тісто у змащені маслом формочки та випікайте при 200°C рівно 8–10 хвилин."
    ]
  },
  {
    id: 5,
    title: "Боул із кіноа, авокадо та нутом",
    category: "vegan",
    categoryName: "Веганські",
    prepTime: "15 хв",
    cookTime: "15 хв",
    difficulty: "Легко",
    calories: "390 ккал",
    baseServings: 2,
    description: "Поживний збалансований боул із пряним запеченим нутом, стиглим авокадо та кунжутною заправкою.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Кіноа сухе", amount: 120, unit: "г" },
      { name: "Нут консервований", amount: 150, unit: "г" },
      { name: "Авокадо стигле", amount: 1, unit: "шт" },
      { name: "Томати чері", amount: 120, unit: "г" },
      { name: "Оливкова олія та лимонний сік", amount: 2, unit: "ст. л." }
    ],
    instructions: [
      "Промийте кіноа та відваріть у підсоленій воді 15 хвилин до готовності.",
      "Нут обсушіть, змішайте з паприкою та краплею олії, підрум'яньте на сковороді 5–7 хвилин.",
      "Наріжте авокадо скибочками, а томати чері — половинками.",
      "Викладіть усе в глибокі тарілки та полийте сумішшю оливкової олії й лимонного соку."
    ]
  },
  {
    id: 6,
    title: "Запечене філе лосося з травами",
    category: "main",
    categoryName: "Основні страви",
    prepTime: "10 хв",
    cookTime: "18 хв",
    difficulty: "Легко",
    calories: "440 ккал",
    baseServings: 2,
    description: "Ніжне філе червоної риби, запечене з лимоном, розмарином та оливковою олією.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Філе лосося", amount: 350, unit: "г" },
      { name: "Лимон", amount: 0.5, unit: "шт" },
      { name: "Оливкова олія", amount: 1, unit: "ст. л." },
      { name: "Розмарин свіжий", amount: 2, unit: "гілочки" }
    ],
    instructions: [
      "Розігрійте духовку до 190°C. Викладіть філе лосося на пергамент.",
      "Змастіть рибу оливковою олією, посоліть, поперчіть і викладіть зверху кружальця лимона та розмарин.",
      "Запікайте 15–18 хвилин, щоб риба залишилася соковитою всередині."
    ]
  }
];

// Завантажуємо рецепти, створені користувачем, із localStorage
const savedUserRecipes = JSON.parse(localStorage.getItem("cookUserRecipes") || "[]");
recipesData.push(...savedUserRecipes);

// Кулінарні поради
const culinaryTips = [
  {
    title: "Як зберегти <em>соковитість</em> м'яса при обсмажуванні?",
    text: "Завжди давайте м'ясу «відпочити» при кімнатній температурі 15–20 хвилин перед смаженням. Соліть стейк безпосередньо перед викладанням на розпечену сковороду, а після обсмажування залиште на дошці на 5 хвилин."
  },
  {
    title: "Секрет ідеально <em>розсипчастого</em> рису",
    text: "Промивайте рис у холодній воді доти, доки вона не стане прозорою — це прибере зайвий крохмаль. Після варіння не відкривайте кришку ще 10 хвилин, щоб пара рівномірно розподілилася."
  },
  {
    title: "Як зробити <em>зелень</em> знову хрусткою?",
    text: "Якщо салат або кріп трохи зів'яли, занурте їх у миску з крижаною водою та кількома краплями лимонного соку на 15 хвилин — листя миттєво відновить пружність."
  },
  {
    title: "Чому <em>часник</em> не варто пересмажувати?",
    text: "На гарячій сковороді часник готується за 30–40 секунд. Якщо тримати його довше, він підгорить і надасть всій страві різкої гіркоти."
  }
];

// Стан додатку
let currentCategory = "all";
let searchQuery = "";
let showFavoritesOnly = false;
let favorites = JSON.parse(localStorage.getItem("cookFavorites")) || [];
let currentModalRecipe = null;
let currentServings = 2;

// Безпечне відображення тексту
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

// Прибираємо цифри та знаки з назви й опису страви
function sanitizeTitleOrDescription(value) {
  return String(value ?? "")
    .replace(/\p{N}/gu, "")
    .replace(/(?!')[\p{P}\p{S}]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Перевірка безпечного URL для зображень
function isSafeImageUrl(url) {
  try {
    const parsed = new URL(url, window.location.origin);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

// Синхронізація користувацьких рецептів у localStorage
function syncUserRecipesStorage() {
  const userRecipes = recipesData.filter((recipe) => recipe.isUserRecipe);
  localStorage.setItem("cookUserRecipes", JSON.stringify(userRecipes));
}

// Видалення користувацького рецепта
function deleteUserRecipe(event, recipeId) {
  if (event) {
    event.stopPropagation();
  }

  const recipeIndex = recipesData.findIndex((r) => r.id === recipeId && r.isUserRecipe);
  if (recipeIndex === -1) return;

  const recipeTitle = sanitizeTitleOrDescription(recipesData[recipeIndex].title) || "цей рецепт";
  const confirmed = confirm(`Видалити рецепт «${recipeTitle}»?`);
  if (!confirmed) return;

  recipesData.splice(recipeIndex, 1);
  syncUserRecipesStorage();

  if (favorites.includes(recipeId)) {
    favorites = favorites.filter((id) => id !== recipeId);
    localStorage.setItem("cookFavorites", JSON.stringify(favorites));
    updateFavCounter();
  }

  if (currentModalRecipe && currentModalRecipe.id === recipeId) {
    currentModalRecipe = null;
    closeModal();
  }

  renderRecipes();
}

// Ініціалізація
document.addEventListener("DOMContentLoaded", () => {
  updateFavCounter();
  renderRecipes();

  // Мобільне меню
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Живе очищення назви та опису страви під час введення
  ["newRecipeTitle", "newRecipeDescription"].forEach((id) => {
    const input = document.getElementById(id);
    if (!input) return;

    input.addEventListener("input", () => {
      const pos = input.selectionStart;
      const cleaned = sanitizeTitleOrDescription(input.value);
      if (input.value !== cleaned) {
        input.value = cleaned;
        input.setSelectionRange(pos, pos);
      }
    });
  });

  // Закриття модалки по Escape або кліку на фон
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  document.getElementById("modalBackdrop")?.addEventListener("click", closeModal);
});

// Рендер карток рецептів
function renderRecipes() {
  const grid = document.getElementById("recipeGrid");
  const noResults = document.getElementById("noResults");
  const countLabel = document.getElementById("recipeCount");

  const filtered = recipesData.filter((recipe) => {
    const cleanTitle = sanitizeTitleOrDescription(recipe.title);
    const cleanDesc = sanitizeTitleOrDescription(recipe.description);

    const matchesCategory = currentCategory === "all" || recipe.category === currentCategory;
    const matchesFav = !showFavoritesOnly || favorites.includes(recipe.id);
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      cleanTitle.toLowerCase().includes(query) ||
      cleanDesc.toLowerCase().includes(query) ||
      recipe.ingredients.some((ing) => ing.name.toLowerCase().includes(query));

    return matchesCategory && matchesFav && matchesSearch;
  });

  countLabel.textContent = `Показано: ${filtered.length} страв`;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");
  grid.innerHTML = filtered
    .map((recipe) => {
      const isLiked = favorites.includes(recipe.id);
      const cleanTitle = sanitizeTitleOrDescription(recipe.title);
      const cleanDescription = sanitizeTitleOrDescription(recipe.description);
      const safeImg = isSafeImageUrl(recipe.image) ? recipe.image : "";
      const deleteBtnHTML = recipe.isUserRecipe
        ? `
            <button
              type="button"
              class="delete-recipe-btn"
              onclick="deleteUserRecipe(event, ${recipe.id})"
              aria-label="Видалити рецепт"
              title="Видалити рецепт"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          `
        : "";

      return `
        <article class="recipe-card" onclick="openRecipeModal(${recipe.id})">
          <div class="recipe-photo">
            <img src="${escapeHTML(safeImg)}" alt="${escapeHTML(cleanTitle)}">
            <span class="category-tag">${escapeHTML(recipe.categoryName)}</span>
            ${deleteBtnHTML}
            <button class="fav-card-btn ${isLiked ? "liked" : ""}" onclick="toggleFavorite(event, ${recipe.id})" aria-label="В улюблені">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
          <div class="recipe-info">
            <div class="recipe-meta">
              <span><i class="fa-regular fa-clock"></i> ${escapeHTML(recipe.cookTime)}</span>
              <span><i class="fa-solid fa-fire-flame-curved"></i> ${escapeHTML(recipe.calories)}</span>
              <span>${escapeHTML(recipe.difficulty)}</span>
            </div>
            <h3>${escapeHTML(cleanTitle)}</h3>
            <p>${escapeHTML(cleanDescription)}</p>
            <span class="recipe-open">ВІДКРИТИ РЕЦЕПТ &rarr;</span>
          </div>
        </article>
      `;
    })
    .join("");
}

// Фільтрація за категорією
function filterCategory(category, btnElement) {
  currentCategory = category;
  showFavoritesOnly = false;
  document.getElementById("favToggleBtn").classList.remove("active");

  document.querySelectorAll("#categoryPillsContainer .filter").forEach((btn) => {
    btn.classList.remove("active");
  });
  if (btnElement) btnElement.classList.add("active");

  renderRecipes();
}

// Пошук
function handleSearch(event) {
  searchQuery = event.target.value;
  renderRecipes();
}

function triggerHeroSearch() {
  const heroInput = document.getElementById("heroSearchInput");
  const catalogInput = document.getElementById("headerSearchInput");
  searchQuery = heroInput.value;
  if (catalogInput) catalogInput.value = searchQuery;
  renderRecipes();
  document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
}

// Улюблені рецепти
function toggleFavorite(event, recipeId) {
  event.stopPropagation();
  if (favorites.includes(recipeId)) {
    favorites = favorites.filter((id) => id !== recipeId);
  } else {
    favorites.push(recipeId);
  }
  localStorage.setItem("cookFavorites", JSON.stringify(favorites));
  updateFavCounter();
  renderRecipes();
}

function updateFavCounter() {
  document.getElementById("favCounter").textContent = favorites.length;
}

function toggleFavoritesFilter() {
  showFavoritesOnly = !showFavoritesOnly;
  document.getElementById("favToggleBtn").classList.toggle("active", showFavoritesOnly);
  renderRecipes();
  document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
}

// Модальне вікно рецепту + калькулятор порцій
function openRecipeModal(recipeId) {
  const recipe = recipesData.find((r) => r.id === recipeId);
  if (!recipe) return;

  currentModalRecipe = recipe;
  currentServings = recipe.baseServings;

  const cleanTitle = sanitizeTitleOrDescription(recipe.title);
  const cleanDescription = sanitizeTitleOrDescription(recipe.description);
  const safeImg = isSafeImageUrl(recipe.image) ? recipe.image : "";

  document.getElementById("modalImage").src = safeImg;
  document.getElementById("modalCategory").textContent = recipe.categoryName;
  document.getElementById("modalTitle").textContent = cleanTitle;

  const modalDescEl = document.getElementById("modalDescription");
  if (modalDescEl) {
    modalDescEl.textContent = cleanDescription;
  }

  document.getElementById("modalPrepTime").textContent = recipe.prepTime;
  document.getElementById("modalCookTime").textContent = recipe.cookTime;
  document.getElementById("modalDifficulty").textContent = recipe.difficulty;
  document.getElementById("modalCalories").textContent = recipe.calories;

  renderModalIngredients();

  document.getElementById("modalInstructionsList").innerHTML = recipe.instructions
    .map((step) => `<li>${escapeHTML(step)}</li>`)
    .join("");

  document.getElementById("modalBackdrop").classList.add("open");
  document.getElementById("recipeModal").classList.add("open");
}

function closeModal() {
  document.getElementById("modalBackdrop").classList.remove("open");
  document.getElementById("recipeModal").classList.remove("open");
}

function updateServings(delta) {
  if (!currentModalRecipe) return;
  const next = currentServings + delta;
  if (next >= 1 && next <= 20) {
    currentServings = next;
    renderModalIngredients();
  }
}

function renderModalIngredients() {
  document.getElementById("modalServingsCount").textContent = currentServings;
  const ratio = currentServings / currentModalRecipe.baseServings;

  document.getElementById("modalIngredientsList").innerHTML = currentModalRecipe.ingredients
    .map((ing) => {
      const scaled = Math.round(ing.amount * ratio * 10) / 10;
      return `
        <li class="ingredient-line">
          <strong>${escapeHTML(ing.name)}</strong> —
          <span class="ingredient-amount">${escapeHTML(scaled)}</span>
          ${escapeHTML(ing.unit)}
        </li>
      `;
    })
    .join("");
}

// Кухонний таймер
let timerSeconds = 300;
let defaultTimerSeconds = 300;
let timerInterval = null;

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function updateTimerUI() {
  document.getElementById("timerDisplay").textContent = formatTime(timerSeconds);
}

function setTimerPreset(minutes) {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = minutes * 60;
  defaultTimerSeconds = timerSeconds;
  document.getElementById("startTimerBtn").innerHTML = '<i class="fa-solid fa-play"></i> СТАРТ';
  updateTimerUI();
}

function toggleTimer() {
  const btn = document.getElementById("startTimerBtn");
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    btn.innerHTML = '<i class="fa-solid fa-play"></i> ПРОДОВЖИТИ';
    return;
  }

  clearInterval(timerInterval);
  btn.innerHTML = '<i class="fa-solid fa-pause"></i> ПАУЗА';
  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateTimerUI();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      btn.innerHTML = '<i class="fa-solid fa-play"></i> СТАРТ';
      alert("Час вийшов! Страва готова.");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = defaultTimerSeconds;
  document.getElementById("startTimerBtn").innerHTML = '<i class="fa-solid fa-play"></i> СТАРТ';
  updateTimerUI();
}

// Випадкова порада шефа
let currentTipIndex = 0;
function getRandomTip() {
  currentTipIndex = (currentTipIndex + 1) % culinaryTips.length;
  const tip = culinaryTips[currentTipIndex];
  document.getElementById("tipTitle").innerHTML = tip.title;
  document.getElementById("tipText").textContent = tip.text;
}

// Створення власного рецепта та збереження в браузері
function handleRecipeSubmit(event) {
  event.preventDefault();

  const title = sanitizeTitleOrDescription(document.getElementById("newRecipeTitle").value);
  const category = document.getElementById("newRecipeCategory").value;
  const prepTime = document.getElementById("newRecipePrep").value.trim();
  const cookTime = document.getElementById("newRecipeCook").value.trim();
  const difficulty = document.getElementById("newRecipeDifficulty").value;
  const calories = document.getElementById("newRecipeCalories").value.trim() || "Не вказано";
  const rawImage = document.getElementById("newRecipeImage").value.trim();
  const image = isSafeImageUrl(rawImage) && rawImage
    ? rawImage
    : "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80";
  const description = sanitizeTitleOrDescription(document.getElementById("newRecipeDescription").value);

  const ingredients = document.getElementById("newRecipeIngredients").value
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const parts = line.split(/\s*[—–-]\s*/);
      if (parts.length >= 2) {
        const name = parts[0];
        const qtyPart = parts.slice(1).join(" ").trim();
        const match = qtyPart.match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);
        if (match) {
          return {
            name,
            amount: Number(match[1].replace(",", ".")),
            unit: match[2] || "шт"
          };
        }
        return { name, amount: 1, unit: qtyPart || "за смаком" };
      }
      return { name: line, amount: 1, unit: "за смаком" };
    });

  const instructions = document.getElementById("newRecipeInstructions").value
    .split("\n")
    .map(step => step.trim())
    .filter(Boolean);

  if (!title || !description || ingredients.length === 0 || instructions.length === 0) {
    alert("Заповніть назву, опис, інгредієнти та кроки приготування.");
    return;
  }

  const categoryNames = {
    breakfast: "Сніданки",
    main: "Основні страви",
    soup: "Супи",
    dessert: "Десерти",
    vegan: "Веганські"
  };

  const newRecipe = {
    id: Date.now(),
    title,
    category,
    categoryName: categoryNames[category] || "Інші",
    prepTime,
    cookTime,
    difficulty,
    calories,
    baseServings: 2,
    description,
    image,
    ingredients,
    instructions,
    isUserRecipe: true
  };

  recipesData.unshift(newRecipe);
  syncUserRecipesStorage();

  // Показуємо новий рецепт у каталозі
  currentCategory = "all";
  searchQuery = "";
  showFavoritesOnly = false;
  document.getElementById("headerSearchInput").value = "";
  document.getElementById("favToggleBtn").classList.remove("active");
  document.querySelectorAll("#categoryPillsContainer .filter").forEach(btn => btn.classList.remove("active"));
  document.querySelector('#categoryPillsContainer .filter[onclick*="all"]').classList.add("active");

  event.target.reset();
  renderRecipes();
  document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
  alert("Готово! Ваш рецепт додано до каталогу.");
}

function handleSubscribe(event) {
  event.preventDefault();
  alert("Ви успішно підписалися на щотижневу розсилку рецептів!");
  event.target.reset();
}