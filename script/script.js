const inputPanel = document.querySelector(".inputPanel");
const valuePlace = document.querySelector(".valuePlace");

function addToList() {
  let elem = document.createElement("p");
  elem.classList.add("valueOfList");
  let elemText = document.createTextNode(inputPanel.value);
  elem.appendChild(elemText);
  let firstElem = valuePlace.firstChild.nextSibling;
  valuePlace.insertBefore(elem, firstElem);
  inputPanel.value = "";
  elem.addEventListener("click", remove);
}

function remove() {
  this.style.display = "none";
}

function clearList() {
  valuePlace.innerHTML = "<div>";
  valuePlace.classList.add("valuePlace");
}