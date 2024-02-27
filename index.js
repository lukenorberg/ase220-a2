$(function() {
  var offset = 0;
  var rpp = 9;
  let selectedIndex = 0;

  let apiUrl = "https://jsonblob.com/api/jsonBlob/1212130449811169280";

  function getIndex(id, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
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
  
  // Creating the inner card function (displaying card data)

  function createInnerCard(index, pets) {
    return `
    <h1 id="name-${pets[index].id}">${pets[index].name}</h1>
    <img id="image-${pets[index].id}" src="./images/pets/${pets[index].id}.jpg">
    <p><strong>Age: </strong><span id="age-${pets[index].id}">${pets[index].age}</span></p>
    <p><strong>Sex: </strong><span id="sex-${pets[index].id}">${pets[index].sex}</span></p>
    <p><strong>Type: </strong><span id="type-${pets[index].id}">${pets[index].type}</span></p>
    <a href="detail.html?item=${pets[index].id}" id="link-${pets[index].id}"></a>
    <div class="d-flex justify-content-center" id="btn-box-${pets[index].id}">
        <button id="update-${pets[index].id}" data-id="${pets[index].id}" class="btn btn-secondary update-btn" data-bs-toggle="modal" data-bs-target="#modal-update">Update</button>
        <button id="delete-${pets[index].id}" data-id="${pets[index].id}" class="btn btn-sm btn-danger btn-delete">Delete</button>
        <button class="btn btn-primary detailButton load-btn" type="button" data-bs-toggle="modal" data-bs-target="#modal" data-id="${pets[index].id}">See Details</button>
    </div>
  `;
  }

  // "Load more" button

  let loadMoreButton = document.createElement("button");
  loadMoreButton.classList.add("btn", "load-btn");
  loadMoreButton.classList.add("btn-primary");
  loadMoreButton.innerText = "Load more";
  loadMoreButton.addEventListener("click", function() {
    offset += 9;
    displayElements();
  });
  document.querySelector("#loadmore").append(loadMoreButton);

  // Create card function

  function createCard(index, pets) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.id = `card-${pets[index].id}`;
    card.setAttribute("data-id", pets[index].id);
    card.innerHTML = createInnerCard(index, pets);
    document.getElementById("content").append(card);
    if (offset + rpp > pets.length) {
      loadMoreButton.hidden = true;
    }
  }
  
  // Displaying the cards
  
  var pets;
  function displayElements(contentCleared = false) {
    $.get(apiUrl, function(data) {
	  pets = data;
	  console.log(pets);
      for (
        let i = contentCleared ? 0 : offset;
        i < Math.min(offset + rpp, pets.length);
        i++
      ) {
        createCard(i, pets);
      }
    });
  }

  displayElements();

  // "Delete" button

  $(document).on("click", ".btn-delete", function() {
    console.log("Clicked");
	let petId = parseInt($(this).attr("data-id"));
	
	$.get(apiUrl, function(data) {
	  let pets = data;
	  let petIndex = getIndex(petId, pets);
      $(this).closest(".card").remove();
      $("#content").empty();
      displayElements(true);
	  
	  if (petIndex != -1){
	    pets.splice(petIndex, 1);
	  
	    $.ajax({
		  type: "PUT",
		  url: apiUrl,
		  data: JSON.stringify(pets),
		  contentType: "application/json; charset=utf-8",
		  dataType: "json",
		  success: function() {
			$("#content").empty();
			displayElements(true);
		  },
		  error: function(errMsg) {
			alert(errMsg);
		  },
		});
	  } else {
	    alert("Pet not found.");
	  }
    });
  });

  // "See Details" button
  
  $(document).on("click", ".detailButton", function() {
    let animalId = parseInt($(this).attr("data-id"));
    $.get(apiUrl, function(data) {
      let pets = data;
      let id = getIndex(animalId, pets);
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
  });

  // "Update" button - load modal with pet info

  $(document).on("click", ".update-btn", function() {
    let petId = parseInt($(this).attr("data-id"));
    $.get(apiUrl, function(data) {
      let pets = data;
      let petIndex = getIndex(petId, pets);
      selectedIndex = petIndex;

      $('#update-area [name="name"]').val(pets[petIndex].name);
      $('#update-area [name="age"]').val(pets[petIndex].age);
      $('#update-area [name="sex"]').val(pets[petIndex].sex);
      $('#update-area [name="breed"]').val(pets[petIndex].breed);
      $('#update-area [name="color"]').val(pets[petIndex].color);
      $('#update-area [name="fixed"]').prop("checked", pets[petIndex].fixed);
	  $('#update-area [name="id"]').val(pets[petIndex].id);
      $('#update-area [name="microchip_num"]').val(pets[petIndex].microchip_num);
      $('#update-area [name="summary"]').val(pets[petIndex].summary);
      $('#update-area [name="health_info"]').val(pets[petIndex].health_info);
      $('#update-area [name="type"]').val(pets[petIndex].type);
      $('#update-area [name="image"]').val(pets[petIndex].image);
    });
  });

  // "Update" modal - "Save" button

  $("#btn-update").click(function() {
	let petId = parseInt($('#update-area [name="id"]').val());
    $.get(apiUrl, function(data) {
	  let pets = data;
	  let petIndex = getIndex(petId, pets);
	  
	  if (petIndex !== -1) {
  	    pets[petIndex].name = $('#update-area [name="name"]').val();
	    pets[petIndex].age = $('#update-area [name="age"]').val();
	    pets[petIndex].sex = $('#update-area [name="sex"]').val();
	    pets[petIndex].breed = $('#update-area [name="breed"]').val();
	    pets[petIndex].color = $('#update-area [name="color"]').val();
		pets[petIndex].fixed = $('#update-area [name="fixed"]').is(" :checked");
		pets[petIndex].microchip_num = $('#update-area [name="microchip_num"]').val();
		pets[petIndex].summary = $('#update-area [name="summary"]').val();
		pets[petIndex].health_info = $('#update-area [name="health_info"]').val();
		pets[petIndex].type = $('#update-area [name="type"]').val();
		pets[petIndex].image = $('#update-area [name="image"]').val();
		
		$.ajax({
		  type: "PUT",
		  url: apiUrl,
		  data: JSON.stringify(pets),
		  contentType: "application/json; charset=utf-8",
		  dataType: "json",
		  success: function() {
			$("#content").empty();
			displayElements(true);
		  },
		  error: function(errMsg) {
			alert(errMsg);
		  },
		});
	  } else {
		alert("Pet not found.");
	  }
	});
  });
});

  // "Create" button (adding input to array)

  $(document).on("click", "#btn-save", function() {
    let randomId = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    if (!isUniqueId(randomId)) {
      alert("error generating unique id. Try again.");
      return;
    }

    var newPet = {
      id: randomId,
      name: $('#input-area [name="name"]').val(),
      age: $('#input-area [name="age"]').val(),
      sex: $('#input-area [name="sex"]').val(),
      breed: $('#input-area [name="breed"]').val(),
      color: $('#input-area [name="color"]').val(),
      fixed: $('#input-area [name="fixed"]').is(":checked"),
      microchip_num: $('#input-area [name="microchip_num"]').val(),
      summary: $('#input-area [name="summary"]').val(),
      health_info: $('#input-area [name="health_info"]').val(),
      type: $('#input-area [name="type"]').val(),
      image: $('#input-area [name="image"]').val(),
    };

    $.get(apiUrl, function(data) {
      let pets = data;
      pets.push(newPet);
      $.ajax({
        type: "PUT",
        url: apiUrl,
        data: JSON.stringify(pets),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function() {
          $("#content").empty();
          displayElements(true);
        },
        error: function(errMsg) {
          alert(errMsg);
        },
      });
    });
  });

