export default function addRecipe(element) {
  const recipeLi = document.createElement("Li");

  const recipe = document.createElement("article");
  recipe.classList.add("recipe");

  const recipeImg = document.createElement("img");
  recipeImg.setAttribute("src", "https://picsum.photos/id/163/800/500");
  recipeImg.setAttribute("alt", "recipe-title");

  const recipeH2 = document.createElement("h2");
  const titre = document.createTextNode("Recipe Title");

  const recipeH3 = document.createElement("h3");
  const ingredientsList = document.createTextNode("Ingredients list");

  element.appendChild(recipeLi);
  recipeLi.appendChild(recipe);
  recipe.appendChild(recipeImg);
  recipe.appendChild(recipeH2);
  recipeH2.appendChild(titre);
  recipe.appendChild(recipeH3);
  recipeH3.appendChild(ingredientsList);
}
