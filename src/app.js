import addSearchInput from "./addSearchInput";
import addRecipe from "./addRecipe";
import responseToJson from "./responseToJson";
//import filterRecipes from "./filterRecipes";

export default function app() {
  console.log("Run app");
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const recipesList = document.getElementById("recipes-list");

  addSearchInput(header);

  let filteredIngredients = [];

  const displayRecipes = (recipes) => {
    recipes.map((recipe) => {
      addRecipe(recipesList, recipe);
    });
  };

  const filterRecipes = (recipes) => {
    if (filteredIngredients.length === 0) return recipes;

    recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        filteredIngredients.includes(ingredient)
      )
    );
    return filterRecipes;
  };

  const searchInput = document.getElementById("ingredients");
  searchInput.addEventListener("keyup", (event) => {
    const searchInput = event.currentTarget;
    filteredIngredients = searchInput.value.split(" ");
  });

  fetch("http://localhost:3000/recipes")
    .then(responseToJson)
    .then(displayRecipes);
}
