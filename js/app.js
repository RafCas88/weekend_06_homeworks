document.addEventListener("DOMContentLoaded", () => {
  const newItemForm = document.querySelector("#new-item-form");
  newItemForm.addEventListener("submit", handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const footballerListItem = createFootballerListItem(event.target);
  const footballerList = document.querySelector("#footballer-list");
  footballerList.appendChild(footballerListItem);

  event.target.reset();
}

const createFootballerListItem = function (form) {
  const footballerListItem = document.createElement("li");
  footballerListItem.classList.add("footballer-list-item");

  const name = document.createElement("h2");
  name.textContent = form.name.value;
  footballerListItem.appendChild(name);

  const team = document.createElement("h3");
  team.textContent = form.team.value;
  footballerListItem.appendChild(team);

  const league = document.createElement("p");
  league.textContent = form.league.value;
  footballerListItem.appendChild(league);

  return footballerListItem;
}

const handleDeleteAllClick = function (event) {
  const footballerList = document.querySelector("#footballer-list");
  footballerList.innerHTML = "";
}
