let cardsOnPage = 9;
let currentPage = 1;

let numOfPages = Math.ceil(pets.length / cardsOnPage);

let buttonDiv = document.getElementById("buttons");

generateCards();

// generates buttons
for (let i = 1; i <= numOfPages; i++) {
  let button = document.createElement("li");
  button.setAttribute("id", `pagination-${i}`);
  button.setAttribute("aria-current", "page");
  if (i === currentPage) {
    button.setAttribute("class", "page-item active");
    button.innerHTML += `
          <span class="page-link">${i}</span>
        `;
  } else {
    button.setAttribute("class", "page-item");
    button.innerHTML += `
          <a class="page-link" href="#">${i}</a>
            `;
  }

  button.addEventListener("click", function() {
    let oldCurrentButton = document.getElementById(`pagination-${currentPage}`);
    oldCurrentButton.removeAttribute("class");
    oldCurrentButton.setAttribute("class", "page-item");
    oldCurrentButton.innerHTML = `
            <a class="page-link" href="#">${currentPage}</a>
              `;
    currentPage = i;
    let newCurrentButton = document.getElementById(`pagination-${currentPage}`);
    newCurrentButton.setAttribute("class", "page-item active");
    newCurrentButton.innerHTML = `
            <span class="page-link">${i}</span>
          `;
    generateCards();
  });
  buttonDiv.appendChild(button);
}

function generateCards() {
  let cardDiv = document.getElementById("cards");
  if (cardDiv.hasChildNodes()) {
    cardDiv.innerHTML = "";
  }
  let minAnimalId = (currentPage - 1) * cardsOnPage;
  let maxAnimalId = cardsOnPage * currentPage;
  for (let i = minAnimalId; i < maxAnimalId; i++) {
    cardDiv.innerHTML += `<div class="card">
            <h1>${pets[i].name}</h1>
      <img src="./images/pets/${pets[i].id}.jpg">
            <p><strong>Age: </strong>${pets[i].age}</p>
            <p><strong>Sex: </strong>${pets[i].sex}</p>
            <p><strong>Type: </strong>${pets[i].type}</p>
            <a href="detail.html?item=${i}">See details</a></div>`;
  }
}
