$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  var newBurger = {
    name: $("#burgerName").val().trim(),
  };

  // Send the POST request.
  $.ajax("/", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

//If user clicks on the city buttons the main functions run
$(".devoured").on("click", function (event) {
  // Get the ID from the button.
  let id = $(this).data("id");

  let newId = {
    id: id
  };

  // Send the UPDATE request.
  $.ajax("/", {
    type: "PUT",
    data: newId
  }).then(
    function() {
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
