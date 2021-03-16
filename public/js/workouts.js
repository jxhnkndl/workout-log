$(document).ready(function () {
  $("#add-a-workout").on("click", function () {
    var category = $("#category").val();
    var distance = $("#distance").val();
    var duration = $("#duration").val();
    var workout_date = $("#date-input").val();
    var details = $("#details").val();
    var data = {
      category: category,
      distance: distance,
      duration: duration,
      workout_date: workout_date,
      details: details,
    };
    if (distance === "") {
      showAlert(
        "is-danger",
        "Whoops! Looks like your distance is missing. Please provide a valid distance and try again. If distance is not applicable, please input 0."
      );
      return;
    }

    console.log("Add Workout");
    console.log(data);
    $.ajax({
      url: "/api/workouts",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      data: JSON.stringify(data),
      success: function (res) {
        console.log(res);
        // redirect page to workout page
        window.location.href = "/view_workouts";
      },
      error: function () {
        console.error("Error");
      },
    });
  });

  $(".complete-workout").on("click", function (e) {
    const id = $(e.target).attr("data-id");
    const completed = $(e.target).attr("data-complete");
    // Format data to send back to API
    const data = {
      id: id,
      completed: completed,
    };

    $.ajax({
      url: "/api/workouts",
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      data: JSON.stringify(data),
      success: function (res) {
        console.log(res);
        // redirect page to workout page
        window.location.href = "/view_workouts";
      },
      error: function () {
        console.error("Error");
      },
    });
  });

  $(".delete-workout").on("click", function (e) {
    const id = $(e.target).attr("data-id");
    $.ajax({
      url: "/api/workouts",
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      data: JSON.stringify({ id: id }),
      success: function (res) {
        console.log(res);
        // redirect page to workout page
        window.location.href = "/view_workouts";
      },
      error: function () {
        console.error("Error");
      },
    });
  });
  //show alert function
  function showAlert(color, message) {
    if ($(".notification")) {
      $(".notification").remove();
    }
    const alertDiv = $("<div>");
    alertDiv.addClass(`notification is-light has-text-justified m-2 ${color}`);
    alertDiv.text(message);
    $("#form-top").before(alertDiv);
    setTimeout(function () {
      $(".notification").remove();
    }, 2000);
  }

  // Clear fields in UI
  function clearFields() {
    $("#category").val("");
    $("#distance").val("");
    $("#duration").val("");
    $("#date").val("");
    $("#details").val("");
  }
});
