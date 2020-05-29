export default function filterRecipes(event) {
  const searchInput = event.currentTarget;
  window.filteredIngredients = searchInput.value.split(" ");
}
