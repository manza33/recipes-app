export default function addSearchInput(element) {
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("name", "ingrédients");
  searchInput.setAttribute("placeholder", "Ingrédients...");
  searchInput.classList.add("search-input");

  element.appendChild(searchInput);
}
