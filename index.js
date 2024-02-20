$(function () {
  var offset = 0;
  var rpp = 9;
  let selectedId = 0;

  function createInnerCard(i) {
    return `
    <h1 id="name-${i}">${pets[i].name}</h1>
    <img id="image-${i}" src="./images/pets/${pets[i].id}.jpg">
    <p><strong>Age: </strong><span id="age-${i}">${pets[i].age}</span></p>
    <p><strong>Sex: </strong><span id="sex-${i}">${pets[i].sex}</span></p>
    <p><strong>Type: </strong><span id="type-${i}">${pets[i].type}</span></p>
    <a href="detail.html?item=${i}" id="link-${i}"></a>
    <div class="d-flex justify-content-center" id="btn-box-${i}">
        <button id="update-${i}" data-id="${i}" class="btn btn-secondary update-btn" data-bs-toggle="modal" data-bs-target="#modal-update">Update</button>
        <button id="delete-${i}" class="btn btn-sm btn-danger btn-delete">Delete</button>
        <button class="btn btn-primary getButton load-btn" type="button" data-bs-toggle="modal" data-bs-target="#modal" data-id="${i}">See Details</button>
    </div>
  `;
  }

  let loadMoreButton = document.createElement("button");
  loadMoreButton.classList.add("btn", "load-btn");
  loadMoreButton.classList.add("btn-primary");
  loadMoreButton.innerText = "Load more";
  loadMoreButton.addEventListener("click", function () {
    offset += 9;
    displayElements();
  });
  document.querySelector("#loadmore").append(loadMoreButton);

  function createCard(i) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.id = `card-${i}`;
    card.innerHTML = createInnerCard(i);
    document.getElementById("content").append(card);
    if (offset + rpp > pets.length) {
      loadMoreButton.hidden = true;
    }
  }

  function displayElements() {
    for (let i = offset; i < Math.min(offset + rpp, pets.length); i++) {
      if (pets[i]) {
        createCard(i);
      }
    }
  }

  displayElements();

  $(document).on("click", ".btn-danger", function () {
    pets[parseInt($(this).parents(".card")[0].id)] = null;
    $(this).parents(".card").remove();
  });

  $(document).on("click", ".getButton", function () {
    let id = $(this).attr("data-id");
    $("#modal [name=name]").text(pets[id].name);
    $("#modal [name=breed]").text(pets[id].breed);
    $("#sex").text(pets[id].sex);
    $("#age").text(pets[id].age);
    $("#color").text(pets[id].color);
    $("#fixed").text(pets[id].fixed);
    $("#id").text(pets[id].id);
    $("#microchip_num").text(pets[id].microchip_num);
    $("#modal a").attr("href", "detail.html?item=" + id);
  });

  $(document).on("click", ".update-btn", function () {
    let update_id = $(this).attr("data-id");
    selectedId = update_id;
    $('#update-area [name="name"]').val(pets[update_id].name);
    $('#update-area [name="age"]').val(pets[update_id].age);
    $('#update-area [name="sex"]').val(pets[update_id].sex);
    $('#update-area [name="breed"]').val(pets[update_id].breed);
    $('#update-area [name="color"]').val(pets[update_id].color);
    $('#update-area [name="fixed"]').prop("checked", pets[update_id].fixed);
    $('#update-area [name="id"]').val(pets[update_id].id);
    $('#update-area [name="microchip_num"]').val(pets[update_id].microchip_num);
    $('#update-area [name="summary"]').val(pets[update_id].summary);
    $('#update-area [name="health_info"]').val(pets[update_id].health_info);
    $('#update-area [name="type"]').val(pets[update_id].type);
    $('#update-area [name="image"]').val(pets[update_id].image);
  });

  $(document).on("click", "#btn-update", function () {
    var name = $('#update-area [name="name"]').val();
    var age = $('#update-area [name="age"]').val();
    var sex = $('#update-area [name="sex"]').val();
    var breed = $('#update-area [name="breed"]').val();
    var color = $('#update-area [name="color"]').val();
    var fixed = $('#update-area [name="fixed"]').is(":checked");
    var id = $('#update-area [name="id"]').val();
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
    pets[selectedId].id = id;
    pets[selectedId].microchip_num = microchip_num;
    pets[selectedId].summary = summary;
    pets[selectedId].health_info = health_info;
    pets[selectedId].type = type;
    pets[selectedId].image = image;

    $(`#name-${selectedId}`).text(name);
    $(`#image-${selectedId}`).text(image);
    $(`#age-${selectedId}`).text(age);
    $(`#sex-${selectedId}`).text(sex);
    $(`#type-${selectedId}`).text(type);
  });

  // "Create" button (adding input to array)

  $(document).on("click", "#btn-save", function () {
    var name = $('#input-area [name="name"]').val();
    var age = $('#input-area [name="age"]').val();
    var sex = $('#input-area [name="sex"]').val();
    var breed = $('#input-area [name="breed"]').val();
    var color = $('#input-area [name="color"]').val();
    var fixed = $('#input-area [name="fixed"]').is(":checked");
    var id = $('#input-area [name="id"]').val();
    var microchip_num = $('#input-area [name="microchip_num"]').val();
    var summary = $('#input-area [name="summary"]').val();
    var health_info = $('#input-area [name="health_info"]').val();
    var type = $('#input-area [name="type"]').val();
    var image = $('#input-area [name="image"]').val();

    var newPet = {
      name: name,
      age: age,
      sex: sex,
      breed: breed,
      color: color,
      fixed: fixed,
      id: id,
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
