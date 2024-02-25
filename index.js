$(function() {
  var offset = 0;
  var rpp = 9;
  let selectedId = 0;
  let contentCleared = false;

  function getIndex(id) {
    for (let i = 0; i < pets.length; i++) {
      if (pets[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  function isUniqueId(id, currentlyContained = false) {
    let count = 0;
    for (let i = 0; i < pets.length; i++) {
      if (pets[i].id == id) {
        count++;
      }
    }
    if (currentlyContained) {
      return count <= 1;
    }
    return count === 0;
  }

  function createInnerCard(i) {
    return `
    <h1 id="name-${pets[i].id}">${pets[i].name}</h1>
    <img id="image-${pets[i].id}" src="./images/pets/${pets[i].id}.jpg">
    <p><strong>Age: </strong><span id="age-${pets[i].id}">${pets[i].age}</span></p>
    <p><strong>Sex: </strong><span id="sex-${pets[i].id}">${pets[i].sex}</span></p>
    <p><strong>Type: </strong><span id="type-${pets[i].id}">${pets[i].type}</span></p>
    <a href="detail.html?item=${pets[i].id}" id="link-${pets[i].id}"></a>
    <div class="d-flex justify-content-center" id="btn-box-${pets[i].id}">
        <button id="update-${pets[i].id}" data-id="${pets[i].id}" class="btn btn-secondary update-btn" data-bs-toggle="modal" data-bs-target="#modal-update">Update</button>
        <button id="delete-${pets[i].id}" class="btn btn-sm btn-danger btn-delete">Delete</button>
        <button class="btn btn-primary getButton load-btn" type="button" data-bs-toggle="modal" data-bs-target="#modal" data-id="${pets[i].id}">See Details</button>
    </div>
  `;
  }

  let loadMoreButton = document.createElement("button");
  loadMoreButton.classList.add("btn", "load-btn");
  loadMoreButton.classList.add("btn-primary");
  loadMoreButton.innerText = "Load more";
  loadMoreButton.addEventListener("click", function() {
    offset += 9;
    displayElements();
  });
  document.querySelector("#loadmore").append(loadMoreButton);

  function createCard(i) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.id = `card-${pets[i].id}`;
    card.setAttribute("data-id", pets[i].id);
    card.innerHTML = createInnerCard(i);
    document.getElementById("content").append(card);
    if (offset + rpp > pets.length) {
      loadMoreButton.hidden = true;
    }
  }

  function displayElements() {
    for (
      let i = contentCleared ? 0 : offset;
      i < Math.min(offset + rpp, pets.length);
      i++
    ) {
      if (pets[i]) {
        createCard(i);
      }
    }
  }

  displayElements();

  $(document).on("click", ".btn-danger", function() {
    let cardId = getIndex(parseInt($(this).closest(".card").attr("data-id")));
    console.log(cardId);
    pets.splice(cardId, 1);
    $(this).closest(".card").remove();

    $("#content").empty();
    contentCleared = true;
    displayElements();
    contentCleared = false;
  });

  $(document).on("click", ".getButton", function() {
    let animalId = parseInt($(this).attr("data-id"));
    let id = getIndex(animalId);
    $("#modal [name=name]").text(pets[id].name);
    $("#modal [name=breed]").text(pets[id].breed);
    $("#sex").text(pets[id].sex);
    $("#age").text(pets[id].age);
    $("#color").text(pets[id].color);
    $("#fixed").text(pets[id].fixed);
    $("#id").text(pets[id].id);
    $("#microchip_num").text(pets[id].microchip_num);
    $("#modal a").attr("href", "detail.html?item=" + animalId);
  });

  $(document).on("click", ".update-btn", function() {
    let update_id = getIndex(parseInt($(this).attr("data-id")));
    selectedId = update_id;
    $('#update-area [name="name"]').val(pets[update_id].name);
    $('#update-area [name="age"]').val(pets[update_id].age);
    $('#update-area [name="sex"]').val(pets[update_id].sex);
    $('#update-area [name="breed"]').val(pets[update_id].breed);
    $('#update-area [name="color"]').val(pets[update_id].color);
    $('#update-area [name="fixed"]').prop("checked", pets[update_id].fixed);
    $('#update-area [name="microchip_num"]').val(pets[update_id].microchip_num);
    $('#update-area [name="summary"]').val(pets[update_id].summary);
    $('#update-area [name="health_info"]').val(pets[update_id].health_info);
    $('#update-area [name="type"]').val(pets[update_id].type);
    $('#update-area [name="image"]').val(pets[update_id].image);
  });

  $(document).on("click", "#btn-update", function() {
    var name = $('#update-area [name="name"]').val();
    var age = $('#update-area [name="age"]').val();
    var sex = $('#update-area [name="sex"]').val();
    var breed = $('#update-area [name="breed"]').val();
    var color = $('#update-area [name="color"]').val();
    var fixed = $('#update-area [name="fixed"]').is(":checked");
    var microchip_num = $('#update-area [name="microchip_num"]').val();
    var summary = $('#update-area [name="summary"]').val();
    var health_info = $('#update-area [name="health_info"]').val();
    var type = $('#update-area [name="type"]').val();
    var image = $('#update-area [name="image"]').val();

    pets[selectedId].name = name;
    pets[selectedId].age = age;
    pets[selectedId].sex = sex;
    pets[selectedId].breed = breed;
    pets[selectedId].color = color;
    pets[selectedId].fixed = fixed;
    pets[selectedId].microchip_num = microchip_num;
    pets[selectedId].summary = summary;
    pets[selectedId].health_info = health_info;
    pets[selectedId].type = type;
    pets[selectedId].image = image;

    $(`#name-${pets[selectedId].id}`).text(name);
    $(`#image-${pets[selectedId].id}`).text(image);
    $(`#age-${pets[selectedId].id}`).text(age);
    $(`#sex-${pets[selectedId].id}`).text(sex);
    $(`#type-${pets[selectedId].id}`).text(type);
  });

  // "Create" button (adding input to array)

  $(document).on("click", "#btn-save", function() {
    let randomId = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    var name = $('#input-area [name="name"]').val();
    var age = $('#input-area [name="age"]').val();
    var sex = $('#input-area [name="sex"]').val();
    var breed = $('#input-area [name="breed"]').val();
    var color = $('#input-area [name="color"]').val();
    var fixed = $('#input-area [name="fixed"]').is(":checked");
    var microchip_num = $('#input-area [name="microchip_num"]').val();
    var summary = $('#input-area [name="summary"]').val();
    var health_info = $('#input-area [name="health_info"]').val();
    var type = $('#input-area [name="type"]').val();
    var image = $('#input-area [name="image"]').val();

    if (!isUniqueId(randomId)) {
      alert("error generating unique id. Try again.");
    }

    var newPet = {
      name: name,
      age: age,
      sex: sex,
      breed: breed,
      color: color,
      fixed: fixed,
      id: randomId,
      microchip_num: microchip_num,
      summary: summary,
      health_info: health_info,
      type: type,
      image: image,
    };
    pets.push(newPet);
    if (pets.length - (offset + rpp) < 9) {
      createCard(pets.length - 1);
    }
  });
});
