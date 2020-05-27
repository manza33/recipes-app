export default function addRecipe(element, { id, name, ingredients = [] }) {
  const recipeLi = document.createElement("Li");

  const recipe = document.createElement("article");
  recipe.classList.add("recipe");

  const recipeImg = document.createElement("img");
  recipeImg.setAttribute("src", `https://picsum.photos/id/${id}/800/500`);
  recipeImg.setAttribute("alt", name);

  const recipeH2 = document.createElement("h2");
  const titre = document.createTextNode(name);

  const recipeH3 = document.createElement("h3");
  const ingredientsList = document.createTextNode(ingredients.join(", "));

  element.appendChild(recipeLi);
  recipeLi.appendChild(recipe);
  recipe.appendChild(recipeImg);
  recipe.appendChild(recipeH2);
  recipeH2.appendChild(titre);
  recipe.appendChild(recipeH3);
  recipeH3.appendChild(ingredientsList);
}
