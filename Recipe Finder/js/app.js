const apiKey = "42574c911d1c4878840ea39c2cee1520";
const searchBtn = document.getElementById("search-btn");
const ingredientsInput = document.getElementById("ingredients");
const recipesContainer = document.getElementById("recipes");

searchBtn.addEventListener("click", () => {
    const ingredients = ingredientsInput.value.trim();
    if (!ingredients) {
        alert("Please enter ingredients!");
        return;
    }

    fetchRecipes(ingredients);
});

function fetchRecipes(ingredients) {
    recipesContainer.innerHTML = "<p>Loading...</p>";
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=6&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                recipesContainer.innerHTML = "<p>No recipes found. Try different ingredients.</p>";
                return;
            }

            displayRecipes(data);
        })
        .catch(error => {
            recipesContainer.innerHTML = "<p>Something went wrong. Please try again later.</p>";
            console.error(error);
        });
}

function displayRecipes(recipes) {
    recipesContainer.innerHTML = "";
    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe");

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-details">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-time">Missing Ingredients: ${recipe.missedIngredientCount}</p>
            </div>
        `;

        recipeCard.addEventListener("click", () => {
            window.open(`https://spoonacular.com/recipes/${recipe.title.replace(/ /g, "-")}-${recipe.id}`, "_blank");
        });

        recipesContainer.appendChild(recipeCard);
    });
}
